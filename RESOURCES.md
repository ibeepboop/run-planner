# Vue + TypeScript + External APIs — Resources

## Knowledge

- [Vue 3 Docs — TypeScript with Composition API](https://vuejs.org/guide/typescript/composition-api.html)
  The official guide to typing `ref`, `computed`, props and emits. Use for: any "how do I type
  this Vue thing" question. Highest-trust source for Vue itself.
- [Vue 3 Docs — Reactivity Fundamentals](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)
  Explains `ref()`, `.value`, and why templates auto-unwrap. Use for: the mental model of what
  makes a value reactive.
- [Open-Meteo — Forecast API docs](https://open-meteo.com/en/docs)
  Full list of `daily=` and `hourly=` variables, units, and response structure. Use for: picking
  which weather variables to request. Free, no key for non-commercial use.
- [Open-Meteo — Geocoding API docs](https://open-meteo.com/en/docs/geocoding-api)
  Place search: `name`, `count`, `language`, `countryCode`. Use for: turning a typed place name
  into latitude/longitude.
- [MDN — Using the Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
  Definitive reference on `fetch`, response handling, and why a 404 does *not* reject the promise.
  Use for: error-handling design.
- [MDN — AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)
  Cancelling in-flight requests. Use for: Lesson 2, when debounced searches start racing.
- [MDN — Intl.DateTimeFormat](https://developer.mozilla.org/en-US/docs/Web/API/Intl/DateTimeFormat)
  Locale-aware date formatting with no library. Use for: Lesson 3, rendering forecast days.
- [Vitest — Getting Started](https://vitest.dev/guide/)
  Vite-native test runner. Use for: Lesson 4, testing the hike-scoring function.
- [NPS API — developer.nps.gov](https://www.nps.gov/subjects/developer/api-documentation.htm)
  US National Parks data. Free key, sent as an `X-Api-Key` header. Use for: Lesson 5.

## Wisdom (Communities)

- [Vue Land Discord](https://chat.vuejs.org/)
  The semi-official Vue community. Very high signal, core-team members present. Use for: "is this
  idiomatic Vue?" questions that docs can't settle.
- [r/vuejs](https://reddit.com/r/vuejs)
  Use for: code review requests and architecture opinions on small apps.
- [TypeScript Community Discord](https://discord.gg/typescript)
  Use for: gnarly typing questions, especially around narrowing and generics.

## Gaps

- No trusted resource yet for **testing Vue components** (as opposed to pure functions).
  Will need Vue Test Utils / Testing Library guidance around Lesson 4–5.
