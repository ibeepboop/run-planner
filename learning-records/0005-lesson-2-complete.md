# Lesson 2 complete: callbacks, `.map()` and `.filter()`

Michelle completed Lesson 2 and wrote `scratch/02-lists.js` herself. All five steps done,
including the deliberate break.

**Understood, with evidence:**

- **Callback** — played back correctly, including the "at the appropriate time" clause that most
  people drop. Her wording was tangled, but the tangle is inherent to the concept (two functions,
  both called "function"); resolved by naming the roles *callback* and *caller*. In `GLOSSARY.md`.
- **Predicate** — mechanism correct, scope initially too narrow: she defined it as "the callback
  used with `.filter()`". Widened to any boolean-returning function, with `.some()`, `.every()`
  and `.find()` shown taking the identical predicate. In `GLOSSARY.md`.
- **`.map()` vs `.filter()`** — proved by observation, not assertion: `dates` came back as strings,
  `notRainy` as whole day objects, `days.length` still 5.
- **Chaining order** — filtered before mapping unprompted, so the map callback never saw a
  rejected day.

**The step that did the real work — the deliberate swap.** She mapped to sentences and then tried
to `.filter()` on `d.rain`, got `[]`, and diagnosed it herself: "now I just have an array of
template literals, not a date object with a rain property." She stopped one link short of *why it
was empty rather than an error*, which I supplied: `d.rain` on a string is `undefined`,
`undefined < 20` is `false`, so the predicate said no five times. Two silent steps in a row.

Worth reusing as a teaching pattern: the failure produces **a plausible answer** (an empty array is
what a genuinely rainy week would also produce). That is precisely the class of bug the mission
targets — code that runs, returns something reasonable-looking, and is wrong. Prefer bugs of this
shape over ones that throw.

**Habit resolved:** `const` used throughout, unprompted, for the first time. The `let`-for-functions
nag from [[0004-lesson-1-complete]] can be retired unless it resurfaces.

**Process note:** she wrote the broken line but never logged it — did the experiment without
looking at the result. Sending her back with a sharpening question (what *type* does the map
return? what is `d.rain` on that?) rather than the answer produced the "Ohhhhh okay" moment. The
extra round trip was worth it; do this rather than explaining, wherever there is time.

**Prediction quality is the current growth edge.** Her first prediction was directionally right
("something goes wrong at filtering") but pointed at the wrong cause — the *count* of mapped items
rather than the *type change*. Keep asking for predictions before runs, and keep pushing them from
"something will break" toward "this exact value, for this reason".
