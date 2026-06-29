---
name: troubleshoot
description: Troubleshoots a problem pulled from the service-ticket queue, logs the diagnosis and resolution to `lab tracker.md`, and makes recommendations to augment the system to prevent further damage. Use when Lane (Lab Operator) needs to work a lab issue, on demand or when the service-ticket queue surfaces something to troubleshoot.
---

# troubleshoot

## Stage

DRAFT seed. Owner: Lane / Lab Operator. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Writes `lab tracker.md`.

## Trigger

- On demand (Lane invokes), or
- Watches a 'service ticket' queue for things to troubleshoot automatically.

## Inputs

- Service-ticket queue — problem reports to troubleshoot.
  - **Forward dependency:** queue source not present yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "service-ticket queue not found" message until it exists.
- `lab tracker.md` — running log of lab problems, diagnoses, and resolutions.

## Steps

1. Read the next item from the service-ticket queue. If queue missing or empty, emit a soft note and stop.
2. Reproduce or characterize the problem; isolate the likely root cause.
3. Apply or recommend a resolution within bounded lab authority.
4. Derive system-augmentation recommendations to prevent recurrence or further damage.
5. Append a dated entry to `lab tracker.md` (problem, diagnosis, resolution, recommendation).

## Outputs

- Appended `lab tracker.md` entry per ticket: problem, diagnosis, resolution, prevention recommendation.
- System-augmentation recommendations surfaced for review.

## Gate

- Bounded to lab troubleshooting and writes to `lab tracker.md` only. No external comms. No writes to other roles' files.

## Automation path

- Watches the service-ticket queue and auto-troubleshoots queued items. Logs each to `lab tracker.md`.

## Ownership / routing

- Owner: Lane. Consumes: service-ticket queue. Writes: `lab tracker.md`. Recommendations route to Scott / system owners.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Input sources (service-ticket queue, `lab tracker.md`) match registry `reads`/`writes`.
- [ ] Soft-failure path defined for missing/empty queue.
- [ ] Write scope limited to `lab tracker.md`. No comms steps. No gate owner required.
- [ ] Registry entry `troubleshoot` -> owner `lane-lab-operator`, status `draft`.
