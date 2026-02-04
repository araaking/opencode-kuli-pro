# My OpenCode Configuration 🚀 (Kuli Pro Edition)

Koleksi konfigurasi [OpenCode](https://opencode.ai) yang dioptimalkan untuk produktivitas tinggi dengan berbagai MCP (Model Context Protocol) canggih dan plugin esensial. Konfigurasi ini menggabungkan infrastruktur **Oh My OpenCode** dan kecerdasan spesialis **OpenAgents**.

## ✨ Fitur Utama
- **Oh My OpenCode 3.0**: Plugin utama yang mengaktifkan semua fitur canggih (LSP, Background Tasks, Hooks). Stable & production-ready.
- **OpenAgentsControl**: Pattern-aware agent system dengan approval gates dan repeatable results.
- **VibeDevID**: Provider alternatif untuk model Claude 4.5 dan Gemini 3 via REST API proxy (mendukung *native thinking* & *variants*).
- **TokenScope**: Analisis penggunaan token dan estimasi biaya secara real-time.
- **Deep Research**: Integrasi penuh dengan Exa AI, Context7, dan Linear.
- **Advanced Thinking & Reasoning**: Dilengkapi dengan 6 mesin pemikiran (Thinking Engines) untuk akurasi maksimal.
- **Skillful Engine**: Manajemen skill berbasis on-demand (lazy-loading) untuk efisiensi context window via `@zenobius/opencode-skillful`.

---

### 🤖 Oh My OpenCode — The Core Plugin
[Oh My OpenCode](https://github.com/code-yeongyu/oh-my-opencode) adalah plugin yang mengubah OpenCode menjadi "coding on steroids". Versi **3.0 sekarang stable!**

**⚠️ Security Warning:**
`ohmyopencode.com` adalah BUKAN situs resmi. Jangan masukkan payment detail atau download installer dari situs tersebut.
✅ **Official downloads:** https://github.com/code-yeongyu/oh-my-opencode/releases

**Fitur Utama:**

**🪄 Magic Word: `ultrawork` (or `ulw`)**
Cukup ketik "ulw" di prompt - semua fitur aktif otomatis. Agent akan menjalankan parallel agents, background tasks, deep exploration, dan terus bekerja sampai tugas selesai 100%.

**Sisyphus Agent System (Main Orchestrator):**
- **Sisyphus** (Opus 4.5 High): CEO agent yang mengoordinasikan semua pekerjaan
- **Hephaestus** (GPT 5.2 Codex): Autonomous deep worker, goal-oriented execution
- **Oracle** (GPT 5.2 Medium): Design, debugging
- **Frontend UI/UX Engineer** (Gemini 3 Pro): Frontend development
- **Librarian** (Claude Sonnet 4.5): Official docs, codebase exploration
- **Explore** (Claude Haiku 4.5): Blazing fast codebase exploration

**Background Agents:**
- Jalankan multiple agents secara paralel seperti tim development
- Sisyphus tidak membuang waktu - memanggil agent murah untuk mapping territory
- Delegate ke specialist saat butuh (Gemini untuk UI, GPT untuk strategic)

**LSP & AST Tools:**
- Full LSP support: hover, goto definition, find references, rename, code actions
- AST-Grep: search/replace berbasis AST (25 bahasa)
- Refactor deterministik, lebih aman, lebih surgical

**Claude Code Compatibility:**
- Command, Agent, Skill, MCP support
- Hooks: PreToolUse, PostToolUse, UserPromptSubmit, Stop
- Full compatibility layer

**Built-in Features:**
- Todo Continuation Enforcer: Paksa agent lanjut jika stop di tengah jalan
- Comment Checker: Cegah AI tambah komentar berlebihan
- Ralph Loop: Auto-continuation untuk task selesai
- Think Mode: Extended thinking support

**Built-in MCPs:**
- Exa (Web Search)
- Context7 (Official Documentation)
- Grep.app (GitHub Code Search)
- Interactive Terminal dengan Tmux Integration

**⚠️ Note:**
Per Januari 2026, Anthropic membatasi akses OAuth pihak ketiga. Oh My OpenCode tetap bisa digunakan tapi gunakan dengan bijak sesuai ToS.

---

### 🧠 Advanced Thinking Engines
1. **Sequential Thinking (Anthropic)**: Versi standar untuk memecahkan masalah secara berurutan, langkah demi langkah, guna menghindari jawaban yang dangkal.
2. **Sequential Thinking Ultra (hyokunkwak)**: Versi "pro" dengan fitur canggih:
   - *Quality Metrics*: Penilaian real-time (consistency, completeness, objectivity, practicality).
   - *Bias Detection*: Deteksi 5 cognitive bias (confirmation, anchoring, availability, overconfidence, sunk cost).
   - *Budget Management*: Mode efisiensi (fast/balanced/thorough/exhaustive).
   - *Meta-Reasoning*: Checkpoint otomatis di 25%, 50%, 75% progress.
   - *Query Rewriting*: Otomatis memperbaiki kejelasan query sebelum diproses.
3. **MCP Reasoner (Jacck/frgmt0)**: Menggunakan algoritma *Beam Search* dan *Monte Carlo Tree Search (MCTS)* untuk mencoba berbagai jalur pemikiran di "belakang layar" sebelum memutuskan solusi paling logis. Sangat kuat untuk logika koding rumit.
4. **Clear Thought (Chirag Singhal)**: Framework komprehensif untuk problem-solving:
   - *Mental Models*: First Principles, Rubber Duck Debugging, Occam's Razor, Pareto Principle.
   - *Design Patterns*: Modular Architecture, API Integration, State Management, Agentic Design.
   - *Programming Paradigms*: OOP, Functional, Reactive, Concurrent, Event-Driven.
   - *Debugging*: Binary Search, Divide and Conquer, Cause Elimination, Program Slicing.
   - *Advanced*: Scientific Method, Structured Argumentation, Visual Reasoning, Metacognitive Monitoring.
5. **Atom of Thoughts**: Fokus pada dekomposisi masalah ke unit terkecil (atomik), memastikan tidak ada detail teknis krusial yang terlewatkan.
6. **Shannon Thinking**: Metodologi pemecahan masalah sistematis Claude Shannon (Problem Definition, Constraints, Model, Proof, Implementation).

---

### 🤖 Agent Ecosystem: The Hybrid Team

#### 1. Oh My OpenCode (Sisyphus) — Autonomous Orchestrator
Sisyphus adalah agent yang coding seperti tim Anda. Dia terus bekerja sampai tugas selesai 100%.

#### 2. OpenAgentsControl (OAC) — Pattern-Aware Specialists
[OpenAgentsControl](https://github.com/darrenhinde/OpenAgentsControl) memberikan agent yang belajar **coding patterns** Anda.

**Fitur Utama OAC:**
- 🎯 **Pattern Control**: Define patterns once, AI uses them forever
- ✋ **Approval Gates**: Review dan approve sebelum eksekusi
- 🔁 **Repeatable Results**: Same patterns = Same quality code
- 📝 **Editable Agents**: Full control over AI behavior (edit markdown langsung)
- 👥 **Team-Ready**: Everyone uses the same patterns
- ⚡ **Token Efficient**: MVI Principle - 80% token reduction

**Agent System:**
- **OpenAgent**: General tasks, learning system (start here)
- **OpenCoder**: Production development, complex features
- **SystemBuilder**: Generate custom AI systems
- **Specialized Subagents**: ContextScout, TaskManager, CoderAgent, TestEngineer, CodeReviewer, ExternalScout

**Quick Start:**
```bash
curl -fsSL https://raw.githubusercontent.com/darrenhinde/OpenAgentsControl/main/install.sh | bash -s developer
```

Gunakan OAC saat:
- ✅ Ada coding patterns yang established
- ✅ Ingin code yang ship tanpa refactoring
- ✅ Butuh approval gates untuk quality control
- ✅ Peduli token efficiency dan cost

Gunakan Oh My OpenCode saat:
- ✅ Butuh eksekusi autonomous dengan parallel agents
- ✅ Priority adalah speed over control

---

## 📋 Prasyarat
- [OpenCode](https://opencode.ai) terinstal.
- Node.js (v18+) & npm.
- API Keys untuk layanan remote (Exa, Context7, VibeDevID, dll).

---

## 📁 Struktur Konfigurasi

OpenCode mendukung dua lokasi konfigurasi:

| Lokasi | Path | Scope |
|--------|------|-------|
| **Global** | `~/.config/opencode/` | Berlaku untuk semua project |
| **Lokal** | `[project]/.opencode/` | Berlaku hanya untuk project tertentu |

**Cara pakai repo ini:**
1. **Global Setup**: Clone/copy isi repo ini ke `~/.config/opencode/`
2. **Lokal Setup**: Clone/copy isi repo ini ke folder `.opencode/` di dalam project kamu

---

## 🚀 Panduan Instalasi

### 1. Setup Dasar & Plugin
Salin `opencode.example.json` menjadi `opencode.json` di folder konfigurasi:
```bash
mkdir -p ~/.config/opencode
cp opencode.example.json ~/.config/opencode/opencode.json
```

### 2. Instalasi Oh My OpenCode
```bash
# Let agent handle installation - recommend approach
# Atau ikuti panduan di: https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/refs/heads/master/docs/guide/installation.md
```

### 3. Instalasi OpenAgentsControl
```bash
curl -fsSL https://raw.githubusercontent.com/darrenhinde/OpenAgentsControl/main/install.sh | bash -s developer
```

### 4. Instalasi TokenScope
**Option 1: npm (Recommended)**
```bash
npm install -g @ramtinj95/opencode-tokenscope
```

Tambahkan ke `opencode.json`:
```json
{
  "$schema": "https://opencode.ai/config.json",
  "plugin": ["@ramtinj95/opencode-tokenscope@latest"]
}
```

Buat command `/tokenscope`:
```bash
mkdir -p ~/.config/opencode/command
cat > ~/.config/opencode/command/tokenscope.md << 'EOF'
---
description: Analyze token usage across the current session with detailed breakdowns by category
---

Call the tokenscope tool directly without delegating to other agents.
Then cat the token-usage-output.txt. DONT DO ANYTHING ELSE WITH THE OUTPUT.
EOF
```

**Option 2: Install Script**
```bash
curl -sSL https://raw.githubusercontent.com/ramtinJ95/opencode-tokenscope/main/plugin/install.sh | bash
```

### 5. Instalasi MCP Lokal
Jalankan perintah berikut di direktori `~/.opencode/mcp`:
```bash
# Thinking MCPs
git clone https://github.com/frgmt0/mcp-reasoner.git && cd mcp-reasoner && npm install && npm run build
git clone https://github.com/hyokunkwak/Sequential-thinking-ultra-mcp.git && cd Sequential-thinking-ultra-mcp && npm install && npm run build
git clone https://github.com/chirag127/clear-thought-mcp-server.git && cd clear-thought-mcp-server && npm install && npm run build
git clone git@github.com:kbsooo/MCP_Atom_of_Thoughts.git && cd MCP_Atom_of_Thoughts && npm install && npm run build
```

### 6. MCP via npx (Auto-install)
Tambahkan langsung ke `opencode.json`:
- `sequential-thinking`: `@modelcontextprotocol/server-sequential-thinking`
- `shannon-thinking`: `server-shannon-thinking@latest`
- `playwright`: `@playwright/mcp@latest`
- `prisma-local`: `prisma mcp`
- `next-devtools`: `next-devtools-mcp@latest`

### 7. MCP Remote
- `context7`: `https://mcp.context7.com/mcp`
- `exa`: `https://mcp.exa.ai/mcp`
- `linear`: `https://mcp.linear.app/mcp`
- `prisma-remote`: `https://mcp.prisma.io/mcp`

---

## 🧠 Arsitektur & Cara Kerja (Kuli Pro Ecosystem)

### 1. Hubungan Antar Komponen (The Core 5)

| Komponen | Peran / Analogi | Deskripsi |
| :--- | :--- | :--- |
| **Oh My OpenCode (OMO)** | **Sistem Operasi / Infrastruktur** | Memberikan "pondasi" seperti background tasks, LSP canggih, manajemen token, dan agen utama **Sisyphus**. |
| **OpenAgents** | **Pasukan Staf Ahli (Specialists)** | Kumpulan 100+ agen dengan kepribadian spesifik (misal: Expert Next.js, Python Pro, Security Auditor). |
| **Superpowers** | **Polisi SOP (Enforcer)** | Plugin yang memastikan agen wajib mengecek Skill/SOP terlebih dahulu. |
| **Skills** | **Manual Book (SOP)** | Instruksi langkah-demi-langkah untuk tugas tertentu (misal: cara TDD yang benar). |
| **MCP** | **Peralatan Kerja (Tools)** | Ekstensi luar yang memberi agen "tangan" untuk melakukan hal nyata (baca DB, browsing web). |

### 2. Workflow "Kuli Pro" (End-to-End)

1.  **Entry Point**: Prompt diterima oleh **Oh My OpenCode**. Sisyphus (CEO) menganalisis tugas.
2.  **Specialist Call**: Sisyphus memanggil **OpenAgents** spesialis sesuai domain tugas.
3.  **Superpowers Enforcer**: Plugin **Superpowers** memaksa agen mengecek daftar **Skills**.
4.  **Skill Activation**: Agen mengikuti SOP dari skill (misal: TDD workflow).
5.  **Tooling via MCP**: Agen menggunakan **MCP** (playwright, exa, dll) untuk eksekusi nyata.
6.  **Infrastructure Support**: OMO menyediakan LSP dan Background Task.
7.  **Final Quality Check**: Sisyphus memanggil agen `@code-reviewer` sebelum laporan selesai.

---

## 🛠️ Daftar Lengkap Plugin & MCP

### Providers
| Nama | Fungsi |
|------|--------|
| `vibedev` | Provider OpenAI/Anthropic compatible dengan fitur *thinking* & *variants*. |
| `google` (Antigravity) | Provider model tier-1 via Google OAuth (opsional). |

### Plugins
| Nama | Fungsi |
|------|--------|
| `oh-my-opencode` | Core: Sisyphus agents, background tasks, LSP, hooks, parallel agents. |
| `./plugin/superpowers.js` | **Enforcer**: Memaksa agent cek Skill/SOP sebelum bekerja. |
| `./plugin/ghost-pair-programmer.js` | **Git Awareness**: Auto-inject git context (branch, commits, changes) ke setiap sesi. |
| `@ramtinj95/opencode-tokenscope` | **Analytic**: Tracking token dan biaya real-time dengan detailed breakdowns. |
| `@zenobius/opencode-skillful` | **Skill Engine**: Lazy-loaded skill discovery & injection (Anthropic Spec). |

### Thinking MCPs (6)
| MCP | Deskripsi | Type |
|-----|----------|------|
| **Sequential Thinking** | Berpikir urut (Anthropic) | npx |
| **Sequential Thinking Ultra** | Quality metrics, bias detection, meta-reasoning | local |
| **MCP Reasoner** | MCTS algorithm untuk logika berat | local |
| **Clear Thought** | Mental models & architecture patterns | local |
| **Atom of Thoughts** | Dekomposisi masalah atomik | local |
| **Shannon Thinking** | Metodologi sistematis Claude Shannon | npx |

### Development MCPs (6)
| MCP | Deskripsi | Type |
|-----|----------|------|
| **Playwright** | Browser automation & testing | npx |
| **Prisma-Local** | Database management via Prisma | npx |
| **Prisma-Remote** | Prisma Postgres cloud databases | remote |
| **Next-Devtools** | Debugging Next.js App Router | npx |
| **Linear** | Manajemen issue, project, workflow | npx |
| **Exa** | Deep web search & code context | remote |

### Additional MCPs
| MCP | Deskripsi | Type |
|-----|----------|------|
| **Context7** | Official documentation lookup | remote |

## ⚠️ Keamanan
Jangan pernah melakukan *commit* pada file `opencode.json` asli. Selalu gunakan `opencode.example.json` sebagai template.

## 📄 Lisensi
MIT - [Alfian](https://github.com/alfian) & Open Source Community.
