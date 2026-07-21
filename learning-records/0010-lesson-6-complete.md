# Lesson 6 complete: what an API call actually is

## Status

Lesson 6 **closed** (conceptually). `lessons/0006-what-an-api-call-is.html` delivered; playback taken
and **strong, unaided**; `API call` added to `GLOSSARY.md`. This is the first lesson of Track A / JSM
proper — pure vocabulary, no `fetch` (that's L7). The one-concept + one-playback rules held.

## The playback — excellent, and mostly precise

She gave the two-message model back cleanly and in correct vocabulary, unaided:

- API call = send/receive over the network **in a way both parties agree on — "the contract"** (she
  reached for *contract* herself; that's the real industry term — affirmed, and sharpened to two
  layers: HTTP is the shared envelope format, the API's contract is the finer print on top).
- Request = client → server, response = server → client. Both = **start line / headers / body**, with
  different contents per message. Named the request start line (method + endpoint) and response start
  line (status code) correctly.
- **Read the status code first**; `4xx` = "me/client" problem, `5xx` = "them/server" problem. Verbatim
  the spine of the status section.
- Token location: nailed in passing — it's in a **header** (`Authorization`), not the body. The fact
  the whole security reference hangs off, already automatic for her.

## Three small refinements given (none conceptual)

1. `UPDATE` slip — she wrote "POST, UPDATE, DELETE"; the HTTP verb is `PUT`/`PATCH`, not `UPDATE`
   (`UPDATE` is SQL). She'd listed GET/POST/PUT/DELETE correctly earlier, so a slip, not a gap.
2. `GET` carries **no request body** — she'd tied body→POST/PUT/DELETE right; the flip side is a GET
   only asks, inputs ride in the URL (`?name=Boulder`).
3. Response body isn't always "what you changed" — she framed it POST-first; for a `GET` nothing is
   changed and the response body is just the data you asked to read. So response body = *the result*.

## She caught a real ambiguity in my feedback — the mission working again

My refinements (2) and (3) read as **contradictory** to her: "first you say GET has no body, then you
say the response body is the data I asked to read." She was right — I'd written "body" bare both times
and let her supply the missing word. **There are two bodies: request body vs response body.** GET has
no *request* body but gets a full *response* body. Resolved with a per-method table. This is *exactly*
the "name the owner of a shared term" lesson from `NOTES.md` (the `.map()` parentheses episode) — I
committed the same slip and she caught it. **Fix propagated:** the glossary `API call` entry's
anatomy-map now says "request body" / "response body" explicitly. Name this pattern every time: she
reads critically and finds real imprecision — the core mission outcome, third+ time running.

## Gotchas planted for L7 (status of each)

- **404 is a successful round trip** — taught in the lesson; sets up why `fetch` doesn't reject on 404.
- **200-can-be-empty** (Open-Meteo drops `results` on no-match) — taught; the verified API fact.
- Both are in the glossary "not to be confused with" note now.

## Open thread — hands-on task NOT reported back

She said "done with Lesson 6" and gave the playback, but **never reported the `curl.exe -i` observations**
(first-line status of the Boulder call; the `zzzzz` empty-200). Session ran to a timeout + her question,
then handoff. So the two gotchas landed *as concepts* (playback + glossary confirm it) but were **not
confirmed by her own observation** — and observation-driven confirmation is the thing NOTES says keeps
paying off. Low-stakes to skip, but if there's a natural moment early in L7, have her actually run the
`zzzzz` call and *see* the `200` with no `results` — it's the live hinge for `fetch`'s 404 behaviour.

## Next

**Lesson 7 — `fetch` / `async` / `await` / `try`/`catch` (NOT YET WRITTEN).** The JS that sends the
request she just mapped. Per the session-4 ordering decision, async JS is the real deferred prerequisite
here — promises/`async`/`await` arrive *with* `fetch`, motivated by the round trip taking time. The 404
gotcha is the hinge: `fetch` only rejects on "no response," treats a 404 as success (MDN confirms).
Open-Meteo stays the safe practice ground. Consider opening L7 by cashing in the unreported curl
observation above. Held-back `0007-your-first-typed-fetch.html` (arc L8) still sits downstream — do not
renumber yet.
