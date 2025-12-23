# My OpenCode Configuration 🚀 (Kuli Pro Edition)

Koleksi konfigurasi [OpenCode](https://opencode.ai) yang dioptimalkan untuk produktivitas tinggi dengan berbagai MCP (Model Context Protocol) canggih dan plugin esensial. Konfigurasi ini menggabungkan infrastruktur **Oh My OpenCode** dan kecerdasan spesialis **OpenAgents**.

## ✨ Fitur Utama
- **Oh My OpenCode**: Plugin utama yang mengaktifkan semua fitur canggih (LSP, Background Tasks, Hooks).
- **Antigravity Auth**: Akses model tier-1 (Gemini 3 Pro High, Claude 4.5) dengan rate limit tinggi via Google OAuth.
- **TokenScope**: Analisis penggunaan token dan estimasi biaya secara real-time.
- **Deep Research**: Integrasi penuh dengan Exa AI dan Websets.
- **Advanced Thinking & Reasoning**: Dilengkapi dengan 6 mesin pemikiran (Thinking Engines) untuk akurasi maksimal.

---

### 🤖 Oh My OpenCode — The Core Plugin
[Oh My OpenCode](https://github.com/code-yeongyu/oh-my-opencode) adalah plugin yang mengubah OpenCode menjadi "coding on steroids". Plugin ini menyediakan:

**Superpowers Mode:**
- **Superpowers Activation**: Aktifkan mode koding tingkat tinggi dengan akses ke kumpulan skill dan agent terspesialisasi.
- **`superpowers.js` (Local Plugin)**: Plugin khusus yang memberikan kemampuan "superpowers" pada agent. Plugin ini bekerja secara otomatis menyuntikkan instruksi ke setiap session baru.
- **Workflow-driven AI**: Agent tidak hanya koding asal-asalan, tapi mengikuti metodologi engineer senior (TDD, Architecture Review, dll).

**Sisyphus Agent System:**
- **Sisyphus** (Claude Opus 4.5): Main orchestrator agent dengan extended thinking.
- **Oracle** (GPT 5.2): Architecture, code review, strategy.
- **Librarian** (Claude Sonnet 4.5): Multi-repo analysis, doc lookup, implementation examples.
- **Explore** (Grok Code): Blazing fast codebase exploration.
- **Frontend UI/UX Engineer** (Gemini 3 Pro): UI/UX development.
- **Document Writer** (Gemini 3 Pro): Technical writing.
- **Multimodal Looker** (Gemini Flash): Visual content analysis.

**Background Agents:**
- Jalankan multiple agents secara paralel (misal: Gemini menulis frontend, Claude handle backend).
- Massive parallel search sementara melanjutkan implementasi.

**Enhanced Tools:**
- Full LSP support (hover, goto definition, find references, rename, code actions).
- AST-Grep untuk search/replace berbasis AST (25 bahasa).
- Directory AGENTS.md/README.md injector.
- Conditional rules injector.
- Claude Code compatibility layer.

**Smart Hooks:**
- Todo Continuation Enforcer: Memaksa agent menyelesaikan semua TODO.
- Comment Checker: Mencegah komentar berlebihan.
- Context Window Monitor: Manajemen context window.
- Think Mode: Auto-detect extended thinking.
- Session Recovery: Auto-recover dari error.

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
Konfigurasi ini menggabungkan dua framework agent terbaik untuk menciptakan ekosistem "Hybrid" di mana infrastruktur OMO mengelola pasukan spesialis dari OpenAgents.

#### 1. Oh My OpenCode (Sisyphus) — The Orchestrator
OMO bertindak sebagai **CEO/Manager** yang mengelola infrastruktur dan orkestrasi agen.

#### 2. OpenAgents (Darren Hinde) — The Specialists
[OpenAgents](https://github.com/darrenhinde/OpenAgents) menyediakan **100+ Agent Spesialis** yang dipanggil oleh Sisyphus sesuai kebutuhan (Next.js expert, Python Pro, Security Auditor, dll).

---

## 📋 Prasyarat
- [OpenCode](https://opencode.ai) terinstal.
- Node.js (v18+) & npm.
- Akun Google (untuk Antigravity).
- API Keys untuk layanan remote (Exa, Context7, dll).

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

### 2. Instalasi OpenAgents (Spesialis)
Dapatkan 100+ agent spesialis:
```bash
curl -fsSL https://raw.githubusercontent.com/darrenhinde/OpenAgents/main/install.sh | bash -s full
```

### 3. Autentikasi Antigravity
1. Jalankan `opencode auth login`.
2. Pilih **Google** -> **OAuth with Google (Antigravity)**.
3. Tekan **Enter** saat diminta Project ID (opsional).
4. Selesaikan proses login di browser.

### 4. Setup Command `/tokenscope`
Agar perintah `/tokenscope` berfungsi, buat file command:
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

### 5. Instalasi Shannon Thinking
Tambahkan konfigurasi Shannon Thinking ke `opencode.json`:
```json
"shannon-thinking": {
  "type": "local",
  "command": ["npx", "-y", "server-shannon-thinking@latest"],
  "enabled": true
}
```

### 6. Instalasi MCP Lokal Lainnya
Jalankan perintah berikut di direktori `~/.config/opencode/mcp`:
- `mcp-reasoner`: `git clone https://github.com/frgmt0/mcp-reasoner.git`
- `sequential-thinking-ultra`: `git clone https://github.com/hyokunkwak/Sequential-thinking-ultra-mcp.git`
- `clear-thought`: `git clone https://github.com/chirag127/clear-thought-mcp-server.git`

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

### Plugins
| Nama | Fungsi |
|------|--------|
| `oh-my-opencode` | Core: Sisyphus agents, background tasks, LSP, hooks. |
| `./plugin/superpowers.js` | **Enforcer**: Memaksa agent cek Skill/SOP sebelum bekerja. |
| `./plugin/kuli-pro-safety.js` | **Protector**: Memblokir akses AI ke file sensitif (.env, config). |
| `opencode-antigravity-auth` | **Gateway**: Provider model Claude 4.5 & Gemini 3 Pro. |
| `@ramtinj95/opencode-tokenscope` | **Analytic**: Tracking token dan biaya real-time. |

### Thinking MCPs
- **Sequential Thinking**: Berpikir urut (Anthropic).
- **Sequential Thinking Ultra**: Berpikir urut dengan metrik kualitas (hyokunkwak).
- **MCP Reasoner**: Algoritma MCTS untuk logika berat (frgmt0).
- **Clear Thought**: Mental models & architecture patterns (Chirag Singhal).
- **Shannon Thinking**: Metodologi sistematis Claude Shannon.

### Development MCPs
- **Prisma-Local**: Database management via Prisma.
- **Next-Devtools**: Debugging Next.js App Router.
- **Playwright**: Browser automation & testing.
- **Exa**: Deep web search & code context.

## ⚠️ Keamanan
Jangan pernah melakukan *commit* pada file `opencode.json` asli. Selalu gunakan `opencode.example.json` sebagai template.

## 📄 Lisensi
MIT - [Alfian](https://github.com/alfian) & Open Source Community.
