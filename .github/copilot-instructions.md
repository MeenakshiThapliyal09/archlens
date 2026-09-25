# ArchLens — AI Requirements-to-Architecture Copilot

ArchLens is a lightweight student mini project that helps turn requirements into architecture diagrams and supporting validation.

## Project conventions

- Use Next.js, React, TypeScript, and Tailwind CSS consistently.
- Use React Flow for the architecture editor and Zod for schema validation.
- Keep AI providers behind an abstraction so provider integrations can be added independently.
- Use IndexedDB or browser storage for MVP persistence.
- Keep AI-generated output separate from deterministic validation and diagram visualisation.
- Prefer small, maintainable modules; avoid unnecessary dependencies and overengineering.
- Never expose API keys in client code.
- Do not change unrelated files.
