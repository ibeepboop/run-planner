# Lesson 4 complete: remotes and push

## Status

Lesson 4 **closed**. She created an empty GitHub repo, `git remote add origin`, and
`git push -u origin main` — first push succeeded, auth and all (Git Credential Manager on Windows
handled it silently). `main`'s three commits are now on GitHub. `remote` and `push` played back and
added to `GLOSSARY.md` + the cheat sheet.

`practice-branch` remains **local and unmerged** — deliberately, it's the Lesson 5 PR vehicle.

## The conflation, resolved by observation

Same local-vs-remote confusion as Lesson 3, surfaced twice more and resolved by what she *saw*:

1. Before pushing she asked, "I haven't merged practice-branch into main yet — do I still run
   `git push -u origin main`?" Answer: yes; push is per-branch and merge status is irrelevant.
   Reinforced that merging locally first would destroy the Lesson 5 PR exercise.
2. After pushing she reported "I only see three commits on GitHub." That's **correct** — main has
   three; practice-branch's two extra commits stayed local. This became the sharpest possible proof
   that **push is per-branch**: she pushed `main`, so GitHub shows main's three, and the branch she
   didn't push isn't there.

Her playbacks were good, with one refinement she'd just disproved herself: she said "push makes the
remote look like my local one." It doesn't — it makes the *pushed branch* match. Corrected against
her own observation (practice-branch still absent). Also tightened "push sends **all** commits on
the current branch" → "the commits the remote is **missing**, for the branch you **name**."

## My error she caught

Lesson 4's task text said "confirm all **five** commits made the trip." Wrong — main has three; the
five-total includes practice-branch. She noticed the mismatch instead of assuming she'd erred —
exactly the critical-reading habit the mission targets. Fixed the lesson HTML to say three, and to
frame the two missing commits as "the lesson working, not a bug."

## Pace decision

Kept Lesson 4 to **remotes + push only** (one new concept: the remote). The PR/review/
squash-and-merge lifecycle is Lesson 5, honoring her repeated "one concept per lesson, split when
in doubt" correction. She agreed with the split.

## Next

Lesson 5 — **pull requests**. `git push -u origin practice-branch` (push the branch unmerged) →
open a PR on GitHub → the review view → **squash-and-merge** on GitHub → `git pull` the merged main
back down locally. This is her team's actual workflow and the last pure-Git blocker before the JSM
integration. The spine: Git's local `merge` vs GitHub's PR-button merge (which runs on GitHub, so
push comes first — resolving her original "push up" instinct for good).
