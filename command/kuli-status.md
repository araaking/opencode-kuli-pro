---
description: Show Kuli Pro system status and active plugins
---

# Kuli Pro Status

Show the current status of the OpenCode Kuli Pro environment.

## Instructions

Run these commands and report the results in a formatted table:

1. **Check Git Status:**
```bash
cd ~/.config/opencode && git status --short
```

2. **List Active Plugins:**
```bash
ls -la ~/.config/opencode/plugin/
```

3. **Count Available Agents:**
```bash
ls ~/.config/opencode/agent/*.md 2>/dev/null | wc -l
```

4. **Show Model Configuration:**
```bash
cat ~/.config/opencode/oh-my-opencode.json 2>/dev/null | head -30
```

5. **Check Available Skills:**
```bash
ls ~/.config/opencode/skills/ 2>/dev/null
```

## Output Format

Present results as:

```
## Kuli Pro Status Report

| Component | Status |
|-----------|--------|
| Git | [clean/dirty] |
| Plugins | [count] active |
| Agents | [count] available |
| Skills | [count] loaded |
| Model | [current model] |

### Active Plugins:
- [list plugins]

### Recent Git Changes:
[git status output]
```

Provide actionable recommendations if any issues are detected.
