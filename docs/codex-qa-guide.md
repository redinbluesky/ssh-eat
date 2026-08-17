# Codex QA Guide: Shh-eat Next.js Project

This document provides instructions for the Codex agent to set up, run, and perform Quality Assurance (QA) on the Shh-eat Next.js landing page.

## 1. Project Overview
Shh-eat is a Next.js-based landing page designed to validate demand for low-noise, low-mess, and low-scent office snacks.

## 2. Prerequisites
- **Node.js**: Ensure Node.js is installed.
- **Package Manager**: This project uses `npm`.

## 3. Local Environment Setup

### Installation
Before running tests or the app, install the dependencies:
```bash
npm install
```

### Running the Development Server
To run the application in development mode:
```bash
npm run dev
```
- **Default URL**: `http://localhost:3000`
- **Verification**: Use `curl -I http://localhost:3000` to verify the server is responding.

### Production Build & Start
To test the production build:
```bash
npm run build
npm run start
```

## 4. QA & Testing Commands

### Linting
Check for code style and potential errors:
```bash
npm run lint
```

### Unit & Component Testing
Run Vitest to verify logic and component rendering:
```bash
npm run test
```

### End-to-End (E2E) Testing
Run Playwright tests to verify user flows (e.g., form submission):
```bash
npm run test:e2e
```

## 5. Codex Execution Strategies

### Visual QA (via `computer_use`)
When visual verification is required (e.g., checking layout, responsiveness, or animations):
1.  Start the dev server in the background: `npm run dev &` (or use `terminal` with `background: true`).
2.  Use `computer_use` with `action='capture'` to take screenshots of the browser window.
3.  Verify visual elements against the brand direction in `docs/visual-direction.md`.

### DOM/Functional QA (via `browser_exec`)
When verifying DOM structure, accessibility, or data flow (e.g., checking if the Google Apps Script URL is correctly injected):
1.  Use `browser_exec` to navigate to `http://localhost:3000`.
2.  Use `js()` to inspect specific elements or the `window` object.
3.  Use `fill_input()` and `click_at_xy()` to simulate user interactions.

## 6. Troubleshooting
- **Port Conflict**: If port 3000 is in use, find the process using `lsof -i :3000` and kill it, or change the port.
- **Environment Variables**: Ensure `.env.local` is configured if testing the lead collection form (see `docs/deployment-guide.md`).
