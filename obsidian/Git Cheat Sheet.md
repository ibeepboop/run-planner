# Git Cheat Sheet

> [!info] Living document
> This is **mine to grow** — like [[Glossary]], not a course port. There is no HTML original.
> Add commands, gotchas and corrections as I learn them. Last touched: 2026-07-21 (Lesson 3).

## The one-line mental model

Git is a sequence of **snapshots I deliberately took**, each with a message. It saves nothing
until I tell it to. A file moves through three places:

```
working directory  →  staging area  →  repository
(my edits)            (chosen for       (committed
                       the next          history)
                       commit)
```

## Everyday commands

| Command | What it does |
| --- | --- |
| `git status` | What's changed / staged. Read-only — **can never break anything**. Run it constantly. |
| `git add <file>` | Stage one file for the next commit. |
| `git add .` | Stage everything changed, from here down. |
| `git commit -m "msg"` | Snapshot **what's staged** (not what's merely edited). |
| `git log --oneline` | History, one commit per line. |
| `git branch` | List branches; `*` marks where I am. |
| `git switch -c <name>` | Create a branch **and** move onto it. |
| `git switch <name>` | Move to an existing branch. |
| `git merge <name>` | Pull another branch's commits into the one I'm on. **Local — no network.** |

## switch vs checkout

Same job here; `git switch` is the newer, safer verb (Git 2.23 split old `checkout` into
`switch` + `restore`). **Rule: read `checkout` in other people's docs, write `switch` myself.**
`switch` refuses to throw away uncommitted work; `checkout` will. `checkout` is *not* deprecated,
just overloaded.

## Undoing things

| Situation | Command |
| --- | --- |
| Unstage a file (repo **has** commits) | `git restore --staged <file>` |
| Unstage everything in a repo with **no commits yet** | `git rm -r --cached .` |

> [!warning] The no-HEAD trap
> `git restore --staged` **fails in a repo with zero commits** (`fatal: could not resolve 'HEAD'`)
> — there's no committed state to restore *to*. In that state use `git rm -r --cached` instead.
> Either way, **the files stay on disk** — only the staging changes.

## Remotes and pushing

A **remote** is a full copy of the repo on another machine (e.g. GitHub). The first is nicknamed
`origin`. Get a local repo onto GitHub:

| Command | What it does |
| --- | --- |
| `git remote add origin <url>` | Register the GitHub URL under the name `origin`. |
| `git remote -v` | List remotes — check it stuck. |
| `git push -u origin main` | Push `main`; `-u` records the upstream so future `push`/`pull` need no args. |
| `git push` | After `-u` is set, pushes the current branch to its tracked remote branch. |
| `git pull` | Fetch the remote's new commits for the current branch and merge them in. |

> [!tip] Push is per-branch
> `git push origin main` sends **only `main`**, and **only the commits origin is missing** — not
> the whole repo, not other branches. Proof: after pushing `main`, a `practice-branch` commit
> stayed local and GitHub showed fewer commits. `commit` = snapshot locally; `push` = send
> committed snapshots for one branch. Two separate acts.

> [!danger] First-push traps
> 1. **Empty repo only.** If the GitHub repo was created with a README/licence/`.gitignore`, it has
>    a commit I don't, and my push is **rejected** ("updates were rejected… remote contains work you
>    do not have"). Create the GitHub repo empty when pushing an existing local repo.
> 2. **No password auth.** GitHub killed Git password auth in 2021. On Windows, Git Credential
>    Manager pops a browser sign-in on first push. Alternatives: Personal Access Token (paste as the
>    password), SSH key, or `gh auth login`. ([GitHub auth docs](https://docs.github.com/en/authentication))

## Local vs remote — the axis I keep conflating

Two **independent** things. Don't attribute one to the other.

| Axis | Verb | What moves | Where |
| --- | --- | --- | --- |
| **Branch / merge** | `switch`, `merge` | commits between branches | my machine only |
| **Remote sync** | `push`, `pull` | commits between my machine and GitHub | across the network |

> [!tip] The line I got wrong
> "A branch commit won't show on `main` because I haven't pushed it up." **Wrong reason.** It won't
> show on `main` because it hasn't been **merged** into main — a purely local thing. GitHub isn't
> involved. `merge` needs no remote; `push`/`pull`/pull-requests are a *separate* collaboration
> layer on top. (Learning: [[Git Commits And Branches]].)

## Commit messages

- **Imperative mood**: "Add pace calc", not "Added" — completes *"Applying this commit will…"*.
- One coherent change per commit, not "end of day dump."
- A message is read by a future person deciding whether *this* commit broke something.

### Conventional Commits (my team uses this)

Format: `type(optional scope): description`

```
feat: add ticket submission form
fix(portal): stop double-submit on slow network
docs: update README setup steps
chore: bump dependencies
```

| type | for |
| --- | --- |
| `feat` | a new feature (bumps the *minor* version under semver) |
| `fix` | a bug fix (bumps the *patch* version) |
| `docs` | documentation only |
| `refactor` | code change that neither fixes a bug nor adds a feature |
| `test` | adding or fixing tests |
| `chore` | build process, tooling, deps — no production code change |
| `ci` | CI/CD config |

> [!note] Standard types are a fixed-ish set
> `feat` and `fix` are the two everyone agrees on and the two that drive version numbers.
> `lesson:` (which I've been using in this course repo) is a **custom** type — fine here, but at
> work use whatever types the team's repo already uses. Check an existing `git log` to see them.

## .gitignore

Ignore things that belong to **my machine or my build**, not to the **project**. Four categories:

| Category | Examples |
| --- | --- |
| Generated / build output | `dist/`, compiled files |
| Dependencies | `node_modules/` (redundant given the lockfile, huge, platform-specific binaries) |
| Secrets | `.env*` — but keep `!.env.example` |
| Machine-local | editor settings, OS cruft (`.DS_Store`) |

Commit the rest: **docs, tests, decision records (ADRs) all belong to the project.**

> [!danger] Two gotchas that bite at work
> 1. `.env` matches **that filename only** — `.env.production` is *not* covered. Use `.env*` plus
>    `!.env.example` to whitelist the template.
> 2. **`.gitignore` does nothing to already-tracked files.** If a secret is already committed,
>    ignoring it later does *not* remove it from history. The fix is **rotate the credential**,
>    not "delete it next commit." (See [[Third-Party API Integration Security]].)

## Sources

- [Pro Git book](https://git-scm.com/book/en/v2) — free, written by the Git maintainers. Ch. 2.2
  (Recording Changes) and Ch. 3 (Branching) are the clearest explanations there are.
- [Conventional Commits spec](https://www.conventionalcommits.org/)

---

Related: [[Git Commits And Branches]] · [[Glossary]] · [[Third-Party API Integration Security]]
