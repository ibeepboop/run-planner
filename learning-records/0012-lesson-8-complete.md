# Lesson 8 complete — error handling: `try`/`catch`, `response.ok`, body presence

Michelle can write and explain the three-part "did it work?" check: `try`/`catch` for no-response-at-all,
`response.ok` for a resolved-but-bad status, and a body-presence check for her own `zzzzz` empty-`200`
case. `try`/`catch` and `response.ok` now in `GLOSSARY.md`, along with a distinct three-part-check entry
tying the concepts together.

**Evidence (strong, with one self-caught bug and two corrections):**
- Homework (`scratch/getWeatherBasicRequestResponsePractice.js`) implemented all three checks correctly
  in shape — `try`/`catch` around the fetch, `if (!response.ok) return`, `if (!data.results) return`.
- **She found a real bug unaided**: `const data = response.json()` was missing `await`. She only surfaced
  it because I asked her to test with a real place name instead of just `"zzzzz"` — with `"zzzzz"` the
  missing `await` was invisible (see recurrence note below). She added the `await` back, ran it, and
  confirmed the fix herself before I said anything.

**Two corrections applied:**
1. First playback conflated all three checks as "if any of those don't resolve correctly, they throw an
   error, and we catch it." Corrected: only check 1 (the fetch itself) can throw. Checks 2 and 3 are
   `if`/`return` — nothing "catches" a bad status or a missing key, the code just notices and bails.
   She took this cleanly once shown her own code didn't use throw for checks 2/3.
2. **Recurrence of the Lesson 7 slip** ([[0011-lesson-7-complete]]): described the missing-`await` bug as
   "we got the headers before the response body was returned" — a *timing race* framing again, not the
   deterministic category error. Corrected the same way as last time (coat-ticket framing); she then
   restated it precisely unaided: *"the datatype that's actually stored in the variable assignment is the
   Promise itself... without that keyword, the Promise just sits."* Clean on the second pass.

**New nuance surfaced this session (added to GLOSSARY.md):** the forgotten-`await` bug doesn't always
throw. Her case used `if (!data.results)` — checking presence on a Promise object doesn't throw (a
Promise just has no `.results`, so the check reads `true`), so the code silently took the "no match"
branch with **no error at all**, even though nothing was technically broken-looking. This is a second,
more dangerous shape of the same bug than Lesson 7's `TypeError` case (where the next line reached
straight into a property). Worth naming explicitly next time an AI-written fetch is being reviewed — a
missing `await` doesn't guarantee a crash to notice.

**Implications for next sessions:**
- The timing-race-vs-deterministic-category-error slip has now recurred once. It's not fully load-bearing
  yet — she self-corrects fast when shown the coat-ticket framing — but if it recurs a third time, treat
  it as a standing misconception to address head-on rather than a one-off wording slip.
- She's building real instinct for "read the actual output, don't trust the shape of the code" — the bug
  was only found because she was asked to test a case she hadn't tried, not because the code looked wrong.
  Keep pushing "test the case you haven't tried" as a habit, independent of any specific lesson.
- Ready for **Lesson 9: TypeScript from the ground up** — motivated directly by this session's untyped
  `data.results` and the silent-wrong-branch bug, which type-checking would have caught differently (a
  typed `Response.json()` wouldn't have prevented this specific bug, but the broader "trust but verify the
  shape of data" theme carries forward).
