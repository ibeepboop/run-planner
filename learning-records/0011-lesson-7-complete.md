# Lesson 7 complete — async / `await` / `fetch` (happy path)

Michelle can write an `async` function that `fetch`es Open-Meteo, `await`s the Response, `await`s
`.json()`, and reads `data.results` — and, more importantly, can explain *why* the pattern is shaped
that way. `Promise` / `async` / `await` now in `GLOSSARY.md`. Error handling was deliberately held for
Lesson 8; this record covers the happy path only.

**Evidence (strong, mostly unaided):** She ran `getWeather.js`, then did the deliberate remove-an-
`await` break herself and reasoned about the `TypeError` before I responded. Playback of "what is a
Promise / what `await` does / why two awaits" was solid. The hard idea landed in her own words: *without
`await`, the Promise itself becomes the value in the variable.*

**Two corrections applied (both her recurring precision theme — she takes them immediately):**
1. She first said the un-awaited result was "empty." Corrected to `undefined`, and reframed from a
   *timing race* ("body didn't arrive in time") to a *category error* ("you kept the ticket, not the
   coat") — **deterministic, every time, independent of network speed.** This matters: it rules out the
   wrong debugging instinct ("add a delay"). She now holds the deterministic model.
2. She called the two awaits "independent." Corrected to **sequential and dependent** — the Response
   must exist before its body can be read. Flagged `Promise.all` as where "independent" will properly
   apply, so the word is reserved correctly for later.

**Implications for next sessions:**
- The mission's core skill is visibly working: she reasons about broken async code unprompted and
  corrects her own wording toward precision. Keep leaning on deliberate-break exercises — seeing the
  failure mode is what's building the evaluation instinct.
- She's primed for **Lesson 8 (error handling)**: the deterministic-vs-race distinction she just locked
  is the same clear-headedness needed for "a 404 is a resolved Promise, not a rejected one." Build L8
  on the `zzzzz` empty-200 she observed + today's forgotten-`await` tell.
- `Promise.all` / parallel awaits is now a promised ([[GLOSSARY.md]]) future thread — don't forget to
  pay it off when genuinely independent requests appear (forecast + geocoding, or multiple parks).
