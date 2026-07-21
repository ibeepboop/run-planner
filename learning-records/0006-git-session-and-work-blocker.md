# Lesson 3 in progress: Git, and the real work blocker surfaces

## The work blocker, finally disclosed

After three sessions of asking, Michelle named it. See the Track A section of `NOTES.md` for the
full detail. Summary: **Atlassian JSM integration into a customer-facing portal**, ~10 days from
21 July 2026 (so due around **31 July 2026**), and she has never done the integration, the stack,
*or* professional GitHub before.

Scope is two features, not one, and the second is easy to under-scope:

1. Customer submits a ticket via their UI → lands in the right JSM space (a **write**).
2. Customer sees updates on their ticket in a portal they must also build (a **read**, plus
   refresh strategy, plus deciding what a customer may see).

She chose Git first over API/async, because back-end decisions were still open and she was working
on the front end meanwhile. Correct call — Git is a hard blocker with a low ceiling.

**Constraint that shapes everything from here:** work code cannot be shared with this account, and
she correctly refused to. Teach generic patterns; she applies them. She asked for takeaway assets
she can carry to her enterprise assistant — that request is worth honouring proactively, it's a
good instinct and it routes around the constraint cleanly. First one written:
`reference/api-integration-security.html`.

## Lesson 3 progress

Delivered `lessons/0003-git-commits-and-branches.html`. She completed steps 1–5: two commits made,
clean tree, `main`, no remote. **Steps 6–7 (create a branch, commit on it, switch back, predict)
are not done.** That's the resume point.

Her commit messages used a `chore:` prefix unprompted — she has picked up Conventional Commits
somewhere. Worth naming and either endorsing or checking against her team's convention; don't
assume it's cargo-culted.

## Questions she asked, unprompted — all good ones

Signal worth noting: every question this session was about *why*, not *how*. That's the
recognition-to-understanding gap closing.

- **"Does creating a branch automatically commit?"** No. Branch = pointer at the current commit.
  The confusion is reasonable: `git log` on a fresh branch shows the full inherited history, which
  looks pre-loaded. Explained with before/after pointer diagrams.
- **"How do I undo `git add .`?"** Tested it rather than answering from memory, which was correct:
  `git restore --staged .` **fails in a repo with no commits** (`fatal: could not resolve 'HEAD'`)
  because there's no HEAD to restore from. The answer for her state was `git rm -r --cached .`.
  Verified both, plus that files survive on disk.
- **"`git switch -c` vs `git checkout -b`?"** Identical here. Taught the 2.23 split (checkout →
  switch + restore), that `switch` cannot destroy uncommitted work, and that `checkout` is not
  deprecated. Rule given: **read `checkout`, write `switch`.** Also confirmed the old
  "EXPERIMENTAL" notice is gone in her Git 2.55 rather than repeating stale advice.

## `.gitignore` — a correction worth remembering

She'd ignored *all* the course material and justified it as a production habit: "pull out anything
and everything that's not needed."

The instinct (be deliberate about repo contents) is right; the **criterion was wrong**, and
transferred to work it would have her gitignoring READMEs and design docs. Reframed to: *does this
belong to the project, or to my machine and my build?* Four ignore categories — generated,
dependencies, secrets, machine-local. Docs, tests and decision records are committed.

The argument that landed: her own `learning-records/` **are ADRs**, and mature repos commit those.
Also used `.vscode/*` + `!.vscode/extensions.json` as the in-file illustration of the principle.

She adopted the split: `/scratch` ignored, everything else committed. Good outcome.

**Her reasoning on `node_modules` was independently correct and unprompted** — redundant given the
lockfile, and too large. She hadn't got the third reason (platform-specific compiled binaries, so
the folder is *wrong* for whoever clones next). Added the `package.json` ranges vs
`package-lock.json` exact-pins distinction, and "commit the recipe, not the meal".

**Security gap flagged for work:** `.env` matches that filename only — `.env.production` was not
ignored. Recommended `.env*` + `!.env.example`. Also taught the big one: **`.gitignore` does
nothing to already-tracked files**, and a committed secret means *rotate the credential*, not
"delete it in the next commit". Directly relevant to the JSM token.

## Process notes

- She interrupted an `AskUserQuestion` and a `Start-Process` re-open. **Don't re-open files she
  already has, and prefer a short prose question over the question tool** — she answers free-form
  fine and the tool added friction.
- Obsidian: she wants a **staging folder only** (`obsidian/`), manual copy into the vault. The
  `obsidian-vault` skill is misconfigured (see `NOTES.md`); she deliberately deferred fixing it.
