---
name: meetup-check
description: Checks for unanswered Meetup messages and sends a brief email to let Scott know there are messages to respond to. Use when Jay (Meetup Coordinator) runs the daily inbox check. OWNER-GATED — requires Meetup and email credentials.
---

# meetup-check

## Stage

DRAFT seed. Owner: Jay / Meetup Coordinator. Not activated. Activation requires Scott. **Needs Meetup + email credentials — cannot be live-tested by Cole.**

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Owner-gated (secrets + external_comms).

## Trigger

- Daily.

## Inputs

- Meetup account — message inbox.
- Email account — to notify Scott.
- Meetup + email credentials via `.env.local` — required to run.
  - **Forward dependency:** secrets not provisioned yet (accepted by Scott 2026-06-28). Skill must fail soft with a clear "Meetup/email credentials not configured" message until they exist.

## Steps

1. Verify Meetup and email credentials are present. If missing, emit a soft failure note and stop.
2. Connect to Meetup and list messages that have not been responded to.
3. If any unanswered messages exist, compose a brief notification email.
4. Send the email to Scott letting him know there are messages to respond to.

## Outputs

- A brief email to Scott summarizing that unanswered Meetup messages await a response (count / brief context).
- No email sent when there are no unanswered messages.

## Gate

- **OWNER-GATED (secrets + external_comms).** Requires Meetup + email credentials. Sends external email — no send without gate clearance and configured creds. No writes to other roles' files.

## Automation path

- Runs daily when credentials are configured. Auto-emails Scott when unanswered Meetup messages are found.

## Ownership / routing

- Owner: Jay. Consumes: Meetup inbox + email/Meetup credentials. Sends: notification email to Scott. Gate owner: Scott (secrets + external comms).

## Test plan (none-live — cannot be live-tested by Cole without Meetup + email credentials)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Owner-gated (secrets + external_comms) marker present; Meetup + email credential dependency declared.
- [ ] Soft-failure path defined for missing credentials.
- [ ] External-comms step (email to Scott) gated; no live run available.
- [ ] Registry entry `meetup-check` -> owner `jay-meetup-coordinator`, status `draft`, gate `owner/secrets+external_comms`.
