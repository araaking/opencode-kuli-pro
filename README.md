# My OpenCode Configuration 🚀

Koleksi konfigurasi [OpenCode](https://opencode.ai) yang dioptimalkan untuk produktivitas tinggi dengan berbagai MCP (Model Context Protocol) canggih dan plugin esensial.

## ✨ Fitur Utama
- **Oh My OpenCode**: Plugin utama yang mengaktifkan semua fitur canggih (lihat bagian di bawah).
- **Antigravity Auth**: Akses model Gemini 3 Pro High dan Claude 4.5 dengan rate limit tinggi via Google OAuth.
- **TokenScope**: Analisis penggunaan token dan estimasi biaya secara real-time.
- **Deep Research**: Integrasi penuh dengan Exa AI dan Websets.
- **Advanced Thinking & Reasoning**: Dilengkapi dengan 5 mesin pemikiran (Thinking Engines) untuk akurasi maksimal.

### 🤖 Oh My OpenCode — The Core Plugin
[Oh My OpenCode](https://github.com/code-yeongyu/oh-my-opencode) adalah plugin yang mengubah OpenCode menjadi "coding on steroids". Plugin ini menyediakan:

**Superpowers Mode:**
- **Superpowers Activation**: Aktifkan mode koding tingkat tinggi dengan akses ke kumpulan skill dan agent terspesialisasi.
- **`superpowers.js` (Local Plugin)**: Plugin khusus yang memberikan kemampuan "superpowers" pada agent. Plugin ini bekerja secara otomatis menyuntikkan instruksi ke setiap session baru.
- **Workflow-driven AI**: Agent tidak hanya koding asal-asalan, tapi mengikuti metodologi engineer senior (TDD, Architecture Review, dll).

**Sisyphus Agent System:**
- **Sisyphus** (Claude Opus 4.5): Main orchestrator agent dengan extended thinking
- **Oracle** (GPT 5.2): Architecture, code review, strategy
- **Librarian** (Claude Sonnet 4.5): Multi-repo analysis, doc lookup, implementation examples
- **Explore** (Grok Code): Blazing fast codebase exploration
- **Frontend UI/UX Engineer** (Gemini 3 Pro): UI/UX development
- **Document Writer** (Gemini 3 Pro): Technical writing
- **Multimodal Looker** (Gemini Flash): Visual content analysis

**Background Agents:**
- Jalankan multiple agents secara paralel (misal: Gemini menulis frontend, Claude handle backend)
- Massive parallel search sementara melanjutkan implementasi

**Enhanced Tools:**
- Full LSP support (hover, goto definition, find references, rename, code actions)
- AST-Grep untuk search/replace berbasis AST (25 bahasa)
- Directory AGENTS.md/README.md injector
- Conditional rules injector
- Claude Code compatibility layer

**Smart Hooks:**
- Todo Continuation Enforcer: Memaksa agent menyelesaikan semua TODO
- Comment Checker: Mencegah komentar berlebihan
- Context Window Monitor: Manajemen context window
- Think Mode: Auto-detect extended thinking
- Session Recovery: Auto-recover dari error

### 🧠 Advanced Thinking Engines
1. **Sequential Thinking (Anthropic)**: Versi standar untuk memecahkan masalah secara berurutan, langkah demi langkah, guna menghindari jawaban yang dangkal.
2. **Sequential Thinking Ultra (hyokunkwak)**: Versi "pro" dari Sequential Thinking dengan fitur-fitur canggih:
   - *Quality Metrics*: Penilaian real-time (consistency, completeness, objectivity, practicality)
   - *Bias Detection*: Deteksi 5 cognitive bias (confirmation, anchoring, availability, overconfidence, sunk cost)
   - *Budget Management*: Mode efisiensi (fast/balanced/thorough/exhaustive)
   - *Meta-Reasoning*: Checkpoint otomatis di 25%, 50%, 75% progress
   - *Query Rewriting*: Otomatis memperbaiki kejelasan query sebelum diproses
3. **MCP Reasoner (Jacck/frgmt0)**: Menggunakan algoritma *Beam Search* dan *Monte Carlo Tree Search (MCTS)* untuk mencoba berbagai jalur pemikiran di "belakang layar" sebelum memutuskan solusi paling logis. Mendukung integrasi dengan DeepSeek R1 via OpenRouter. Sangat kuat untuk logika koding rumit.
4. **Clear Thought (Chirag Singhal)**: Framework komprehensif untuk problem-solving dengan berbagai pendekatan:
   - *Mental Models*: First Principles, Rubber Duck Debugging, Occam's Razor, Pareto Principle
   - *Design Patterns*: Modular Architecture, API Integration, State Management, Agentic Design
   - *Programming Paradigms*: OOP, Functional, Reactive, Concurrent, Event-Driven
   - *Debugging*: Binary Search, Divide and Conquer, Cause Elimination, Program Slicing
   - *Advanced*: Scientific Method, Structured Argumentation, Visual Reasoning, Metacognitive Monitoring
5. **Atom of Thoughts**: Fokus pada dekomposisi masalah ke unit terkecil (atomik), memastikan tidak ada detail teknis krusial yang terlewatkan.
6. **Shannon Thinking**: Metodologi pemecahan masalah sistematis Claude Shannon (Problem Definition, Mathematical Modeling, Practical Implementation).

## 📋 Prasyarat
- [OpenCode](https://opencode.ai) terinstal.
- Node.js (v18+) & npm.
- Akun Google (untuk Antigravity).
- API Keys untuk layanan remote (Exa, Context7, dll).

## 📁 Struktur Konfigurasi

OpenCode mendukung dua lokasi konfigurasi:

| Lokasi | Path | Scope |
|--------|------|-------|
| **Global** | `~/.config/opencode/` | Berlaku untuk semua project |
| **Lokal** | `[project]/.opencode/` | Berlaku hanya untuk project tertentu |

**Cara pakai repo ini:**
1. **Global Setup**: Clone/copy isi repo ini ke `~/.config/opencode/`
2. **Lokal Setup**: Clone/copy isi repo ini ke folder `.opencode/` di dalam project kamu

```
# Contoh struktur Global
~/.config/opencode/
├── opencode.json              # Config utama (dari opencode.example.json)
├── oh-my-opencode.json        # Config Oh My OpenCode
├── agent/                     # Custom agents
├── skills/                    # Custom skills
├── command/                   # Custom commands (slash commands)
├── plugin/                    # Custom plugins
├── lib/                       # Library files untuk skills
└── mcp/                       # MCP servers (clone manual)

# Contoh struktur Lokal (per-project)
my-project/
├── .opencode/
│   ├── opencode.json
│   ├── oh-my-opencode.json
│   ├── agent/
│   ├── skills/
│   ├── command/
│   └── ...
└── src/
```

> 💡 **Tips**: Tinggal copy-paste file-file dari repo ini, ikuti arahan di bawah, dan sesuaikan path. **Masih bingung? Tanya AI aja!** Paste link repo ini ke Claude/ChatGPT/Gemini dan minta bantuan setup.

## 🚀 Panduan Instalasi

### 1. Setup Dasar & Plugin
Salin `opencode.example.json` menjadi `opencode.json` di folder konfigurasi OpenCode Anda:
```bash
mkdir -p ~/.config/opencode
cp opencode.example.json ~/.config/opencode/opencode.json
```

Instal plugin yang diperlukan:
```bash
# Plugin akan otomatis terinstal saat OpenCode dijalankan jika sudah ada di opencode.json
# Namun Anda bisa memastikannya dengan:
npm install -g @ramtinj95/opencode-tokenscope
```

### 2. Autentikasi Antigravity
Untuk menggunakan model-model Google/Claude High-End:
1. Jalankan perintah login:
   ```bash
   opencode auth login
   ```
2. Pilih **Google** -> **OAuth with Google (Antigravity)**.
3. Tekan **Enter** saat diminta Project ID (opsional).
4. Selesaikan proses login di browser.

### 3. Setup Command `/tokenscope`
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

### 4. Instalasi MCP Lokal
Jalankan perintah berikut di direktori `~/.config/opencode/mcp` untuk menyiapkan server MCP lokal:

```bash
mkdir -p ~/.config/opencode/mcp
cd ~/.config/opencode/mcp

# 1. MCP Reasoner (Beam Search + MCTS + R1-Sonnet)
git clone https://github.com/frgmt0/mcp-reasoner.git
cd mcp-reasoner && npm install && npm run build && cd ..

# 2. Sequential Thinking Ultra (Quality Metrics + Bias Detection + Budget Management)
git clone https://github.com/hyokunkwak/Sequential-thinking-ultra-mcp.git sequential-thinking-ultra
cd sequential-thinking-ultra && npm install && npm run build && cd ..

# 3. Clear Thought (Mental Models + Design Patterns + Debugging)
git clone https://github.com/chirag127/clear-thought-mcp-server.git clear-thought-mcp-server
cd clear-thought-mcp-server && npm install && npm run build && cd ..

# 4. Atom of Thoughts (AoT)
git clone https://github.com/kbsooo/mcp-atom-of-thoughts.git atom-of-thoughts
cd atom-of-thoughts && npm install && npm run build && cd ..
```

## ⚙️ Konfigurasi Akhir
Buka `~/.config/opencode/opencode.json` dan pastikan:
1. **Path**: Sesuaikan `/YOUR_PATH_TO/` dengan path absolut ke folder `.config/opencode/mcp` Anda.
2. **Env**: Set API Key di terminal Anda (atau tambahkan ke `~/.bashrc` / `~/.zshrc`):
   ```bash
   # Required
   export EXA_API_KEY='your_key_here'
   export CONTEXT7_API_KEY='your_key_here'
   
   # Opsional
   export OPENROUTER_API_KEY='your_key_here'  # Untuk R1-Sonnet di MCP Reasoner
   export REF_API_KEY='your_key_here'          # Untuk Ref MCP documentation search
   ```

### Konfigurasi Oh My OpenCode (`oh-my-opencode.json`)
File `oh-my-opencode.json` mengatur perilaku plugin Oh My OpenCode. Letakkan di `~/.config/opencode/oh-my-opencode.json`:

```json
{
  "$schema": "https://raw.githubusercontent.com/code-yeongyu/oh-my-opencode/master/assets/oh-my-opencode.schema.json",
  "google_auth": false,
  "agents": {
    "Sisyphus": { "model": "google/claude-opus-4-5-thinking" },
    "librarian": { "model": "google/claude-sonnet-4-5" },
    "oracle": { "model": "google/claude-opus-4-5-thinking" },
    "frontend-ui-ux-engineer": { "model": "google/gemini-3-pro-high" },
    "document-writer": { "model": "google/gemini-3-flash" },
    "multimodal-looker": { "model": "google/gemini-3-flash" }
  }
}
```

**Penjelasan:**
- `google_auth: false`: Gunakan `opencode-antigravity-auth` plugin (direkomendasikan) untuk auth
- `agents`: Override model untuk setiap agent sesuai kebutuhan

**Kustomisasi Agents (Opsional):**
```json
{
  "agents": {
    "explore": {
      "model": "anthropic/claude-haiku-4-5",
      "temperature": 0.5
    },
    "frontend-ui-ux-engineer": {
      "disable": true
    }
  },
  "disabled_hooks": ["comment-checker"],
  "disabled_mcps": ["grep_app"]
}
```

## 🛠️ Daftar MCP & Plugin

### Plugins
| Nama | Fungsi |
|------|--------|
| `oh-my-opencode` | Core plugin: Sisyphus agents, background agents, LSP tools, hooks |
| `./plugin/superpowers.js` | **Local Plugin**: Memberikan kemampuan "superpowers" & skill system pada agent |
| `./plugin/kuli-pro-safety.js` | **Local Plugin**: Proteksi file sensitif & welcome greeting |
| `opencode-antigravity-auth` | OAuth & Model High-End (Gemini 3, Claude 4.5, GPT-OSS) |
| `@ramtinj95/opencode-tokenscope` | Analisis penggunaan token & estimasi biaya |
| `opencode-skills` | Skill system untuk workflow automation |

> ℹ️ **Catatan Plugin Lokal**: Plugin seperti `superpowers.js` dimuat menggunakan path relatif (`./plugin/superpowers.js`) di dalam `opencode.json`. Pastikan file tersebut ada di folder `plugin/` agar fitur `use_skill` dan `find_skills` aktif.

### MCP Lokal (Thinking Engines)
| Nama | Fungsi |
|------|--------|
| `sequential-thinking` | Berpikir sekuensial standar (Anthropic) |
| `sequential-thinking-ultra` | Quality metrics, bias detection, budget management, meta-reasoning |
| `mcp-reasoner` | Advanced reasoning (Beam Search, MCTS, R1-Sonnet) |
| `clear-thought` | Mental models, design patterns, debugging frameworks |
| `atom-of-thoughts` | Decomposition-based reasoning, atomic thought units |
| `shannon-thinking` | Claude Shannon's systematic problem-solving methodology |

### MCP Lokal (Development Tools)
| Nama | Fungsi |
|------|--------|
| `Prisma-Local` | Prisma ORM integration untuk database management |
| `next-devtools` | Next.js development tools & debugging |
| `playwright` | Browser automation & testing |

### MCP Remote
| Nama | Fungsi | API Key Required |
|------|--------|------------------|
| `context7` | Official documentation lookup | `CONTEXT7_API_KEY` |
| `exa` | Web search, deep research, code context | `EXA_API_KEY` |
| `websets` | Web entity collections & enrichment | `EXA_API_KEY` |
| `ref-mcp` | Documentation search across web & GitHub | `REF_API_KEY` (opsional) |

### Model yang Tersedia (via Antigravity)
| Model | Deskripsi |
|-------|-----------|
| `gemini-3-pro-high` | Gemini 3 Pro (Antigravity) - Rate Limit Tinggi |
| `gemini-3-pro-low` | Gemini 3 Pro (Antigravity) - Rate Limit Standar |
| `gemini-3-flash` | Gemini 3 Flash (Antigravity) |
| `claude-sonnet-4-5` | Claude Sonnet 4.5 (Antigravity) |
| `claude-sonnet-4-5-thinking` | Claude Sonnet 4.5 (Antigravity) dengan Extended Thinking |
| `claude-opus-4-5-thinking` | Claude Opus 4.5 (Antigravity) dengan Extended Thinking |
| `gpt-oss-120b-medium` | GPT-OSS 120B (Antigravity) |

## 🎮 Cara Menggunakan

### Pilih Model
Gunakan command berikut di terminal OpenCode untuk melihat daftar model yang tersedia:
```bash
/models
```



## ⚠️ Keamanan
Jangan pernah melakukan *commit* pada file `opencode.json` yang berisi API Key. Gunakan variabel lingkungan `{env:VARIABLE_NAME}`.

## 📄 Lisensi
MIT
