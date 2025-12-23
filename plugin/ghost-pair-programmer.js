/**
 * Ghost Pair Programmer Plugin for OpenCode Kuli Pro
 * 
 * Automatically injects git context into every session:
 * - Current branch name
 * - Recent commits (last 5)
 * - Staged/unstaged changes
 * - Untracked files
 * 
 * This gives the AI "pair programmer" awareness of what you're working on.
 */

import { execSync } from 'child_process';
import path from 'path';

export const GhostPairProgrammerPlugin = async ({ client, directory }) => {
  const state = (globalThis.__ghostPairState ||= {
    injectedSessions: new Set()
  });

  const getSessionID = (event) => {
    return (
      event?.properties?.info?.id ||
      event?.properties?.sessionID ||
      event?.session?.id
    );
  };

  const runGitCommand = (cmd, cwd) => {
    try {
      return execSync(cmd, { cwd, encoding: 'utf8', timeout: 5000 }).trim();
    } catch (e) {
      return null;
    }
  };

  const getGitContext = (cwd) => {
    // Check if we're in a git repo
    const isGitRepo = runGitCommand('git rev-parse --is-inside-work-tree', cwd);
    if (isGitRepo !== 'true') return null;

    const branch = runGitCommand('git branch --show-current', cwd) || 'detached HEAD';
    const repoRoot = runGitCommand('git rev-parse --show-toplevel', cwd);
    const repoName = repoRoot ? path.basename(repoRoot) : 'unknown';
    
    // Recent commits (last 5)
    const recentCommits = runGitCommand(
      'git log --oneline -5 --no-decorate 2>/dev/null || echo "No commits yet"',
      cwd
    );

    // Staged changes
    const staged = runGitCommand('git diff --cached --name-status', cwd) || 'None';
    
    // Unstaged changes
    const unstaged = runGitCommand('git diff --name-status', cwd) || 'None';
    
    // Untracked files
    const untracked = runGitCommand('git ls-files --others --exclude-standard', cwd) || 'None';

    // Stash count
    const stashCount = runGitCommand('git stash list | wc -l', cwd)?.trim() || '0';

    // Last commit message
    const lastCommitMsg = runGitCommand('git log -1 --pretty=%B 2>/dev/null', cwd) || 'No commits';

    return {
      repoName,
      branch,
      recentCommits,
      staged: staged || 'None',
      unstaged: unstaged || 'None',
      untracked: untracked || 'None',
      stashCount,
      lastCommitMsg: lastCommitMsg.split('\n')[0] // First line only
    };
  };

  const formatGitContext = (ctx) => {
    if (!ctx) return null;

    return `<git-context>
## Repository: ${ctx.repoName}
## Branch: ${ctx.branch}

### Recent Commits (last 5):
\`\`\`
${ctx.recentCommits}
\`\`\`

### Working Tree Status:
**Staged:**
\`\`\`
${ctx.staged}
\`\`\`

**Unstaged:**
\`\`\`
${ctx.unstaged}
\`\`\`

**Untracked:**
\`\`\`
${ctx.untracked}
\`\`\`

**Stashes:** ${ctx.stashCount}
**Last Commit:** ${ctx.lastCommitMsg}
</git-context>`;
  };

  const injectGitContext = async (sessionID) => {
    const gitContext = getGitContext(directory);
    if (!gitContext) return false;

    const formatted = formatGitContext(gitContext);
    if (!formatted) return false;

    try {
      await client.session.prompt({
        path: { id: sessionID },
        body: {
          noReply: true,
          parts: [
            {
              type: "text",
              text: formatted,
              synthetic: true
            }
          ]
        }
      });
      return true;
    } catch (e) {
      return false;
    }
  };

  return {
    event: async ({ event }) => {
      // Inject git context at session creation
      if (event.type === 'session.created') {
        const sessionID = getSessionID(event);
        if (!sessionID) return;
        if (state.injectedSessions.has(sessionID)) return;

        state.injectedSessions.add(sessionID);
        await injectGitContext(sessionID);
      }

      // Re-inject after compaction (abbreviated version)
      if (event.type === 'session.compacted') {
        const sessionID = getSessionID(event);
        if (!sessionID) return;

        // Re-inject fresh context after compaction
        await injectGitContext(sessionID);
      }
    }
  };
};
