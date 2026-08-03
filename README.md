<div align="center">

  <img src="./assets/banner.jpg" alt="AI Skills Banner" width="100%" style="border-radius: 10px; max-height: 400px; object-fit: cover;" />

  <br /><br />

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,50:161b22,100:1f242c&height=180&section=header&text=AI%20Skills&fontSize=52&fontAlignY=32&desc=Local,%20Agent-Owned%20Skill%20Stacks%20for%20Coding%20Agents&descAlignY=58&descAlign=50" alt="AI Skills Title Header" width="100%" />

  <h1>⚡ AI Skills</h1>
  <p><strong>The premier local catalog of 2,001+ agentic coding skills, reproducible plans, and local MCP discovery.</strong></p>

  <p>
    <a href="https://github.com/yugsuthar208/ai-skills/releases"><img src="https://img.shields.io/badge/Release-v1.0.0-emerald?style=for-the-badge&logo=github" alt="Release" /></a>
    <a href="https://github.com/yugsuthar208/ai-skills/blob/main/LICENSE"><img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="License" /></a>
    <img src="https://img.shields.io/badge/Maintained%20By-yug-8A2BE2?style=for-the-badge&logo=powershell" alt="Maintained By yug" />
    <img src="https://img.shields.io/badge/Catalog-2%2C001%2B%20Skills-ff69b4?style=for-the-badge&logo=lightning" alt="Skills Count" />
  </p>

</div>

---

## 📌 Table of Contents
- [🌟 Overview](#-overview)
- [📐 Visual System Architecture](#-visual-system-architecture)
- [🔄 Skill Resolution Lifecycle](#-skill-resolution-lifecycle)
- [✨ Key Features](#-key-features)
- [📦 Skill Categories & Bundles](#-skill-categories--bundles)
- [💻 CLI & Command Reference](#-cli--command-reference)
- [🔌 Agent Integration Guides](#-agent-integration-guides)
  - [Claude Code](#claude-code)
  - [Cursor](#cursor)
  - [Gemini CLI & Antigravity](#gemini-cli--antigravity)
- [📂 Project Directory Structure](#-project-directory-structure)
- [🤝 Contributing & License](#-contributing--license)

---

## 🌟 Overview

**AI Skills** is a high-performance, local-first skill discovery engine and execution stack tailored for autonomous coding agents (Codex, Claude Code, Cursor, Gemini CLI, Antigravity, and custom LLM agents).

Unlike cloud-dependent skill registries, **AI Skills** provides **2,001+ pre-packaged, validated agentic skills** directly on your file system. Coding agents can inspect project contexts, query local skill catalogs via MCP (Model Context Protocol), validate stack boundaries, and generate reproducible `aas-stack.json` plans prior to taking action.

> **Maintained & Created by**: **yug**  
> **Repository**: [github.com/yugsuthar208/ai-skills](https://github.com/yugsuthar208/ai-skills)

---

## 📐 Visual System Architecture

The following diagram illustrates how AI Skills coordinates local skill selection and validation between coding agents and your workspace:

```mermaid
graph TD
    subgraph Client Environment
        User[👨‍💻 Developer / User]
        Agent[🤖 Coding Agent\nCodex / Claude / Cursor / Antigravity]
        Workspace[📁 Local Workspace]
    end

    subgraph AI Skills System
        MCP[🔌 AAS Local MCP Server\nstdio / read-only]
        Catalog[(📚 Local Catalog\n2,001+ SKILL.md Files)]
        Composer[🛠️ Stack Composer\ncompose_stack]
        Validator[⚙️ Schema Validator\nAjv + AAS-v1 Schemas]
    end

    subgraph Artifact Outputs
        StackFile[📄 aas-stack.json]
        PlanFile[📋 Execution Plan]
    end

    User -->|Prompts Task| Agent
    Agent -->|Inspects| Workspace
    Agent -->|Query Skills| MCP
    MCP -->|Read Catalog| Catalog
    Agent -->|Select Skill IDs| Composer
    Composer -->|Validate Boundary| Validator
    Validator -->|Persist State| StackFile
    Composer -->|Generate Plan| PlanFile
    Agent -->|Execute Validated Plan| Workspace
```

---

## 🔄 Skill Resolution Lifecycle

```mermaid
sequenceDiagram
    autonumber
    participant Agent as 🤖 Agent
    participant MCP as 🔌 AAS MCP Server
    participant Catalog as 📚 Skill Catalog
    participant Composer as 🛠️ Stack Composer
    participant Workspace as 📁 Workspace

    Agent->>Workspace: Inspect project files & dependencies
    Agent->>MCP: Query relevant skill capabilities
    MCP->>Catalog: Fetch skill specs & SKILL.md definitions
    Catalog-->>MCP: Return candidate skills
    MCP-->>Agent: Provide skills payload
    Agent->>Composer: Pass chosen Skill IDs to compose_stack()
    Composer->>Composer: Perform stack validation & dependency check
    Composer-->>Agent: Validated in-memory stack
    Agent->>Workspace: Write aas-stack.json & apply changes
```

---

## ✨ Key Features

- 🧠 **Agent-First Selection**: Complete catalog access allows AI agents to intelligently select precise skills matching project requirements.
- ⚡ **Local MCP Server**: Embedded Model Context Protocol server (`aas-mcp`) provides fast, read-only local stdio access.
- 🛡️ **Strict Stack Validation**: In-memory boundary validation prevents conflicting skills, broken imports, or missing dependencies.
- 📜 **Reproducible Artifacts**: Generates standardized `aas-stack.json` files and execution plans.
- 🎨 **Web UI Catalog**: Built-in Vite + React app for visual browsing, filtering, and inspecting all 2,001+ skills locally.
- 🔍 **Security & Audit Guardrails**: Built-in security scanners and consistency checks ensure all skills strictly comply with safety guidelines.

---

## 📦 Skill Categories & Bundles

AI Skills comes organized into domain-specific skill bundles for effortless agent navigation:

| Icon | Category / Bundle | Included Capabilities & Focus Areas | Example Skills |
| :---: | :--- | :--- | :--- |
| 🌐 | **Full Stack Development** | Frontend, Backend APIs, Frameworks, Hydration, SSR | `react-components`, `nextjs-routing`, `express-api` |
| 🎨 | **UI / UX & Design Systems** | Modern Aesthetic Specs, Component Tokens, GSAP Animations | `ui-ux-pro-max`, `gsap-core`, `minimalist-ui` |
| 🛡️ | **Security & Hardening** | Vulnerability Audits, Input Sanitization, Auth Patterns | `security-and-hardening`, `security-auditor` |
| 📊 | **Data & Analytics** | ETL Pipelines, Data Visualization, Database Queries | `data-analytics`, `sql-optimizer` |
| ☁️ | **DevOps & Cloud** | CI/CD Automation, Containerization, Infrastructure | `ci-cd-and-automation`, `docker-builder` |
| 📱 | **Mobile Engineering** | React Native, Expo, iOS/Android Native Patterns | `expo-react-native`, `android-cli` |
| 🤖 | **AI & LLM Integration** | Prompt Engineering, RAG Systems, Agentic Workflows | `llm-application-developer`, `context-engineering` |
| 🧪 | **QA & Testing** | Unit Testing, DevTools Profiling, TDD Patterns | `browser-testing-with-devtools`, `test-driven-development` |

---

## 💻 CLI & Command Reference

The root `package.json` contains a suite of management, validation, and development scripts:

| Command | Action / Description |
| :--- | :--- |
| `npm run validate` | Runs standard validation scripts on all `SKILL.md` files. |
| `npm run validate:strict` | Enforces strict schema, heading, and frontmatter requirements. |
| `npm run audit:skills` | Audits skill catalog for missing metadata or broken references. |
| `npm run app:dev` | Launches the local Vite Web UI catalog server. |
| `npm run app:build` | Builds production bundle for the Web UI catalog. |
| `npm run catalog` | Generates the static catalog JSON database artifacts. |
| `npm run security:scan` | Runs local security static analysis over skill definitions. |
| `npm run test` | Executes the complete test suite. |

---

## 🔌 Agent Integration Guides

### Claude Code
Add the AAS MCP server configuration to your `claude.json` or project MCP config:
```json
{
  "mcpServers": {
    "ai-skills": {
      "command": "node",
      "args": ["path/to/ai-skills/tools/bin/aas-mcp.js"]
    }
  }
}
```

### Cursor
In Cursor Settings -> **MCP Servers**, add a new server:
- **Name**: `ai-skills`
- **Type**: `command`
- **Command**: `node path/to/ai-skills/tools/bin/aas-mcp.js`

### Gemini CLI & Antigravity
Copy or symlink local skills to your customization directory:
- Global: `~/.gemini/config/skills/`
- Workspace: `.agents/skills/`

---

## 📂 Project Directory Structure

```text
ai-skills/
├── 📁 apps/
│   └── 📁 web-app/              # Hosted Vite + React Skill Catalog UI
├── 📁 assets/
│   └── 🖼️ banner.jpg            # High-resolution project header banner
├── 📁 data/                     # Catalog index JSON & compatibility mappings
├── 📁 plugins/                  # Specialized plugin bundles & distributions
├── 📁 schemas/                  # AAS-v1 JSON Schemas (validation contracts)
├── 📁 skills/                   # 2,001+ canonical SKILL.md definition folders
│   ├── 📁 ui-ux-pro-max/
│   ├── 📁 gsap-core/
│   └── 📁 ...
├── 📁 tools/
│   ├── 📁 bin/                  # CLI binaries (install.js, aas.js, aas-mcp.js)
│   ├── 📁 lib/                  # Core AAS core runtime modules
│   └── 📁 scripts/              # Validation, audit & sync automation scripts
├── 📄 package.json              # Project manifests & npm scripts
└── 📄 README.md                 # Detailed repository documentation
```

---

## 🤝 Contributing & License

Project created and maintained by **[yug](https://github.com/yugsuthar208)**.

Distributed under the **MIT License**. See `LICENSE` for more information.

<div align="center">
  <br />
  <sub>Crafted with passion by <b>yug</b> • Powered by Agentic Intelligence</sub>
</div>
