# Third-Party API Integration Security

A generic checklist for connecting a web application to an external service API. No product,
vendor or employer specifics — safe to bring into any workplace conversation, or to paste into a
work assistant as context.

## The architecture, in one diagram

```
Browser  ──►  Your server  ──►  Third-party API
(no secrets)   (holds the        (vendor)
               credential)

Browser  ──✗──────────────────►  Third-party API
              never directly, if a credential is involved
```

Every rule below is a consequence of that one shape.

## 1. Credentials

| Rule | Why |
| --- | --- |
| No API token, key or secret ever reaches the browser. | Anything the browser can send, a user can read — devtools, view-source, or the network tab. There is no way to hide it, because the browser must be able to read it to use it. |
| Secrets live in server-side environment variables or a secret manager, never in source. | Committed secrets persist in Git history after deletion, and spread to every clone and fork. |
| Separate credentials per environment (dev / staging / prod). | A leaked dev credential must not be able to touch production data. |
| Use the least-privileged service account the vendor offers. | The blast radius of a leak is whatever that account can do. |
| Know how to rotate the credential before you need to. | Rotation under incident pressure, undocumented, is how outages get long. |

> [!warning] The build-tool trap
> Front-end build tools inline environment variables into the shipped bundle. In Vite, any
> variable prefixed `VITE_` is **embedded in the JavaScript the browser downloads**. Same for
> `NEXT_PUBLIC_` and `REACT_APP_` in their frameworks.
>
> "It's in a `.env` file" is *not* the same as "it's secret". What matters is which side of the
> network boundary the code runs on.

## 2. The server-side proxy

The server endpoint that fronts the vendor API is often called a **proxy** or a
**backend-for-frontend (BFF)**. It is not a pass-through. It should:

- **Authenticate your own user** — establish who is calling, in your system.
- **Authorise the specific action** — may this user do this, to this record?
- **Validate and narrow the input** — accept only the fields you intend to forward. Never relay a
  client-supplied body wholesale to a vendor.
- **Attach the credential server-side**, after the checks above.
- **Shape the response** — return only what the client needs.

> [!danger] The one that causes real breaches
> If a client can pass an identifier — a ticket ID, an account ID — and your server fetches it
> without checking that the caller owns it, any user can read any record by changing a number.
> This is the most common serious API flaw in production software, and it's a missing `if`
> statement.
>
> Rule: **derive the owner from the session, never from the request body.** Cross-check every
> identifier against it.
> ([OWASP — Broken Object Level Authorization](https://owasp.org/API-Security/editions/2023/en/0xa1-broken-object-level-authorization/))

## 3. Calling out

| Concern | Practice |
| --- | --- |
| Timeouts | Set an explicit timeout on every outbound call. Without one, a slow vendor becomes your outage as connections pile up. |
| Retries | Retry only idempotent or transient failures (network errors, 429, 5xx), with exponential backoff. Never blind-retry a create. |
| Duplicate writes | A retried "create ticket" can create two. Use the vendor's idempotency key if offered; otherwise de-duplicate on your own request identifier. |
| Rate limits | Know the vendor's limit and what they return when you exceed it (usually `429`). Handle it deliberately. |
| Vendor downtime | Decide the user-visible behaviour in advance: queue and retry, or fail with an honest message. Both are defensible; silence is not. |

## 4. Errors and logging

- **Never forward a vendor error body to the browser verbatim.** It can leak internal identifiers,
  field names, account structure, or the existence of records the user shouldn't know about. Log
  the detail server-side; return a generic message plus a support reference.
- **Never log the credential.** Verify that your error handler doesn't dump full request headers —
  this is the most common way tokens end up in log aggregators.
- **Treat customer-submitted content as sensitive.** Free-text fields will contain personal data
  whatever your form says.
- **Log enough to debug an integration:** a correlation ID, the endpoint, the status code, the
  duration. Not the payload.

## 5. Reading status back

Two-way integrations need updates to flow back. Two options, and the trade-off is real:

| | Polling | Webhooks |
| --- | --- | --- |
| **How** | You ask the vendor periodically for current state. | The vendor calls an endpoint you expose when something changes. |
| **Suits** | Low volume; simple; no public endpoint needed; fine when minutes-fresh is acceptable. | High volume or near-real-time needs; avoids wasted calls. |
| **Costs** | Wasted requests, rate-limit pressure, inherent staleness. | A public endpoint you must authenticate and secure; retry/duplicate handling; harder to test locally. |

For a first integration under deadline, **polling on user action** — fetch fresh state when the
customer opens the view — is usually the right call. It's less code, less infrastructure, and no
inbound security surface. Optimise later, if the volume demands it.

> [!warning] If you do accept webhooks
> An inbound webhook endpoint is *public internet*. Verify the signature the vendor provides on
> every request, and treat delivery as at-least-once — the same event will arrive twice
> eventually, so handling must be idempotent.

## 6. Questions to ask your team before building

Asking these early reads as competence, not inexperience. Silence followed by the wrong thing is
the failure mode to avoid.

- Do we already have a pattern for outbound third-party API calls? Can I see one?
- Where do server-side secrets live in this system, and who provisions them?
- Which service account will this use, and what permissions does it have?
- How do we authenticate the end user on the server, and how do I get their identity in a handler?
- What is our convention for handling and surfacing upstream failures?
- Is there a staging/sandbox instance of the vendor system I can develop against?
- Who reviews this, and what does our branch and PR process look like?

## 7. Pre-merge checklist

- [ ] No secret in source, in the client bundle, or in Git history
- [ ] Credential attached server-side only
- [ ] Caller authenticated *and* authorised for the specific record
- [ ] Every identifier cross-checked against the session, not trusted from the body
- [ ] Input validated and narrowed before forwarding
- [ ] Timeout set on outbound calls
- [ ] Vendor errors logged server-side, generic message returned
- [ ] Headers/tokens excluded from logs
- [ ] Behaviour defined for vendor-down and rate-limited
- [ ] Duplicate-write path considered

## Sources

- [OWASP API Security Top 10 (2023)](https://owasp.org/API-Security/editions/2023/en/0x11-t10/) — the canonical list of what actually goes wrong with APIs.
- [OWASP — Secrets Management Cheat Sheet](https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html)
- [The Twelve-Factor App — Config](https://12factor.net/config) — why configuration and secrets belong in the environment.
- [MDN — CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS) — worth reading when the browser blocks a direct vendor call, which is also a hint you should be going via your server.

---

Related: [[Git Commits And Branches]] · [[Callbacks Map And Filter]]

*Source: Run Planner course, `reference/api-integration-security.html`. Generic by design —
contains nothing employer-specific.*
