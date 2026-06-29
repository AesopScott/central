---
name: code-check
description: Reviews a build and performs a code review using deepseek, then places the results in the code review drawer. Use when Bea (AI Engineer) needs an automated code review, triggered on file change or creation. OWNER-GATED — requires the deepseek API key.
---

# code-check

## Stage

DRAFT seed. Owner: Bea / AI Engineer. Not activated. Activation requires Scott. **Needs deepseek API key — cannot be live-tested by Cole without the key.**

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Owner-gated (secrets — deepseek API key).

## Trigger

- Triggered on file change or creation.

## Inputs

- The changed/created build files to review.
- deepseek API key via `.env.local` — required to run the review.
  - **Forward dependency:** secret not provisioned yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "deepseek API key not configured" message until it exists.

## Steps

1. Detect the build change set (files changed or created).
2. Verify the deepseek API key is present. If missing, emit a soft failure note and stop.
3. Submit the build to deepseek for code review.
4. Collect findings (correctness, quality, security, severity).
5. Write the results to the code review drawer.

## Outputs

- A deepseek code-review result placed in the code review drawer.

## Gate

- **OWNER-GATED (secrets).** Requires the deepseek API key. No run without the key. No external comms beyond the deepseek call. No writes outside the code review drawer.

## Automation path

- Auto-runs on file change or creation when the deepseek API key is configured. Results land in the code review drawer.

## Ownership / routing

- Owner: Bea. Consumes: build change set + deepseek API key. Writes: code review drawer. Gate owner: Scott (secrets).

## Test plan (none-live — cannot be live-tested by Cole without deepseek API key)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Owner-gated (secrets) marker present; deepseek API key dependency declared.
- [ ] Soft-failure path defined for missing API key.
- [ ] Write scope limited to the code review drawer. No live run available.
- [ ] Registry entry `code-check` -> owner `bea-ai-engineer`, status `draft`, gate `owner/secrets`.
