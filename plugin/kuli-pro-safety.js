export const KuliProSafetyPlugin = async ({ client, $ }) => {
  const state = (globalThis.__kuliProSafetyState ||= {
    startedSessions: new Set(),
    idleNotifiedSessions: new Set(),
    commandCounts: new Map()
  });

  const getSessionID = (event) => {
    return (
      event?.properties?.info?.id ||
      event?.properties?.sessionID ||
      event?.session?.id
    );
  };

  const SENSITIVE_FILES = [
    'antigravity-accounts.json',
    '.env',
    '.env.local',
    '.env.production',
    'opencode.json',
    'secrets.json',
    'credentials.json',
    '.npmrc',
    '.pypirc',
    'id_rsa',
    'id_ed25519',
    '.ssh/config'
  ];

  const DANGEROUS_COMMANDS = [
    { pattern: /rm\s+-rf\s+[\/~]/, message: 'Dangerous recursive delete on system path' },
    { pattern: />\s*\/dev\/sd[a-z]/, message: 'Direct disk write detected' },
    { pattern: /mkfs\./, message: 'Filesystem format command detected' },
    { pattern: /dd\s+if=.*of=\/dev/, message: 'Direct disk overwrite detected' },
    { pattern: /chmod\s+-R\s+777\s+\//, message: 'Dangerous permission change on root' },
    { pattern: /:(){ :\|:& };:/, message: 'Fork bomb detected' }
  ];

  const checkDangerousCommand = (command) => {
    for (const { pattern, message } of DANGEROUS_COMMANDS) {
      if (pattern.test(command)) {
        return message;
      }
    }
    return null;
  };

  const notify = async (title, message) => {
    try {
      if (process.platform === 'darwin') {
        const script = 'display notification "' + message + '" with title "' + title + '"';
        await $`osascript -e ${script}`;
      }
    } catch (e) {}
  };

  return {
    event: async ({ event }) => {
      if (event.type === "session.created") {
        const sessionID = getSessionID(event);
        if (sessionID && state.startedSessions.has(sessionID)) return;
        if (sessionID) state.startedSessions.add(sessionID);

        try {
          if (sessionID) {
            await client.session.prompt({
              path: { id: sessionID },
              body: {
                noReply: true,
                parts: [
                  {
                    type: "text",
                    text: "[Kuli Pro] Mode Sakti Diaktifkan! Selamat bekerja, Bos!",
                    synthetic: true
                  }
                ]
              }
            });
          }
        } catch (e) {}

        await notify("OpenCode Kuli Pro", "Mode Sakti Diaktifkan!");
      }

      if (event.type === "session.idle") {
        const sessionID = getSessionID(event);
        if (sessionID && state.idleNotifiedSessions.has(sessionID)) return;
        if (sessionID) state.idleNotifiedSessions.add(sessionID);

        await notify("OpenCode Kuli Pro", "Tugas selesai, Bos!");
      }
    },

    "tool.execute.before": async (input) => {
      if (input.tool === "read") {
        const filePath = input.args?.filePath?.toLowerCase() || '';

        if (SENSITIVE_FILES.some(file => filePath.includes(file.toLowerCase()))) {
          throw new Error(
            'AKSES DITOLAK: File sensitif [' + input.args.filePath + '] dilindungi!'
          );
        }
      }

      if (input.tool === "bash") {
        const command = input.args?.command || '';
        const danger = checkDangerousCommand(command);

        if (danger) {
          throw new Error(
            'PERINTAH BERBAHAYA DIBLOKIR: ' + danger + '\nCommand: ' + command
          );
        }
      }

      if (input.tool === "write" || input.tool === "edit") {
        const filePath = input.args?.filePath?.toLowerCase() || '';

        if (SENSITIVE_FILES.some(file => filePath.includes(file.toLowerCase()))) {
          throw new Error(
            'MODIFIKASI DITOLAK: File sensitif [' + input.args.filePath + '] dilindungi!'
          );
        }
      }
    }
  };
};
