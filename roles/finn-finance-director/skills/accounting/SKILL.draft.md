---
name: accounting
description: Connects via Plaid to the configured accounts and builds and loads a web page based on the current accounting configuration. Use when Finn (Finance Director) needs an up-to-date accounting view, on the scheduled cadence — OWNER-GATED on secrets + external_comms.
---

# accounting

## Stage

DRAFT seed. Owner: Finn / Finance Director. Not activated. Activation requires Scott.

OWNER-GATED. Cannot be live-tested by Cole. Activation requires Scott (Plaid secrets) + Mae (email).

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Plaid + account credentials via `.env.local` and the Plaid setup configured in Mindshare.

## Trigger

- Scheduled (emails the user a link), or
- On demand (Finn invokes).

## Inputs

- The configured accounts and the current accounting configuration.
- Plaid + account credentials via `.env.local` and the Plaid setup configured in Mindshare.

## Steps

1. Load Plaid + account credentials from `.env.local` and the Plaid setup configured in Mindshare. If any required credential is missing, emit a soft failure note and stop.
2. Connect via Plaid to the configured accounts and pull current balances/transactions.
3. Apply the current accounting configuration to the pulled data.
4. Build and load a web page based on the current accounting configuration.
5. Email the user a link to the loaded web page.

## Outputs

- A built and loaded web page reflecting the current accounting configuration.
- An email to the user containing a link to that page.

## Gate

- OWNER-GATED on **secrets** + **external_comms**. Requires Scott (Plaid secrets) + Mae (email) sign-off before activation. Connects to external accounts via Plaid using credentials in `.env.local`.

## Automation path

- Runs on a schedule and emails the user a link. Plaid + account credentials via `.env.local` and the Plaid setup configured in Mindshare.

## Ownership / routing

- Owner: Finn / Finance Director. Gate owners: Scott (Plaid secrets), Mae (email).

## Test plan (structural — no live run available)

- test = none-live (cannot be live-tested by Cole; requires Plaid secrets + email).
- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Soft-failure path defined for missing credentials.
- [ ] Gate owners named: Scott (Plaid secrets) + Mae (email).
- [ ] Credentials sourced from `.env.local` and Mindshare Plaid setup, never hardcoded.
- [ ] Registry entry `accounting` -> owner `finn-finance-director`, status `draft`.
