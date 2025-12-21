export const KuliProSafetyPlugin = async ({ client, $ }) => {
  return {
    event: async ({ event }) => {
      if (event.type === "session.created") {
        console.log("\n[Kuli Pro] Mode Sakti Diaktifkan! Selamat Bekerja... 🚀\n");
      }
      
      if (event.type === "session.idle") {
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
