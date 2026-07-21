# Mission: Learn the work stack properly — Vue/TS, Node, MongoDB, GitHub CI/CD

## Why

Michelle's work projects all run on the same stack: **Vue with TypeScript, Node.js, MongoDB, and
GitHub for version control and CI/CD**. She has already started at work and is behind, so this is
not leisurely study — it is catching up under real deadline pressure.

The deeper goal is a change in *how* she works. She currently relies heavily on AI to write code,
which produces working software but leaves gaps: she reads a lot of correct code without ever
generating it, so recognition outpaces understanding. The aim is to understand the key concepts
first, then go back to using AI to move fast — but as someone who can **evaluate** what the AI
produces rather than take it on trust.

The Run Planner app ("is Saturday good for a hike or a run?") is the vehicle. It grows one layer
at a time so each technology arrives with a real motivation rather than as an exercise.

## Success looks like

- **Read AI-generated code in this stack and say why it's right or wrong** — the single most
  valuable outcome, and the one that compounds
- Explain core concepts out loud to another engineer, in correct vocabulary (see `GLOSSARY.md`)
- Write and reason about async JavaScript without copying a pattern
- Type a third-party API response honestly, including its edge cases
- Build a Vue component and explain what makes it reactive
- Stand up a small Node service and say why the API key belongs there, not in the browser
- Model and query data in MongoDB
- Work in branches and pull requests by habit, with CI running tests on every push

## Constraints

- **Michelle writes all the code.** Claude teaches, reviews, and explains — it does not build the
  app. This is the entire point, given the AI-reliance she's trying to correct.
- **Triage mode.** She is behind at work. Anything unblocking her this week outranks the planned
  sequence; fundamentals get backfilled in parallel.
- **No assumed knowledge.** Perl familiarity is *scenery*, not foundation — she has seen
  constructs like `map` thousands of times without understanding them. Teach from zero.
- New vocabulary is taught in the `/jargon` format, with the term played back in her own words
  before it enters the glossary.
- Explain trade-offs — which option suits which situation, and why.
- Windows + PowerShell.

## Out of scope

- Deployment to production infrastructure beyond what CI/CD requires.
- OAuth. Open-Meteo needs no key; NPS uses a simple header key. That's the right ceiling.
- Front-end design and styling polish beyond seeing the data clearly.
- Any second stack. Everything here serves the four technologies above.
