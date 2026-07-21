# obsidian/

Staging area for notes destined for Michelle's Obsidian vault. **Manual transfer for now** — copy
the `.md` files across by hand.

Nothing lands here automatically. Documents are ported on request only: say which one, and it gets
a Markdown twin in this folder.

## Conventions used

Written to match the vault conventions in the `obsidian-vault` skill:

- **Title Case** filenames, flat — no subfolders
- `[[wikilinks]]` to related notes at the bottom
- Obsidian callout syntax (`> [!warning]`) in place of the HTML lesson callouts

Wikilinks may point at notes that don't exist yet. That's fine in Obsidian — an unresolved link is
a placeholder marking a note worth writing.

## Deferred — revisit when there's time

The `obsidian-vault` skill is **misconfigured on this machine**. It points at
`/mnt/d/Obsidian Vault/AI Research/`, a WSL path on a `D:` drive that doesn't exist here. Every
command in it silently returns nothing.

The real vault is:

```
C:\Users\Michelle\Documents\Obsidian\Michelle's Vault
```

It currently holds only Obsidian's two default notes, so the skill's "Index notes" convention has
nothing to index yet.

Two things to decide later:

1. Fix the skill's path, and drop the `AI Research` subfolder from the convention (the real vault
   is flat and empty).
2. Whether to write into the vault directly, or keep this staging-and-manual-copy step. Direct
   writes remove the drift between the HTML original and the Markdown twin; the staging step keeps
   the vault under her sole control, which is why it's the current choice.

## Duplication is deliberate

Each note here is a **port**, not the original. The HTML in `reference/` stays the course artifact
— styled to match the lessons, and printable. The Markdown twin is the takeaway: searchable,
linkable, readable on a phone.

Two copies will drift. Accepted for reference material, where the content is stable. If a
`reference/*.html` file changes substantially, re-port it.
