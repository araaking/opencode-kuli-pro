export const KuliProSafetyPlugin = async ({ client, $ }) => {
  const state = (globalThis.__kuliProSafetyState ||= {
    startedSessions: new Set(),
    idleNotifiedSessions: new Set()
  });

  const getSessionID = (event) => {
    return (
      event?.properties?.info?.id ||
      event?.properties?.sessionID ||
      event?.session?.id
    );
  };

  return {
    event: async ({ event }) => {
      if (event.type === "session.created") {
        const sessionID = getSessionID(event);
        if (sessionID && state.startedSessions.has(sessionID)) return;
        if (sessionID) state.startedSessions.add(sessionID);

        // Show welcome message in the TUI safely (avoid console.log which can corrupt UI)
        try {
          if (sessionID) {
            await client.session.prompt({
              path: { id: sessionID },
              body: {
                noReply: true,
                parts: [
                  {
                    type: "text",
                    text: "[Kuli Pro] Mode Sakti Diaktifkan! Selamat bekerja.",
                    synthetic: true
                  }
                ]
              }
            });
          }
        } catch (e) {}

        try {
          if (process.platform === 'darwin') {
            await $`osascript -e 'display notification "Mode Sakti Diaktifkan!" with title "OpenCode Kuli Pro"'`;
          }
        } catch (e) {}
      }
      
      if (event.type === "session.idle") {
        const sessionID = getSessionID(event);
        if (sessionID && state.idleNotifiedSessions.has(sessionID)) return;
        if (sessionID) state.idleNotifiedSessions.add(sessionID);

        try {
          if (process.platform === 'darwin') {
            await $`osascript -e 'display notification "Tugas selesai, Bos!" with title "OpenCode Kuli Pro"'`;
          }
        } catch (e) {}
      }
    },

    "tool.execute.before": async (input) => {
      if (input.tool === "read") {
        const path = input.args.filePath.toLowerCase();
        const sensitiveFiles = ["antigravity-accounts.json", ".env", "opencode.json"];
        
        if (sensitiveFiles.some(file => path.includes(file))) {
          throw new Error(`⚠️ AKSES DITOLAK: Agent dilarang membaca file sensitif [${path}] demi keamanan!`);
        }
      }
    }
  };
};
