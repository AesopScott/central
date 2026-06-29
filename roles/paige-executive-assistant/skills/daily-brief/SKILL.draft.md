---
name: daily-brief
description: Accesses email, Slack, Discord, and potentially other sources to assemble a single daily brief document for the user. Use when Paige (Executive Assistant) needs to produce the brief, on the standard cadence — OWNER-GATED on secrets + external_comms.
---

# daily-brief

## Stage

DRAFT seed. Owner: Paige / Executive Assistant. Not activated. Activation requires Scott.

OWNER-GATED. Needs email/slack/discord credentials. Cannot be live-tested by Cole. Activation requires Scott (secrets) + Mae (external_comms).

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Account credentials (email/slack/discord) via `.env.local`.

## Trigger

- Standard cadence, or
- On demand (Paige invokes).

## Inputs

- Email account(s), Slack account, Discord account, and potentially other sources.
- Account credentials (email/slack/discord) via `.env.local`.

## Steps

1. Load account credentials from `.env.local`. If any required credential is missing, emit a soft failure note and stop.
2. Pull recent items from email, Slack, Discord, and any other configured sources.
3. Filter and group items by relevance and urgency.
4. Assemble the daily brief document (see Outputs).
5. Surface the brief to the user.

## Outputs

- A single daily brief document summarizing the day's items across email, Slack, Discord, and any other configured sources.

## Gate

- OWNER-GATED on **secrets** + **external_comms**. Requires Scott (secrets) + Mae (external_comms) sign-off before activation. Reads external accounts via credentials in `.env.local`.

## Automation path

- Standard cadence. Account credentials (email/slack/discord) via `.env.local`.

## Ownership / routing

- Owner: Paige / Executive Assistant. Gate owners: Scott (secrets), Mae (external_comms).

## Open Issue

- Paige appears in both `executive-assistant` and `personal-assistant` folders. Unresolved — flagged. Confirm whether these are the same role or two distinct roles before build; if same, one folder should be retired.

## Test plan (structural — no live run available)

- test = none-live (requires email/slack/discord credentials; cannot be live-tested by Cole).
- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Soft-failure path defined for missing credentials.
- [ ] Gate owners named: Scott (secrets) + Mae (external_comms).
- [ ] Credentials sourced from `.env.local`, never hardcoded.
- [ ] Registry entry `daily-brief` -> owner `paige-executive-assistant`, status `draft`.
