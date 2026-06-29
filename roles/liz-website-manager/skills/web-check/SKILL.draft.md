---
name: web-check
description: Audits the Mojo website against current Obsidian content — flagging stale pages, broken navigation, training material unsupported by evidence, and gaps between site claims and org truth — then returns a content-update queue with staleness severity. Use when Liz (Website Manager) needs a site/content audit, on Obsidian content changes or on the weekly sweep.
---

# web-check

## Stage

DRAFT seed. Owner: Liz / Website Manager. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Read-only audit.

## Trigger

- On Obsidian content changes, or
- Weekly sweep.

## Inputs

- The Mojo website (current pages, navigation, training material).
- Current Obsidian content — the org's source of truth.

## Steps

1. Read current Obsidian content and the live Mojo website.
2. Compare site pages and claims against Obsidian truth.
3. Detect: stale pages, broken navigation, training material unsupported by evidence, and gaps between site claims and org truth.
4. Assign a staleness severity to each finding.
5. Assemble the content-update queue (see Outputs).

## Outputs

- A content-update queue with staleness severity per item:
  - Stale pages.
  - Broken navigation.
  - Training material unsupported by evidence.
  - Gaps between site claims and org truth.
- High-severity items auto-queued for Liz action.

## Gate

- Read-only audit. No writes to the website or other roles' files. No external comms.

## Automation path

- Runs on Obsidian content changes or weekly sweep. Auto-queues high-severity items for Liz action.

## Ownership / routing

- Owner: Liz. Consumes: Mojo website + Obsidian content. Output queue routes to Liz; high-severity items auto-queued.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Inputs (Mojo website, Obsidian content) match registry `reads`.
- [ ] Read-only — no website/file writes, no comms steps.
- [ ] Severity-tiered content-update queue defined; high-severity auto-queue path present. No gate owner required.
- [ ] Registry entry `web-check` -> owner `liz-website-manager`, status `draft`.
