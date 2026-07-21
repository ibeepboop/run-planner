# Working Notes

## Teaching preferences

- **Michelle writes the code. Always.** Claude's job is to teach, review, and explain. Do not
  write app code into `src/` unless she explicitly asks. Lessons give her the goal, the concepts,
  and the API facts — she does the implementation.
- Keep real terminology, but gloss it in plain language on first use.
- When there's a choice, explain which option suits which situation and why. Don't just label
  one "recommended".
- She has a Perl/Apache and macOS background; now on Windows. Comfortable in a terminal. See
  [[learning-records/0002-actual-starting-point]] and
  [[learning-records/0003-ai-reliance-and-the-real-goal]] for the measured baseline.
- **New vocabulary uses the `/jargon` format**: term + precise definition, everyday Handle,
  where the analogy breaks, in-a-sentence, common misuse. Then play the term back in her own
  words before it enters `C:\Users\Michelle\.claude\GLOSSARY.md`. No wrestling analogies unless
  she asks for one.

## Pace — the thing I keep getting wrong

**One new concept per lesson.** The first draft of Lesson 1 stacked ES modules + async + TS types
+ Vue reactivity and was correctly rejected as too technical. The second plan still assumed JS
syntax was known. When in doubt, split the lesson.

**Perl is scenery, not foundation.** An earlier version of this file claimed Perl analogues let
us skip teaching concepts. That was wrong — she has seen `map` thousands of times without
understanding it. Familiar constructs are still worth *showing* side by side, because they lower
the strangeness, but every concept gets taught from zero regardless. Never write "you already
know this".

Practise fundamentals in **plain files run with `node`** — no Vue, no build tooling — so those
layers don't confound the feedback loop.

She reads these workspace files critically and will correct a wrong assessment. Trust that signal
immediately and re-level rather than pushing on.

**Don't describe syntax loosely when the symbol is visibly present.** Lesson 2 originally said
`days.map(double)` has "no parentheses" — she immediately flagged that it plainly does. They are
`.map`'s. The fix was to name the *owner* of each pair rather than their presence, and it turned
into a better explanation than the original. Generalise: when two constructs share a symbol, say
which one owns it.

## Triage mode — she is behind at work

Work has already started, so the sequence below is **not** sacred. Two tracks run in parallel:

- **Track A — Unblock.** Whatever she hits at work this week wins over the planned order. Teach
  the concept behind the blocker, not just the fix.
- **Track B — Foundations.** Short lessons, backfilled underneath, in the order below.

Because she is behind, the highest-value early skill is **reading and evaluating AI-generated
code in this stack** — that pays off immediately at work and doesn't require building anything
first. Weight lessons toward "why is this code right or wrong" over "build this from scratch"
wherever the choice exists.

## Open question

The exact lesson cadence (lecture-then-exam vs lecture-only vs review-only) was asked but never
settled. Current format: short explainer, retrieval quiz, then a task she does herself.

## RESUME HERE (last updated end of session 3, 21 July 2026 — cont.)

**Done:** Lessons 1–**4** all complete with playbacks. Lesson 4 (remotes + push) closed this
session — see [[learning-records/0008-lesson-4-complete]] (and 0007 for Lesson 3). `remote` and
`push` now in `GLOSSARY.md` and the cheat sheet.

**Repo state (verified live):** `main` (3 commits) is **pushed to GitHub** — remote `origin` exists,
first push worked, Git Credential Manager handled auth on Windows. `practice-branch` (2 extra
commits) is **still local and unmerged** — the Lesson 5 PR vehicle. `scratch/` is committed.

**Decisions still standing:** she declined a bare local merge (wants the real PR flow — respected);
Conventional Commits is her team's convention (endorse; her `lesson:` prefix is a custom type).

**Living artifact:** `obsidian/Git Cheat Sheet.md` now covers remotes/push + first-push traps. Keep
growing it each Git lesson.

**Recurring pattern to keep exploiting:** the local-vs-remote (branch/merge vs push/pull)
conflation keeps resurfacing and keeps getting resolved *by observation* — she pushed `main`, saw
only 3 commits on GitHub, and that became the proof that push is per-branch. Lean on what she can
*see*, not just definitions.

**She catches my errors** — the Lesson 4 task said "five commits," she flagged that main has three.
Fixed. This is the mission working; name it when it happens.

**Pick up with — Lesson 5: pull requests (NOT YET WRITTEN).** `git push -u origin practice-branch`
(branch goes up unmerged) → open a PR on GitHub → review view → **squash-and-merge on GitHub** →
`git pull` merged main back down. Spine: **Git's local `merge` vs GitHub's PR-button merge** (merge
runs on GitHub, so push comes first — resolves her "push up" instinct for good). Last pure-Git
blocker before the JSM integration. She writes/runs everything.
2. **Answer her open question:** she asked for "a copy of the git-switch.html file" in
   `obsidian/`. No such file exists. Two candidates, unresolved when the session ended: a *new*
   `reference/git-essentials.html` consolidating this session (commit/staging/branch model,
   command table, `switch` vs `checkout`, unstaging, the `.gitignore` categories), or a straight
   Markdown port of `lessons/0003-*.html`. Recommend the new reference doc — the switch/checkout
   and unstaging material exists **only in the transcript** and will be lost otherwise. Ask in
   prose, briefly.
3. **Lesson 4 — remotes, push, pull requests.** Hard blocker for work; she has never used GitHub
   professionally. Needs a GitHub remote for run-planner to practise against.
4. Then Track A continues: what an API call is → `fetch`/`async`/`await` → why the token is
   server-side (the reference doc already covers the *what*; she needs the *how*).

**Nag retired:** `const` used throughout Lesson 2 unprompted. Stop flagging unless it returns.

**New, unverified:** she used a `chore:` prefix on both commits — Conventional Commits, picked up
somewhere and not taught here. Ask whether her team uses it before endorsing or unpicking it.

**Working style, learned the hard way this session:** don't re-open files she already has open,
and ask clarifying questions in **prose, not `AskUserQuestion`** — she interrupted both. She
answers free-form questions well and in detail; the tool is friction.

## TRACK A — the real work blocker (disclosed end of session 2)

She has been assigned a **feature integration connecting Atlassian JSM (Jira Service Management)
to their customer-facing portal**, so customers can raise service desk tickets. The UI is built
into their own product; the request goes to JSM **via API**.

She has **never done any of this before** — not the integration, not their stack, and she has
**never used GitHub in a professional environment** (no PR/review/branch workflow experience).

This outranks the foundations sequence. It is also, usefully, the same shape as the back half of
Run Planner: collect input in our UI → call a third-party API with a secret → they create a record.
Lesson 13's "why the API key can't live in the browser" *is* her JSM token problem. Teach the
concept via her real task wherever possible, and let Run Planner be the safe place to practise it.

**Triage questions asked, answers pending:** what already exists in the repo vs. what she must
build; deadline; who on the team can answer questions; whether the JSM call is expected
server-side (it must be — the token cannot ship to a browser).

**Likely Track A order once answers land:**

1. Professional Git/GitHub workflow — branch, commit, PR, review. She cannot ship anything without
   this, and it is pure blocker. Promote from Lesson 5.
2. What an API call actually is — request, response, status codes, headers, auth. Then `fetch`,
   `async`/`await`, error handling (Lesson 4 material, motivated by JSM).
3. Why the JSM token belongs on the server (Lesson 13 material, arriving early and for real).
4. Reading an unfamiliar codebase — how to find the seam where her feature plugs in.

**Wisdom note:** a first integration in an unfamiliar stack is a scoping conversation before it is
a coding task. Coach her to ask her team specific questions rather than to read her way in alone.
That is the highest-leverage move available and she should not feel it is cheating.

## Obsidian — staging, not integration

Reference docs she wants to keep get a Markdown twin in `obsidian/`, which she moves into her
vault by hand. **Only on request** — name the document, port that one. See `obsidian/README.md`
for conventions and the deferred cleanup.

The `obsidian-vault` skill is misconfigured (points at a WSL `D:` path that doesn't exist; real
vault is `C:\Users\Michelle\Documents\Obsidian\Michelle's Vault`, currently near-empty). She knows,
and chose to defer fixing it rather than lose momentum on the work blocker. Don't re-litigate it
unsolicited — offer once when there's slack.

## Lesson arc (revised: full stack, Git early)

**Foundations — plain JavaScript, no Vue, no tooling:**

1. **Functions, arrows and strings** — arrow functions; template literals. *(DONE)*
2. **Callbacks, `.map()` and `.filter()`** — functions as values; same-length vs fewer. ← next
3. **Destructuring** — pulling values out of arrays and objects by shape.
4. **Async JavaScript** — promises, `async`/`await`, `fetch`, `try`/`catch`.

**Git — starts here and never stops.** Not a phase. From Lesson 4 onward, every lesson ends with
a commit, and later a branch and a PR. The repo currently has **zero commits**.

5. **Git and GitHub** — repo, commit, branch, push, pull request. Used continuously afterwards.
6. **Tooling and modules** — npm, `package.json`, Vite, `npm run dev`, `import`/`export`.
7. **TypeScript from the ground up** — why types, annotations, interfaces, optional properties.

**Front end:**

8. **What a component is** — the concept first, then Vue SFCs, `ref()`, reactivity, `v-for`.
9. **First typed fetch** — geocoding, hardcoded query, render results. *(written, held back)*
10. **Search + debounce + async state** — `AbortController`, discriminated union state.
11. **Forecast + the transform layer** — normalise parallel arrays into `DailyForecast[]`.
12. **Scoring + Vitest** — pure function over temp/rain/wind, tested.

**Back end — motivated by hiding the NPS API key:**

13. **What a server is for** — why a browser-side key leaks, and what a proxy fixes.
14. **Node + Express** — routes, request/response, env vars, calling NPS server-side.

**Data:**

15. **MongoDB fundamentals** — documents vs rows, collections, when NoSQL suits.
16. **Persisting favourites** — schema design, queries, connecting from Node.

**Automation:**

17. **GitHub Actions** — running tests on push, what CI/CD actually means.

## Renumbering note

Lesson files on disk are `0001-functions-arrows-strings.html` and
`0007-your-first-typed-fetch.html`. The latter is now **Lesson 8** in this arc and will be
renumbered when it is unlocked — do not renumber it again before then; the file has already been
moved twice and its encoding damaged once by a careless PowerShell rewrite. If renaming, use the
`Write` tool or `[System.IO.File]::WriteAllText` with an explicit UTF-8 encoding, never
`Get-Content | Set-Content`.

## Verified API facts (checked live, 2026-07-21)

- Geocoding no-match response is `{"generationtime_ms":0.69}` — **the `results` key is absent
  entirely**, not an empty array. Same for queries under 2 characters. This drives the optional
  property in the type.
- Searching "Boulder" returns both Boulder, Colorado and Boulder, Montana — good natural
  motivation for showing `admin1` + `country` in a result list.
- Forecast `daily` is columnar: `time[]`, `temperature_2m_max[]`, etc., all parallel arrays.
  Units live separately in `daily_units`.
