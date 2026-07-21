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

## RESUME HERE (last updated end of session 5, 21 July 2026)

**Lesson 6 DONE.** `API call` played back strong + unaided, now in `GLOSSARY.md`. Full detail in
[[learning-records/0010-lesson-6-complete]]. Highlights that matter for next session:

- **She caught a real ambiguity in my own feedback** (request body vs response body — I wrote "body"
  bare twice; GET has no *request* body but gets a full *response* body). Same "name the owner of a
  shared term" slip as the `.map()` parentheses episode. Mission working, 3rd+ time — keep naming it.
  Glossary anatomy-map now says "request body"/"response body" explicitly.
- **Refinements she still needs reinforced:** `PUT`/`PATCH` (not "UPDATE") is the HTTP verb; a `GET`
  sends no request body (inputs ride in the URL).
- **Open thread:** the hands-on `curl.exe -i` task was **never reported back** (no first-line status,
  no `zzzzz` empty-200 observation). Gotchas landed *as concepts* (playback + glossary) but not by her
  own observation. **Cash this in at the top of L7** — have her actually run the `zzzzz` call and *see*
  the `200` with absent `results`; it's the live hinge for `fetch`'s 404 behaviour.

**Pick up with — Lesson 7: `fetch` / `async` / `await` / `try`/`catch` (NOT YET WRITTEN).** The JS
that sends the request she just mapped; async JS (the real deferred prerequisite) arrives here,
motivated by the round trip taking time. The **404-is-success** gotcha from L6 is the hinge — `fetch`
only rejects on "no response," treats a 404 as a resolved promise (MDN: `Fetch_API/Using_Fetch`).
Open-Meteo is the safe practice ground. One-concept-per-lesson still holds — if `fetch` + promises +
`async`/`await` + error handling feels heavy, split the request-sending mechanics from error handling.
Held-back `0007-your-first-typed-fetch.html` (arc L8) still downstream — do not renumber yet.

**--- prior resume note (session 4) below, still valid for L7+ ---**


**Done:** Lessons 1–**5** all complete with playbacks. Lesson 5 (pull requests) closed this
session — see [[learning-records/0009-lesson-5-complete]]. `pull request` now in `GLOSSARY.md` and
the cheat sheet (new "Pull requests" section). **The local-vs-remote conflation that ran through
Lessons 3–5 is resolved** — she can state *why* push must precede the PR merge, unaided.

**Repo state (verified live):** `main` (5 commits) is pushed to GitHub, including the squash-merge
`219426d "…(#1)"`. PR #1 merged. `practice-branch` **deleted locally** (she did it). Note
`remotes/origin/practice-branch` tracking ref may still linger until a `fetch --prune` — harmless.

**Decisions standing:** Conventional Commits is her team's convention (her `lesson:` is a custom
type, fine in this repo). She wanted the real PR flow, not a faked local merge — delivered.

**Living artifact:** `obsidian/Git Cheat Sheet.md` now covers the full PR loop + the `-d`/`-D`
branch-cleanup nuance. Keep growing it.

**Recurring pattern that keeps paying off:** local-vs-remote resolved *by observation* a third time —
her `git branch -d` succeeding (not `-D`) exposed that `-d` checks the **upstream** first, and that a
remote-tracking branch is a real object Git reasons about. Lean on what she can *see*.

**She catches my errors — again.** Lesson 5's gotcha wrongly claimed `-d` would refuse; she ran it,
it succeeded, she flagged the mismatch. Fixed in the lesson, glossary, and cheat sheet. This is the
mission's core outcome working; name it every time it happens.

**Pick up with — Lesson 6: what an API call actually is (NOT YET WRITTEN).** Track A / JSM proper.
Request, response, status codes, headers, auth — the vocabulary, before any `fetch`. Then Lesson 7
`fetch`/`async`/`await` + error handling (note MDN: a 404 does *not* reject the promise), then why
the JSM/NPS token must live server-side. Run Planner's Open-Meteo calls are the safe practice ground;
`reference/api-integration-security.html` covers the *why* of server-side secrets — she needs the
*how*. Held-back `0007-your-first-typed-fetch.html` (arc Lesson 8) sits downstream of these; do not
renumber it yet (see Renumbering note).

**One-concept-per-lesson still holds** — API calls is a lot of surface; split request/response
vocabulary from `fetch` mechanics if it feels heavy. When in doubt, split.

**Ordering decision (confirmed with her, end of session 4 — don't re-litigate):** she asked whether
TypeScript is needed before APIs. Confirmed the work blocker is the **JSM integration itself**, not
reading TS. So the road is: **API concept (L6) → async JS (the real deferred prerequisite — promises/
`async`/`await`; was arc L4, skipped when Git jumped the queue) → TypeScript from the ground up →
first *typed* fetch (`0007`)**. TS earns its place at the "type the response" step, not before —
teaching it abstractly is the same "too technical" failure as the first Lesson 1 draft. Exception
still stands: if reading typed `.ts` code becomes an active work blocker, pull a tight "reading TS
annotations" lesson forward out of order.

**Nag retired:** `const` used throughout unprompted since Lesson 2. Stop flagging unless it returns.

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
