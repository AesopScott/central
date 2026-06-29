---
name: kai-ux-review
description: Accepts a user flow, interaction design, or experience spec and reviews navigation clarity, consistency with the design system, accessibility signals, and gaps between intended and actual user experience, returning a UX-review finding set. Use when a UX spec or design PR needs a read-only review that gates before engineering implementation.
---

# kai-ux-review

## Stage

DRAFT seed. Owner: Kai / Experience Design Director. Not activated. Activation requires Scott.

Note: director personality files are thin (per skill-build.md open issue #2). This skill is functional but not voice-calibrated yet — it should be updated to match Kai's voice and challenge style as the personality.md matures.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- UX spec submission, or
- Design PR.

Gate before engineering implementation.

## Inputs

- A user flow, interaction design, or experience spec.
- The current design system reference (for consistency comparison).
  - **Forward dependency:** design system reference may not be present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "design system reference not found" message until it exists.

## Steps

1. Load the UX spec and the design system reference. If the reference is missing or unparseable, emit a soft failure note and stop.
2. Review navigation clarity (path findability, dead ends).
3. Check consistency with the design system.
4. Check accessibility signals (contrast, focus order, labels, alt text intent).
5. Detect gaps between intended and actual user experience.
6. Assemble the UX-review finding set (see Outputs).

## Outputs

- A UX-review finding set:
  - Navigation clarity (finding set).
  - Design-system consistency (finding set).
  - Accessibility signals (finding set).
  - Intended-vs-actual experience gaps (finding set).
- Auto-surfaces to Scott when a blocking navigation or accessibility gap is detected.

## Gate

- None beyond read access to the UX spec and design system reference. Read-only assessment returning a finding set. No external comms, no writes to other roles' files.

## Automation path

- Triggered on UX spec or design PR. Gate before engineering implementation.

## Ownership / routing

- Owner: Kai. Feeds: engineering implementation (readiness signal). Consumes signals from Nora (service-review) when present.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Description is one sentence plus a "Use when..." clause.
- [ ] Soft-failure path defined for missing design system reference.
- [ ] Read-only — no write/comms steps. No gate owner required.
- [ ] Accessibility-signal finding present in outputs.
- [ ] Registry entry `kai-ux-review` -> owner `kai-experience-design-director`, status `draft`.
