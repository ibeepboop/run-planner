# Lesson 5 complete: pull requests

## Status

Lesson 5 **closed**. She ran the whole team ship-it loop end to end, by herself:
`git push -u origin practice-branch` → opened PR **#1** on GitHub → squash-and-merge → `git switch main`
+ `git pull`. `main` now carries the squashed commit `219426d "lesson: ship a practice commit, push,
and PR, then squash and merge, then pull locally (#1)"`. Then she deleted `practice-branch` locally.
`pull request` played back and added to `GLOSSARY.md` + the cheat sheet (new "Pull requests" section).

## Both playbacks passed — the spine landed

- **Push-before-merge (the whole point of the lesson):** *nailed, unaided.* "The merge happens on GH,
  so you need to push your local code up to GH so it can be reviewed and merged there. After it's been
  reviewed and merged, you pull the merged version back with `git pull`." That is the spine verbatim.
  The local-vs-remote conflation that ran through Lessons 3–4 is now **resolved** — she can state
  *why* the order is forced, not just follow it.
- **Pull request:** good, review-centred ("a way to check branch code — human, Copilot, or CI/CD —
  before it's allowed to merge into main"). Refinement given: a PR is fundamentally the *proposal*;
  review is what it *enables*, and whether a review/CI check is *required* is a **team branch-protection
  policy**, not intrinsic to every PR (on a solo repo she merged her own PR with no gate). She'll meet
  real rules at work; flagged so it won't surprise her.

## My error she caught — the `-d` / `-D` claim (this is the mission working)

The lesson's squash gotcha claimed `git branch -d practice-branch` would **refuse** (because squash
makes a new commit `main` can't recognise) and that she'd need `-D`. She ran `-d` and it **succeeded**,
pasted the warning, and flagged the mismatch:

```
warning: deleting branch 'practice-branch' that has been merged to
         'refs/remotes/origin/practice-branch', but not yet merged to HEAD
Deleted branch practice-branch (was ac24fbc).
```

**Root cause of my error:** `git branch -d` checks *"merged into the branch's **upstream**?"* first, and
only falls back to `main`/HEAD when there's no upstream. She'd pushed with `-u`, so upstream
`origin/practice-branch` still held the commits (the remote-tracking ref survives until a
`fetch --prune`) → Git saw them as safe → deleted. My gotcha had described the *unpushed / pruned* case
and misapplied it to her pushed branch. `-D` is only needed when no copy survives.

Fixed in the lesson (both the gotcha box and the task's optional step) and captured in the glossary +
cheat sheet. Framed for her as: *the remote-tracking branch is a real object Git reasons about* — the
same local-vs-remote theme paying off a third time, and again resolved **by what she observed**, not by
a definition. She continues to read the workspace critically and catch real mistakes; this is exactly
the "read AI output and say why it's wrong" outcome the mission targets.

## Pace / format

Held to one new playback term (`pull request`). Squash-vs-merge-commit-vs-rebase delivered as a
trade-off table (her preferred which-when-why format), not a second jargon drill — kept the
one-concept-per-lesson rule intact.

## Next

**Last pure-Git blocker cleared.** Track A now turns to the JSM integration proper, starting with
**what an API call actually is** — request, response, status codes, headers, auth — then
`fetch`/`async`/`await` and error handling, then why the JSM token must live server-side. The held-back
`0007-your-first-typed-fetch.html` (Lesson 8 in the arc) sits downstream of these. Run Planner's
Open-Meteo calls are the safe practice ground; the reference doc `api-integration-security.html` already
covers the *why* of server-side secrets — she needs the *how*.
