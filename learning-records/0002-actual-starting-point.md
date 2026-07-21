# Actual starting point, measured: modern JS syntax is the floor

Supersedes [[0001-starting-point]], which was guessed rather than measured and pitched the course
roughly five levels too high.

Calibrated in two passes. The first pass (escalating code snippets, "point at the first
uncomfortable one") produced *async/await* as the answer — but Michelle then read the resulting
record and corrected it herself, which is the more reliable signal:

> "I think I actually need more practice with modern JS syntax because the Perl I write is very
> different. For example, I don't really know what an arrow function is."

**Known:**

- `const` vs `let` — understands the distinction (unchanging vs reassignable).
- Template literals — knows the *purpose* (interpolating variables into strings) and produced
  `${sample}` unprompted, which is correct syntax. Needs only the backtick delimiter confirmed.
- Perl, professionally. This is the asset to teach *through*, not around.

**Gaps, in teaching order:**

- **Arrow functions** — no working model. Bridge: Perl's anonymous `sub { ... }` / coderefs.
- **`.map()`** — guessed it relates to key/value pairs (i.e. thinking of a hash/map data
  structure). Bridge: Perl *has* `map` and it is nearly identical — `map { $_ * 2 } @nums`
  vs `nums.map(n => n * 2)`. Likewise `grep` → `.filter()`.
- **Destructuring** — no working model. Strong bridge: Perl's `my ($x, $y) = @_;` **is**
  destructuring. She has written it constantly without knowing the JS name for it.
- **Tooling** — npm, `package.json`, Vite, what `npm run dev` does.
- **ES modules** — `import`/`export`. Translation job from Perl's `use`/`require`.
- **async/await, promises** — genuinely new; Perl offers no everyday equivalent.
- **TypeScript** — wants fundamentals and syntax from scratch, plus motivating "why types at all".
- **Vue components** — wants the *concept* of a component, not just Vue's syntax for one.

**Implications:** The original Lesson 1 stacked modules + async + TS types + Vue reactivity into
one document and was correctly rejected as too technical. It is renumbered to Lesson 7. Six
foundation lessons now precede it, and JS syntax — not tooling, not async — is Lesson 1.

**Two meta-lessons for future sessions:**

1. *Do not infer a starting point from professional background.* The "comfortable with types"
   inference from a Perl background was backwards — Perl is dynamically typed.
2. *Teach through Perl, not around it.* Every JS concept that has a Perl analogue should lead
   with that analogue. This converts "new concept" into "new syntax for a thing you already do",
   which is a far smaller ask. Applies to `map`, `grep`, list assignment, anonymous subs, string
   interpolation, and `use`/`require`.
