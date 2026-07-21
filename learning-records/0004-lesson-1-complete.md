# Lesson 1 complete: arrow functions and template literals understood

Michelle completed Lesson 1 and wrote `scratch/01-functions.js` herself. All objectives met:
three equivalent forms of `double`, an expression evaluated inside `${ }`, and a deliberate
braces-without-`return` bug that she ran and observed printing `undefined`.

**Understood, with evidence (playback in her own words):**

- **Arrow function** — anonymous function; long form with braces requires an explicit `return`
  or you get `undefined`; short form without braces returns implicitly. Now in
  `C:\Users\Michelle\.claude\GLOSSARY.md`.
- **`map`** — takes an array, applies an operation, returns a *new* array with the original left
  intact. Glossed before the lesson, in her own words.
- **Template literals** — knew the purpose and `${ }` syntax already; only needed the backtick
  delimiter and the fact that JS quotes never interpolate.

**Misconception found and corrected:** she initially said an arrow function "does the function and
assigns the output to a variable in one fell swoop". The variable holds the *function*, not its
result. Corrected by running `console.log(double)` and seeing `[Function: double]` printed next to
`double(5)` returning `10`. She restated it correctly on the second attempt.

This matters more than a stray detail: functions-as-values is exactly what makes `.map()`
possible — you hand `.map()` the function and it does the calling. Lesson 2 depends on it, so it
was worth the extra round trip.

**Habit to keep correcting:** she declares functions with `let` where `const` is correct. Flagged
twice; she still wrote `let` in her playback. Not a misunderstanding — she can define both
correctly — just muscle memory. Expect to flag it again; consider adding ESLint around Lesson 5
so a tool nags instead of me.
