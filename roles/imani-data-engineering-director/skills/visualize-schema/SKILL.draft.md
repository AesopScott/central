---
name: visualize-schema
description: Builds a schema web page of all files used by roles and agents and their connectivity references across the repo. Use when Imani (Data Engineering Director) needs an up-to-date connectivity map, on demand or on the daily refresh.
---

# visualize-schema

## Stage

DRAFT seed. Owner: Imani / Data Engineering Director. Not activated. Activation requires Scott.

## Versioning

Current version: 0.1.0.

- Patch: wording/routing clarifications.
- Minor: new outputs or workflow steps.
- Major: changed input contract or artifact shape.

## Changelog

- 2026-06-28 - v0.1.0 - Initial draft seed from skill-build.md.

## Trigger

- Updates daily, or
- On demand (Imani invokes).

## Inputs

- All files used by roles and agents across the repo, and their connectivity references.

## Steps

1. Walk the repo for files used by roles and agents.
2. Extract each file's connectivity references (what it reads, writes, or links to).
3. Build the schema/connectivity graph from files and references.
4. Render the graph into a schema web page.
5. Write the generated web page to Imani's own outputs.

## Outputs

- A generated schema web page showing all files used by roles and agents and their connectivity references.

## Gate

- None beyond read access to repo files. Read-only over repo files; writes only a generated web page. No external comms, no writes to other roles' source files.

## Automation path

- Updates daily.

## Ownership / routing

- Owner: Imani / Data Engineering Director. Feeds: org-wide visibility into file/agent connectivity.

## Test plan (structural — no live run available)

- [ ] Frontmatter valid (name + description present, name matches folder/registry).
- [ ] Read-only over repo files; only output is the generated web page.
- [ ] No external comms steps. No gate owner required.
- [ ] Daily refresh trigger documented.
- [ ] Registry entry `visualize-schema` -> owner `imani-data-engineering-director`, status `draft`.
