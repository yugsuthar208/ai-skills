<div align="center">
  <img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&height=200&section=header&text=AI%20Skills&fontSize=90&fontAlignY=38&desc=The%20Ultimate%20Agentic%20Skills%20Library&descAlignY=51&descAlign=62" alt="Banner" />

  <h1>🚀 AI Skills</h1>
  <p><strong>Local, agent-owned skill stacks for coding agents—from complete catalog access to a reproducible, reviewable plan.</strong></p>

  <p>
    <a href="https://github.com/yug/ai-skills/releases"><img src="https://img.shields.io/github/v/release/yug/ai-skills?style=for-the-badge&color=success" alt="Release" /></a>
    <a href="https://github.com/yug/ai-skills/blob/main/LICENSE"><img src="https://img.shields.io/github/license/yug/ai-skills?style=for-the-badge&color=blue" alt="License" /></a>
    <img src="https://img.shields.io/badge/Maintained%20By-yug-blueviolet?style=for-the-badge" alt="Maintained By yug" />
    <img src="https://img.shields.io/badge/Agentic-2%2C001%2B%20Skills-orange?style=for-the-badge" alt="Skills" />
  </p>
</div>

---

## 🌟 Overview

**AI Skills** inspects your project and chooses exact skills from the complete local catalog. It enables coding agents (like Codex or Claude) to construct a localized, powerful skill stack to enhance agentic coding workflows.

This is the ultimate toolkit designed and curated by **yug** to empower the next generation of AI-assisted development.

## ✨ Features

- 🧠 **Agent-Owned Selection**: Empower agents to dynamically choose exact skills from a complete catalog.
- 🛠️ **Stack Validation**: Validate selections in memory using a robust, read-only `compose_stack` tool.
- 📋 **Immutable Plans**: Persist the selected skills as an immutable `aas-stack.json` file for reproducibility.
- ⚡ **Local & Fast**: Fully localized schema validation and discovery.

---

## 🚀 Quick Start

### 1. Requirements
- **Node.js** (v22 or higher)
- **Git**

### 2. Installation
Clone the repository to get started:

```bash
git clone https://github.com/yug/ai-skills.git
cd ai-skills
npm ci
```

### 3. Usage
You can run the built-in CLI to manage and validate your skills:

```bash
npm run validate
```
Or start the local UI catalog:
```bash
npm run app:dev
```

---

## 📁 Repository Structure

- `/skills`: The massive collection of over 2,001 agentic skills.
- `/tools`: Utility scripts for auditing, syncing, and validating the catalog.
- `/apps`: Local web UI to browse and manage skills.
- `/schemas`: JSON schemas for all core manifests.

---

## 🤝 Contributing

This project is actively maintained by **yug**. Contributions are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<div align="center">
  <sub>Built with ❤️ by <b>yug</b></sub>
</div>
