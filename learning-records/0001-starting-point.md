---
Status: superseded by LR-0002
---

# Starting point: strong general programming, new to Vue reactivity

> **This record was wrong.** It was written from inference, not evidence — see
> [[0002-actual-starting-point]] for the calibrated version. Kept for the history of how the
> mistake happened.


Michelle comes from a Perl/Apache background and is comfortable with terminals, HTTP, and the
concept of static types. She scaffolded the Vite + Vue 3 + TypeScript project herself
(`run-planner/`, no commits yet, default template untouched). What is genuinely new is **Vue's
reactivity model** — `ref()`, `.value`, and template auto-unwrapping — and **typing third-party
JSON** at the boundary of an app.

**Implications:** Don't spend lesson time on HTTP basics, JSON, CLI usage, or why types are
useful — she has all of that. Do spend it on the Vue-specific mental model and on the discipline
of typing what an API *actually* returns rather than what you assume it returns. Start at
"first typed fetch" rather than "what is a component".
