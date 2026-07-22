# Lesson 9 complete — TypeScript fundamentals: annotations, `interface`, optional properties

Michelle can write typed functions and interfaces from scratch, explain what an annotation actually
checks (and what checks it, and when), and has directly observed — twice, with her own code — that
`node file.ts` strips types rather than checking them. `type annotation`, `interface`, and a new
`+`-vs-other-operators coercion entry are now in `GLOSSARY.md`. New reference doc:
`reference/typescript-basics.html`.

**Evidence (strong, entirely first-hand by the end):**
- Homework (`scratch/typescript-fundamentals-practice.ts`): a typed function (`makeMeowSound`), two
  interfaces (`GeocodingResponse` with `results?`, `GeocodingResult` mirroring the real API with
  `admin1?`/`admin2?`), and a second function (`getLocation`) that correctly narrows both optional
  fields before touching `.length` on either.
- **Triggered the type-vs-runtime gap herself, unprompted to repeat it a second way**: typo'd
  `result.admin11111`, saw the red squiggle, confirmed the message named the real property, fixed it,
  then ran the file with plain `node` and confirmed it executed regardless — matching the lesson's
  own `double("5")` demo but on her own code, not copied.
- Predicted `getLocation`'s output correctly before running it (`"No city or state returned"`,
  because she'd omitted both optional fields from the call-site object) and confirmed by running it.

**Corrections applied during the session:**
1. Initial code had three unrelated syntax errors stacked at once (missing `:` before a return type,
   an `if` condition malformed as a function call on a non-function value, a stray incomplete
   `function`). Diagnosed as separate rules colliding, not one "doesn't understand functions"
   problem — she fixed the return-type colon and the `if` shape herself in one pass once isolated.
2. Reused a typo'd field name (`longitute`) from an earlier draft — pointed out as a live example of
   the lesson's own point (a wrong interface compiles as cleanly as a right one); she corrected it to
   `longitude` and separately added `admin1?`/`admin2?` as optional, matching the real API.
3. Got stuck on *how to call* a function typed with an interface — hadn't connected "the interface
   describes a shape" with "you still have to build a real object matching it." Explained via the
   `Point` example (inline literal vs. a typed variable) rather than her actual homework interface,
   so she still wrote her own call site. She then omitted a required property (`country`) on her
   first attempt at the real call — same rule, caught by the checker, fixed unaided once pointed at
   the right interface field.
4. **Playback correction, not yet fully self-corrected**: first stated Node's coercion as "string +
   number = number," generalizing from the lesson's `"5" * 2 → 10` demo to the `+` operator, where
   it's actually false (`"5" + 3` is `"53"`, string concatenation). Corrected with the rule: `+`
   concatenates if either side is a string; every other arithmetic operator coerces to number. Not
   re-tested live this session — worth a quick confirm-by-running next time `+` on mixed types comes
   up for real, since it wasn't verified the way the type-stripping gotcha was.
5. Also broadened her optional-property playback: she'd said marking a property optional stops you
   using "certain methods (like `.length`)" before checking — corrected to *any* property or index
   access, not specifically methods.

**New nuance surfaced this session (in `GLOSSARY.md`):** which JS coercion rule applies after types
are erased depends on the **operator**, not just "types get erased." `+` is the one arithmetic
operator with a string-concatenation special case; `*`, `-`, `/` have no string meaning and coerce to
number instead. This is a sharper, more useful frame than the lesson's own "coercion happens" framing
and should be reused whenever reviewing AI-generated code doing arithmetic on possibly-stringy values
(e.g. values pulled from a query string or form input, which are *always* strings even if they look
like numbers).

**Housekeeping done alongside this lesson (see `NOTES.md` for full detail):** the held-back typed-fetch
file is renamed `0009` → `0010` with its stale Lesson-1/Lesson-05/Lesson-7 references fixed; two more
stale lesson-number references in `reference/open-meteo.html` (left over from the *session-6* rename)
were also caught and fixed. General lesson: renumbering a lesson file needs a workspace-wide grep for
its old filename and old number-text, not just an edit to the file itself.

**Implications for next session:**
- Ready for **Lesson 10: Your First Typed Fetch** (`lessons/0010-your-first-typed-fetch.html`) — but
  that file still assumes Vue concepts (`ref()`, `onMounted()`) that no lesson has actually taught yet.
  Confirm before delivering it whether a short Vue-basics lesson needs inserting ahead of it, or
  whether to trim those parts down given Track A urgency (see below).
- The `+`-vs-`*` coercion correction was accepted verbally but not re-verified by her own run — low
  priority to re-test deliberately, but flag it if it recurs wrong in a future playback.
- Zero recurrence this session of the timing-race-vs-deterministic-category-error slip from Lessons 7
  and 8 — nothing to report there, just noting the streak continues.