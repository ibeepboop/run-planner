# The real goal: evaluate AI-generated code, not avoid AI

Michelle disclosed that she relies heavily on AI to code, and that this has left gaps — "a lot of
things I just don't know, even though I probably should." Her stated aim is to understand key
concepts first, *then* return to using AI to build faster, as someone who can judge the output.

This reframes the whole workspace. The goal is **not** to make her write everything by hand
forever. It is to close the gap between recognition and comprehension, so AI becomes an
accelerator rather than a dependency.

**Why the gap exists (worth naming, because it predicts where else she'll be shaky):** working
with AI means reading a great deal of correct code without ever generating it. Reading builds
familiarity and confidence; only generating builds understanding. So her intuitions about what
code *looks* right are decent, while her ability to explain *why* it is right lags well behind.
Expect this pattern to repeat across every topic — she will often recognise a construct and be
unable to define it. `map` was the first confirmed instance: seen thousands of times in Perl,
never understood.

**Implications for teaching:**

- Always ask her to explain a concept back in her own words. Recognition will otherwise be
  mistaken for understanding by *both* of us. The `/jargon` playback step is doing real work here
  and should not be skipped.
- Weight exercises toward **"why is this code right or wrong"** over "write this from scratch".
  That trains the exact skill she needs at work, and it is faster — which matters, because she is
  already behind.
- Do not treat AI use as a bad habit to eliminate. It is the intended end state. The bad habit is
  accepting output she cannot evaluate.

**Scope also expanded here:** the work stack is Vue/TypeScript, Node.js, MongoDB, and GitHub for
version control and CI/CD — used across essentially all her upcoming projects. She chose to grow
Run Planner into a full-stack app covering all four rather than build separate toy projects, and
reported she is **already behind** at work, putting the workspace in triage mode.
