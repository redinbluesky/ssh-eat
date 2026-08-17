# Hermes-Codex Collaboration Protocol

This document defines the operational rules and division of labor between **Hermes (Main Orchestrator)** and **Codex (Specialist)** to ensure maximum efficiency and zero file conflicts.

## 1. Role Division

### 🤖 Hermes (The Executor)
*   **Focus:** Implementation, Execution, Testing, and Debugging.
*   **Responsibilities:**
    *   Writing core logic and heavy implementation code.
    *   Running tests, builds, and deployment scripts.
    *   Managing the development environment and dependencies.
    *   Performing large-scale refactoring and structural changes.
    *   **Verification:** Validating Codex's outputs against the design and requirements.

### 🎨 Codex (The Architect/Designer)
*   **Focus:** Design, Precision, Documentation, and QA.
*   **Responsibilities:**
    *   Designing UI/UX components and styling (CSS/Tailwind).
    *   Creating high-level architecture and technical design documents.
    *   Writing marketing copy and content for the landing page.
    *   Performing visual and functional QA on UI components.
    *   Refining documentation and project specifications.

## 2. Conflict Prevention (Ownership Model)

To prevent simultaneous edits to the same files, all files must belong to one of the following domains as defined in `OWNERSHIP.md`:

*   **`[SHARED]`**: Files that both agents may modify (e.g., configuration, project metadata).
*   **`[HERMES_DOMAIN]`**: Files strictly managed by Hermes (e.g., logic, tests, scripts).
*   **`[CODEX_DOMAIN]`**: Files strictly managed by Codex (e.g., UI components, assets, design docs).

**Rule:** If an agent needs to modify a file outside its domain, it must first consult the `OWNERSHIP.md` and, if necessary, request a domain transfer via the user.

## 3. Workflow (The Kanban Loop)

1.  **User Command:** User instructs Hermes to delegate a task to Codex.
2.  **Task Creation:** Hermes creates a `todo` item in the `Codex Review` or `In Progress` state.
3.  **Delegation:** Hermes calls `delegate_task` to Codex, providing:
    *   The specific goal.
    *   The current `OWNERSHIP.md` context.
    *   The `todo` item details.
4.  **Execution:** Codex performs the task in an isolated session.
5.  **Handover & Verification:** Codex returns the result. Hermes verifies the result against the `OWNERSHIP.md` and the original goal.
6.  **Completion:** Hermes updates the `todo` list and reports the final result to the user.

## 4. Communication Protocol

*   **Hermes $\rightarrow$ Codex:** Always include the `OWNERSHIP.md` context in the delegation message.
*   **Codex $\rightarrow$ Hermes:** Codex must report if a task requires a change in file ownership.
*   **Hermes $\rightarrow$ User:** All Codex-related completions must be verified by Hermes before being presented as "Done".
