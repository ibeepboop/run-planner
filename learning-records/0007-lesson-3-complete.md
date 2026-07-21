# Lesson 3 complete: Git commits and branches, and the local-vs-remote split

## Status

Lesson 3 is **closed**. Between sessions she did all the mechanics herself — created
`practice-branch`, edited `scratch/02-lists.js`, committed twice, and (unprompted) **wrote her
prediction as an in-file comment before switching branches**. Repo: 5 commits, `main` +
`practice-branch`, no remote. `practice-branch` is deliberately **left unmerged** — see below.

## The teaching beat that mattered

Her written prediction was *correct in conclusion* ("the line won't be on `main`") but conflated
two independent axes in its reasoning: she said it was because she "hadn't pushed up and merged,
then pulled down." Untangled into:

- **Branch / merge** — moves commits between branches, **local**, no network.
- **Push / pull** — moves commits between her machine and GitHub, across the network.

The line isn't on `main` for one reason only: it hasn't been **merged** in. GitHub is irrelevant —
there's no remote at all. By the end she stated the correct causal model herself ("after
`git merge`, the code appears on main"), so the misconception is resolved conceptually; the
empirical local-merge proof became unnecessary.

`merge` played back and added to `GLOSSARY.md`. Correction filed during playback: she described
merge as combining "back **down** into main" — over-specified. Merge targets **whatever branch
you're currently on**, not main specifically, and there's no vertical direction.

## The decision worth remembering

Offered a bare `git merge practice-branch` as proof-of-concept. **She declined, and her reason was
better than the exercise:** she wants to practise her team's *actual* workflow (branch → PR →
squash and merge), not drill a bare local merge she won't use at work. That is exactly the Track A
priority — learn the professional workflow, not a toy version. Respected immediately; did not push.

Consequence: `practice-branch` stays unmerged and becomes the **Lesson 4 vehicle** — she'll open a
real PR against it. She also literally can't do the PR lifecycle yet, because there's no remote;
creating one is Lesson 4, step one. Clean segue.

Nuance surfaced for Lesson 4: in a squash-and-merge PR flow the merge happens **on GitHub**, so
`push` genuinely does come first. Her original "push up" instinct wasn't wrong — it was describing
the team flow, not Git's primitive. Lesson 4's spine is exactly *Git's local `merge` vs GitHub's
PR-button merge*.

## Conventional Commits — confirmed, not cargo-culted

Her team **does** use Conventional Commits; she learned it this week without knowing the name. So:
endorse, don't unpick. Flagged that `lesson:` (her prefix in this course repo) is a **custom**
type, not a standard one (`feat`/`fix`/`docs`/`chore`/…), and that at work she should match the
types already in the team's `git log`.

## Artifacts produced this session

- **`obsidian/Git Cheat Sheet.md`** — a NEW living Markdown doc (no HTML twin), iterated directly
  like `GLOSSARY.md`, at her request. Seeded with the whole Git run + a Conventional Commits
  section. This is a new *kind* of artifact for this workspace: a native living reference, distinct
  from the HTML-port reference docs.
- `GLOSSARY.md` gains `merge`.

## Next

Lesson 4 — remotes, `push`, and pull requests. She has **never used professional GitHub** (no
PR/review workflow). Needs: create a GitHub remote for run-planner, push `main`, push
`practice-branch`, open a PR, and walk the squash-and-merge lifecycle her team uses. This is the
hard work blocker for the JSM integration.
