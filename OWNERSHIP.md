# Project Ownership Map

This file defines the ownership of all files in the project to prevent conflicts between **Hermes** and **Codex**.

## 1. Ownership Domains

### 🤝 [SHARED]
*Files that both Hermes and Codex can modify. Primarily configuration and project metadata.*
- `package.json`
- `package-lock.json`
- `README.md`
- `AGENTS.md`
- `IDEA.md`
- `COLLABORATION_PROTOCOL.md`
- `OWNERSHIP.md`
- `.gitignore`
- `.env.example`

### 🛠️ [HERMES_DOMAIN]
*Files strictly managed by Hermes. Focus on logic, testing, and infrastructure.*
- `src/api/`
- `src/hooks/`
- `src/utils/`
- `src/services/`
- `tests/`
- `scripts/`
- `public/` (Static assets/config)
- `vite.config.ts` / `tailwind.config.js` (Configuration files)

### 🎨 [CODEX_DOMAIN]
*Files strictly managed by Codex. Focus on UI, Design, Content, and Documentation.*
- `src/components/` (UI Components)
- `src/styles/` (Global CSS/Tailwind layers)
- `src/assets/` (Images, Icons, Fonts)
- `docs/` (Design docs, Brand briefs, Specs)
- `public/images/` (Content-specific images)

## 2. Ownership Change Procedure

If a task requires a file to move from one domain to another:
1.  **Codex** must report the need for a change to **Hermes**.
2.  **Hermes** will propose the change to the **User**.
3.  Upon **User approval**, **Hermes** will update `OWNERSHIP.md`.
