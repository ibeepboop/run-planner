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

## RESUME HERE (last updated session 8, 22 July 2026)

**Lesson 9 written this session — `lessons/0009-typescript-fundamentals.html`.** Scope held
deliberately narrow per the pace rule: annotations (function params/return) and `interface`,
including optional properties (`?`), motivated directly by L8's untyped `data.results`. Centerpiece
demo, verified live this session: `node file.ts` **strips** type annotations and runs the code
regardless — `double("5")` prints `10` with zero complaint from plain `node` — because Node's
`.ts` support is type-stripping, not type-checking. The actual checker is the editor's TS language
service (VS Code ships one, no install needed) or `tsc` run separately. This lets her practise in a
plain `.ts` file run with `node`, same pattern as all prior scratch work — no `npm install`, no
build tooling, keeping "tooling and modules" (npm/Vite) genuinely deferred rather than sneaking in
through the back door.

**Numbering snag from session 7 resolved.** The held-back typed-fetch file is now
`lessons/0010-your-first-typed-fetch.html` (renamed via `git mv` from `0009-...`, no content
rewrite — same safe pattern as the session-6 rename). Its stale title/eyebrow/footer/body
references ("Lesson 1", "Lesson 05", "Lesson 7 of the Run Planner course", "Lesson 8 turns the
hardcoded Boulder...") are now fixed to Lesson 10, with a proper back-link to Lesson 9. **Note:**
this file still assumes Vue concepts (`ref()`, `onMounted`) that no lesson has taught yet — the
arc's original "What a component is" (Vue SFCs/reactivity) was never delivered before Track A
reordered everything around Git and the API. That gap is *not* fixed yet — flag it before Lesson 10
is actually delivered; it may need a short Vue-basics lesson inserted ahead of it, or a trim.

**Also fixed in passing:** `reference/open-meteo.html` had two more stale references left over from
the session-6 rename (footer linked `lessons/0007-your-first-typed-fetch.html`; a body mention said
"Lesson 9" for the still-unwritten forecast transform layer). Both corrected — the transform-layer
mention now avoids hardcoding a number, since Track A reordering keeps shifting what number lands
where. **General lesson from this recurrence: when a lesson file gets renumbered, grep the whole
workspace for its old filename and old lesson-number text, not just the file itself** — reference
docs link to lessons too, and their strings don't move with a `git mv`.

**Lesson 9 CLOSED, same session.** Full detail in [[learning-records/0013-lesson-9-complete]].
`type annotation`, `interface` (with the optional-property-forces-narrowing note and the
call-site-needs-every-required-property note), and a new coercion entry (`+` concatenates on mixed
types, `*`/`-`/`/` coerce to number) all in `GLOSSARY.md`. New reference doc:
`reference/typescript-basics.html`, ported to `obsidian/TypeScript Basics.md` on request (not yet
moved into her actual vault — still staged).

**Evidence was fully first-hand, not just recited:** she triggered the type-vs-runtime gap herself
a second time beyond the lesson's own demo (typo'd `admin11111`, saw the squiggle, fixed it, then
ran with `node` and confirmed it executes regardless), and correctly predicted `getLocation`'s
output before running it. Homework's `getLocation` function correctly narrows both optional fields
before touching `.length` on either.

**Corrections this session, for pattern-tracking:**
- Three unrelated syntax errors arrived stacked at once early on (missing return-type colon, an
  `if` malformed as a function call on a non-function value, a stray incomplete `function`) and she
  initially read this as "I don't understand functions." Framed as separate rules colliding, not one
  deficit — she fixed the return-type colon and `if` shape herself in one pass once isolated. Keep
  doing this: when several small syntax errors land together, name them as distinct rules before
  she starts to generalize a broader "I don't get X" conclusion from the pile-up.
- Got stuck on *calling* a function typed with an interface — hadn't connected "the interface
  describes a shape" with "you still build a real object matching it." Resolved via the lesson's
  own `Point` example rather than her actual homework interface, so she still wrote her own call
  site unaided (and then genuinely hit + fixed a missing-required-property error for real).
- Playback stated Node's coercion as "string + number = number," over-generalizing from the
  lesson's `"5" * 2 → 10` demo to `+`, where it's false (`"5" + 3` is `"53"`). Corrected, but **not
  re-verified by her running it** — unlike everything else this session, which was confirmed live.
  Worth a quick real check next time `+` on mixed types comes up, rather than assuming the verbal
  correction stuck.

**Pick up with — Lesson 10: Your First Typed Fetch** (`lessons/0010-your-first-typed-fetch.html`,
just renumbered from the held-back `0009`). **Before delivering it, resolve the Vue-prerequisite
gap**: that file assumes `ref()` and `onMounted()`, which no lesson has taught. Decide whether a
short "what a component is" lesson needs inserting first (matches the original arc's item 8), or
whether to trim this file down to just the typed-fetch/interface parts and defer Vue reactivity to
its own lesson. Given Track A urgency (see JSM section below), lean toward whichever gets her to a
real, typed API call fastest — ask her directly rather than deciding unilaterally, this is exactly
the kind of ordering call the ordering-decision note further down says to make *with* her.

## RESUME HERE (session 7, 22 July 2026 — kept for continuity, superseded above)

**Lesson 8 CLOSED.** `lessons/0008-error-handling.html` written and delivered same session. Full detail
in [[learning-records/0012-lesson-8-complete]]. `try`/`catch` and `response.ok` now in `GLOSSARY.md`, plus
a three-part-check entry tying the concepts together, plus a new "forgotten-await doesn't always throw"
nuance discovered live this session.

**She found a real bug unaided in her homework** (`scratch/getWeatherBasicRequestResponsePractice.js`):
missing `await` on `response.json()`. Only surfaced because she was asked to test a real place name
instead of just her `"zzzzz"` case — worth continuing to push "test the case you haven't tried" as a
general habit, not just for this lesson.

**Recurrence to watch:** the timing-race-vs-deterministic-category-error slip from L7
([[learning-records/0011-lesson-7-complete]]) recurred once this session (described the missing-`await`
result as "got headers before body returned" rather than "the Promise itself is what's stored"). She
self-corrected cleanly both times when shown the coat-ticket framing. Not yet a standing misconception —
but if it recurs a third time, address it head-on rather than as a wording nudge.

**Numbering snag surfaced while writing L8 — do not let this recur:** the held-back typed-fetch file is
still `lessons/0009-your-first-typed-fetch.html`, but its *internal* title/eyebrow/footer text is stale
from an even earlier draft (`<title>Lesson 1</title>`, eyebrow `Lesson 05`, footer says `Lesson 7 of the
Run Planner course`, body text says "Lesson 8 turns the hardcoded Boulder..."). None of that was touched
this session — it's still held back, not being delivered. **Before that file is ever delivered**, its
title/eyebrow/footer/body lesson-number references all need correcting to whatever slot it actually lands
in, same as the session-6 `git mv` fix but this time a content fix, not just a filename. L8's "Next"
section deliberately does **not** link to `0009-your-first-typed-fetch.html` by name, to avoid implying
that file is "Lesson 9" — it isn't; Lesson 9 is TypeScript-from-scratch, not yet written, and doesn't have
a claimed number/file yet.

**Pick up with — Lesson 9: TypeScript from the ground up (NOT YET WRITTEN).** Earns its place at "I want my editor
to know what shape this response is" — motivated directly by L8's untyped `data.results`. Do not pull TS
forward abstractly — same "too technical" failure as the first Lesson 1 draft — unless reading `.ts`
becomes a live work blocker. When L9 is written, resolve the numbering snag above: give the held-back
typed-fetch file its real number (likely `0010`) and fix its internal stale references via `git mv` +
content edit, same as the session-6 precedent.

**The `zzzzz` empty-200 loop from L6 IS now closed** — she ran `curl.exe -i ...name=zzzzz`, saw
`200 OK`, `Content-Length: 32`, body `{"generationtime_ms":0.44596195}`, **no `results` key**. By her
own observation this time, not assertion. That observation is the live hinge L8 builds on.

**Node is v24** — global `fetch` is stable, no experimental warning. Task instructions assume this.

**--- L6 highlights below, still relevant for the L8 error-handling lesson ---**

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

**Resolved, end of session 6.** The held-back typed-fetch lesson was renamed
`0007-your-first-typed-fetch.html` → **`0009-your-first-typed-fetch.html`** to free `0007` for the
new async lesson, and because `0009` matches its actual arc position (item 9, "First typed fetch").
Done with `git mv` — a pure rename, **no content rewrite**, so the encoding-damage hazard (a careless
`Get-Content | Set-Content` in an earlier session) did not apply. Disk number now agrees with arc
number; the churn is closed — no further renumbering of that file is expected. If a lesson file ever
*does* need its contents rewritten, still use the `Write` tool or
`[System.IO.File]::WriteAllText` with explicit UTF-8, never `Get-Content | Set-Content`.

## Verified API facts (checked live, 2026-07-21)

- Geocoding no-match response is `{"generationtime_ms":0.69}` — **the `results` key is absent
  entirely**, not an empty array. Same for queries under 2 characters. This drives the optional
  property in the type.
- Searching "Boulder" returns both Boulder, Colorado and Boulder, Montana — good natural
  motivation for showing `admin1` + `country` in a result list.
- Forecast `daily` is columnar: `time[]`, `temperature_2m_max[]`, etc., all parallel arrays.
  Units live separately in `daily_units`.
