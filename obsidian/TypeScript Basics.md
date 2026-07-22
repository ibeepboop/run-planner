# TypeScript Basics

Annotations and `interface` — the syntax from Run Planner Lesson 9, kept short for quick lookup.
Verified live on Node v24, 22 July 2026.

## Annotating a function

```ts
function double(n: number): number {
  return n * 2;
}
```

| Piece | Meaning |
| --- | --- |
| `n: number` | Parameter type — what you're allowed to pass in. |
| `: number` after `)` | Return type — what the function promises to give back. |

Return type can usually be left off and inferred from the `return` statement, but writing it
explicitly checks the body even before it's finished.

## `interface` — naming an object's shape

```ts
interface Point {
  x: number;
  y: number;
}

function distanceFromOrigin(p: Point): number {
  return Math.sqrt(p.x ** 2 + p.y ** 2);
}
```

Write `p.z` anywhere `p` is typed `Point`, and the checker says `Property 'z' does not exist on
type 'Point'` — without running anything.

### Calling a function typed with an interface

An interface only describes a shape — you still build a real value to pass in, either inline or
as a variable:

```ts
distanceFromOrigin({ x: 3, y: 4 });

const origin: Point = { x: 0, y: 0 };
distanceFromOrigin(origin);
```

Every **required** (non-`?`) property must be present, or the checker flags the object literal
itself — not just typo'd property names inside the function, missing properties at the call site
too.

### Optional properties (`?`)

```ts
interface GeocodingResponse {
  results?: GeocodingResult[];   // absent when nothing matches
}
```

Marking a property optional means the checker will **not** let you read anything off it —
`.length`, an index, any property — until you've narrowed it with a check:

```ts
if (!data.results) {
  return;               // narrowed: TS now knows data.results exists below this point
}
data.results.length;    // fine
```

> [!warning] Types are a claim, not a guarantee
> `response.json()` returns `any` — TypeScript has no way to check what a server actually sent.
> Asserting it into an interface is a promise you're making, not something verified against the
> network. A wrong interface compiles exactly as cleanly as a right one.

## The gotcha: Node runs `.ts`, but doesn't check it

Node v24+ can execute a `.ts` file directly — but it only **strips** the annotations before
running, it never compares your code against them. The type checker lives somewhere else: your
editor's TypeScript language service (VS Code ships one, no install needed), or `tsc` run
separately.

```ts
function double(n: number): number {
  return n * 2;
}
console.log(double("5"));   // node yourfile.ts → prints 10, no complaint
```

Confirmed live both ways: a deliberate typo'd property access shows a red squiggle in the editor
and still runs to completion under plain `node`.

> [!warning] `+` is the odd one out
> Once types are erased, ordinary JS coercion takes over — and which rule applies depends on the
> **operator**. `+` concatenates if either side is a string: `"5" + 3` is `"53"`, not `8`. Every
> other arithmetic operator (`*`, `-`, `/`) has no string meaning, so it coerces both sides to
> numbers instead: `"5" * 2` is `10`.

## Sources

- [TypeScript Handbook — Everyday Types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)

---

Related: [[Error Handling Three Ways]] · [[Callbacks Map And Filter]]

*Source: Run Planner course, `reference/typescript-basics.html`.*
