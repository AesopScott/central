---
name: research-ai-sec
description: Scans internet sources for new AI and cybersecurity concepts to implement or build, and returns a read-only research digest with no commitment or action taken. Use when Vik (Program Architect) needs fresh AI/security signal, on demand or on the scheduled daily cadence.
---

# research-ai-sec

## Stage

DRAFT seed. Owner: Vik / Program Architect. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md. Read-only research via web search.

## Trigger

- On demand (Vik invokes), or
- Scheduled daily.

## Inputs

- Internet sources via web search — AI and cybersecurity news, papers, releases, advisories.

## Steps

1. Run web searches across AI and cybersecurity sources for new concepts, tools, and techniques.
2. Filter for items relevant to Mindshare's build needs and security posture.
3. Summarize each candidate: what it is, why it matters, potential to implement or build.
4. Assemble the research digest. Take no further action — research only.

## Outputs

- A read-only research digest: new AI and cybersecurity concepts with relevance notes and build potential.
- No commitment, no implementation, no action taken.

## Gate

- Read-only research. No writes to other roles' files, no external comms, no commitments or actions.

## Automation path

- Scheduled daily research sweep. Digest surfaced for Vik review; no action taken automatically.

## Ownership / routing

- Owner: Vik. Consumes: internet sources (web search). Digest routes to Vik for triage.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Read-only — no writes, no comms, no actions/commitments.
- [ ] Web-search input declared; no internal file dependency required.
- [ ] Daily schedule trigger defined. No gate owner required.
- [ ] Registry entry `research-ai-sec` -> owner `vik-program-architect`, status `draft`.
