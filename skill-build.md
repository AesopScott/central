# Mindshare Role Skills — Build Review

Prepared by: Cole / HR Director  
Date: 2026-06-28  
Status: Draft for Scott review

Each skill listed here is a proposed default agentic skill baseline for its role. These are the seeds — event-triggered, repeatable, bounded actions that each role could execute autonomously as their automation level advances.

Skills are named by convention: `{slug}` (short kebab slug, matches role name where possible).

---

## Core Operating Roles

### Rae — Chief Executive Officer
**Skill:** `exec-brief`  
**What it does:** Reads current mindshare central priorities, open decisions, and cross-role blockers from `docs/backlog.json`. Produces a crisp CEO briefing: unresolved tradeoffs, unclear ownership, stale priorities, and one recommended next move per domain. Runs on demand or on a weekly cadence.  
**Automation path:** Weekly strategic health signal; auto-surfaces to Scott when domains show unresolved tradeoffs.
Resolved - source = `docs/backlog.json` for now.
---

### Ana — Recruiter
**Skill:** `role`  
**What it does:** Accepts a role description or role request. Validates against the Mindshare role taxonomy, checks for duplicated ownership, missing activation evidence, unclear job-to-be-done, and missing role-home session. Returns a role-ready packet or a gap report requiring Scott approval before proceeding.  
**Automation path:** None, Triggered on new role requests in recruiting central
Feedback - We already have this skill. Let's modify it.

---

### Cal — Program Manager
**Skill:** `assign-backlog`  
**What it does:** Reads the current backlog and session state. Assigns backlog ownership of items to other roles and agents.  Sends communications to initiate handoff and tracks progress.  Alerts on stale updates. 
**Automation path:** daily cadence. Auto-routes owner-blocked items to the correct role.
Resolved - skill changed; redundant `obsidian-index` removed (overlapped omi pipeline).

---

### Mae — Communications Director
**Skill:** `comms-check`  
**What it does:** Audits all current role channel assignments against the communications registry. Flags roles reading channels they should ignore, missing assignments, stale communications, and role-relevant updates buried in wrong channels. Returns a correction list routed to Mae for action or escalation.  Reports on findings.
**Automation path:** Runs hourly, gated by a registry/channel change-check first (skips run when nothing changed — limits model usage).
Feedback - small changes

---

### Reid — Release Manager
**Skill:** `release-git`  
**What it does:** Inspects the current git state across all tracked repos. Checks for dirty worktrees, stale branches, unclear merge authority, missing test evidence, and unreviewed promotion paths. Returns a release-readiness report before any release is approved.    Reports state of all changes.
**Automation path:** Triggered pre-git approval. Gate blocks git actions without a clean Reid release-check output or human override approval.
feedback - medium changes

**Skill:** `commit-git`  
**What it does:** Scans for dirty branches / uncommitted files and recommends whether each should be committed and pushed to origin. Independent of `release-git` — no self-gate conflict: `release-git` gates *other roles'* commits; `commit-git` acts on Reid's own uncommitted-work sweep.
**Automation path:** Runs hourly, gated by a dirty-state check first (skips run when no uncommitted changes — limits model usage). Auto-commits and auto-pushes on its own recommendation. **Level 5 behavior — accepted by Scott 2026-06-28.** Git credentials via `.env.local`.
feedback - new skill

---

### Tess — Autonomy Engineer


**Skill:** `agentify`  
**What it does:** Accepts a role slug. Builds or modifies the autonomy state baseline for agents, prepping them for autonomy approval across level 4, 5 and 6 (autonomy.md, agent.md, hooks, loops, schedules, communication, heartbeats, tool use).  
**Automation path:** None, Triggered in autonomy central tool
feedback - large changes

**Skill:** `automation-review`  
**What it does:** Reviews agent creation for hidden authority expansion, ownership ambiguity, premature automation, missing control planes, and operation confusion. Returns a review finding with required corrections before implementation is approved.  
**Automation path:** Triggered on agentify completion.
feedback - moved skill

**Skill:** `gate-check`  
**What it does:** Flags gates open wider than contracted, missing stop conditions, heartbeat/hook changes that expand authority, and roles operating above their approved level. Returns a gate-review finding with required corrections. 
**Automation path:** Runs every 4 hours, gated by a change-check first (skips when no autonomy/gate files changed — limits model usage).
feedback - new skill

---

### Cole — HR Director
**Skill:** `operationalize`  
**What it does:** Reads the team-member file structure standard and the current roster. For the selected role, checks existence and currency of required files at their stage. Flags missing files, stale mirrors, mismatched operating stages, and new required structure not rolled out. Repairs or restores missing files from git or backup.
**Automation path:** None, Triggered in recruiting central
feedback - large changes

**Skill:** `validate-role-files`  
**What it does:** Reads the file structure for every role looking for missing or incomplete files and repairs them if they cannot be restored from git or backup.
**Automation path:** Runs every 4 hours, gated by a file-size/change check that determines if any files changed before running — limits model usage.
feedback - new skill

---

### June — Staff Writer
**Skill:** `inspire-writing`  
**What it does:** Builds outlines, messages, or requested writing to inspire the user to creative success 
**Automation path:** Scheduled as daily inspiration reminder for individual projects to keep them moving.
feedback - large changes


---

### Paige — Executive Assistant
**Skill:** `daily-brief`  
**What it does:** Accesses email accounts, slack account, discord account, and potentially other sources to build a brief document.
**Automation path:** Standard cadence. Account credentials (email/slack/discord) via `.env.local`.
feedback - large changes

---

### Finn — Finance Director
**Skill:** `accounting`  
**What it does:** connects via Plaid to the configured accounts and builds and loads a web page based on current accounting configuration.
**Automation path:** Runs on a schedule and emails the user a link. Plaid + account credentials via `.env.local` and the Plaid setup configured in Mindshare.
feedback - large changes

---

### Imani — Data Engineering Director
**Skill:** `visualize-schema`  
**What it does:** builds a schema web page of all files used by roles and agents and their connectivity references
**Automation path:** Updates daily
feedback - large changes

---

### Mara — Front Desk Administrator
**Skill:** `route-guest`  
**What it does:** Greets new visitors or unrecognized callers to Mindshare. Gathers intent and context. Routes to the correct role, office, or queue. Fails closed on access, security, and privacy questions — escalates to Scott or Rae rather than guessing. Logs each routing decision.  
**Automation path:** Triggered on unrecognized visitor or new intake. Default entry point when no role is specified.
feedback - agree

---

### Lane — Lab Operator
**Skill:** `troubleshoot`  
**What it does:** Troubleshoots a problem and logs it to lab tracker.md.  Makes recommendations to augment the system to prevent further damage.
**Automation path:** Watches a 'service ticket' queue for things to troubleshoot automatically.
feedback - large changes

---

### Vik — Program Architect
**Skill:** `research-ai-sec`  
**What it does:** scans internet sources for new ai and cybersecurity concepts to implement or build
**Automation path:** scheduled daily
feedback - large changes

---

### Bea — AI Engineer
**Skill:** `code-check`  
**What it does:** Reviews a build and performs a code review using deepseek and places results in the code review drawer.
**Automation path:** triggered on file change or creation.
feedback - new skill


---

### Liz — Mojo Website Manager
**Skill:** `web-check`  
**What it does:** Audits the Mojo website against current Obsidian content. Flags stale pages, broken navigation, training material unsupported by evidence, and gaps between what the site says and what is actually true in the org. Returns a content-update queue with staleness severity.  
**Automation path:** Triggered on Obsidian content changes or on a weekly sweep. Auto-queues high-severity items for Liz action.
feedback - agree. 

---

### Jay — Meetup Coordinator
**Skill:** `meetup-check`  
**What it does:** Checks for messages on Meetup that haven't been responded to. Sends a brief email to let Scott know that there are messages to respond to. 
**Automation path:** Performs this daily. 
feedback - new skill

---

## Director-Level Roles

These roles share a "grounded, human working voice" personality baseline. Skills are designed from their function and Mindshare's build needs. Each will mature as their personality files are developed.

---

### Theo — AI Systems Engineering Director
**Skill:** `theo-ai-review`  
**What it does:** Accepts a proposed AI integration, model choice, or AI system architecture. Evaluates against Mindshare's current AI stack: model fit, deployment pattern, cost posture, failure modes, and overlap with existing systems. Returns a graded review with recommended action.  
**Automation path:** Triggered on AI-system PRs or new model proposals. Pre-gate before Vik reviews control-plane implications.

---

### Isla — Compliance Director
**Skill:** `isla-comply`  
**What it does:** Accepts a new process, contract, data practice, or operational change. Checks against the current compliance framework and flags requirements that must be satisfied before the change goes live. Returns a compliance checklist with blocking vs. advisory findings.  
**Automation path:** Triggered on process or contract changes. Required gate before Adrian reviews legal exposure.

---

### Jordan — Customer Success Director
**Skill:** `jordan-cs-pulse`  
**What it does:** Accepts customer touchpoint data, onboarding records, or support signals. Produces a customer-health snapshot: accounts at risk, onboarding stalls, unresolved escalations, and next recommended action per account.  
**Automation path:** Triggered on new support signals or weekly sweep. Feeds the Rae executive briefing.

---

### Nia — Engineering Director
**Skill:** `nia-eng-review`  
**What it does:** Accepts an implementation plan or engineering initiative. Checks for team capacity clarity, code-quality gate presence, missing test plans, and unclear handoffs between squads. Returns an engineering-readiness assessment.  
**Automation path:** Triggered on new implementation plan submission. Gate before build sessions begin.

---

### Leon — Executive Operations Director
**Skill:** `leon-cadence`  
**What it does:** Reviews the current meeting cadence, decision backlog, and executive alignment record. Flags overdue decisions, missed cadence beats, and alignment gaps between Rae's priorities and active workstreams. Returns a cadence health report.  
**Automation path:** Triggered weekly. Feeds Rae's alignment briefing.

---

### Kai — Experience Design Director
**Skill:** `kai-ux-review`  
**What it does:** Accepts a user flow, interaction design, or experience spec. Reviews for navigation clarity, consistency with design system, accessibility signals, and gaps between intended and actual user experience. Returns a UX-review finding set.  
**Automation path:** Triggered on UX spec or design PR. Gate before engineering implementation.

---

### Adrian — Legal Director
**Skill:** `adrian-legal-gate`  
**What it does:** Accepts a contract, external commitment, agreement, or legally sensitive process change. Flags items that require legal review before execution. Returns a legal-review checklist with risk-tiered findings.  
**Automation path:** Triggered on any external commitment or contract submission. Hard gate — no external commitment without Adrian clearance.

---

### Morgan — Operations Director
**Skill:** `morgan-ops-review`  
**What it does:** Accepts an operational process description or scaling proposal. Reviews for bottlenecks, handoff gaps, undefined failure modes, and scaling risks. Returns an ops-readiness finding with correction owners.  
**Automation path:** Triggered on new operational process proposals. Gate before process is adopted org-wide.

---

### Celia — Partnerships Director
**Skill:** `celia-partner-intake`  
**What it does:** Accepts a new partnership opportunity. Reviews for strategic alignment, authority to commit, commitment clarity, and missing Scott or Rae sign-off gates. Returns a partnership-readiness packet.  
**Automation path:** Triggered on new partnership inquiry. Gate before any external partnership communication.

---

### Mila — People Operations Director
**Skill:** `mila-people-pulse`  
**What it does:** Accepts team health signals (role clarity feedback, onboarding status, cultural flag). Reviews for unresolved clarity gaps, onboarding stalls, and culture-standard violations. Returns a people-ops health report with owner-routed action items.  
**Automation path:** Triggered on onboarding events or escalated culture signals. Feeds Cole's HR audit.

---

### Mateo — Platform Engineering Director
**Skill:** `mateo-platform-review`  
**What it does:** Accepts a platform infrastructure change, scaling decision, or reliability proposal. Reviews for deployment risk, service-level exposure, dependency clarity, and missing rollback plan. Returns a platform-readiness finding.  
**Automation path:** Triggered on infrastructure PRs. Gate before Reid approves release.

---

### Mira — PMO Director
**Skill:** `mira-project-sweep`  
**What it does:** Reads active projects from the Mindshare backlog. Flags projects with unclear phase boundaries, missing owners, stale milestones, or no proof of progress. Returns a project health sweep with escalation-required vs. self-correcting items.  
**Automation path:** Triggered weekly or on backlog change. Feeds Cal's MAPS backlog hygiene check.

---

### Priya — Product Director
**Skill:** `priya-vision-check`  
**What it does:** Accepts a feature, initiative, or product decision. Checks alignment against the current product vision and strategy. Flags scope drift, vision misalignment, and missing customer-need evidence. Returns a vision-alignment assessment.  
**Automation path:** Triggered on new feature proposals. Gate before Gabe writes a PM spec.

---

### Gabe — Product Management Director
**Skill:** `gabe-spec-review`  
**What it does:** Accepts a feature spec or product requirement. Checks for complete acceptance criteria, stakeholder alignment, missing edge cases, and unclear scope boundaries. Returns a spec-completeness review with required vs. advisory gaps.  
**Automation path:** Triggered on new spec submission. Gate before engineering estimation begins.

---

### Elise — Product Operations Director
**Skill:** `elise-rollout-check`  
**What it does:** Accepts a rollout plan for a new feature or process. Reviews for metrics instrumentation, feedback loop presence, rollback plan, and launch-readiness signals. Returns a rollout-readiness report.  
**Automation path:** Triggered pre-launch. Gate before Reid approves release.

---

### Sloane — Revenue Director
**Skill:** `sloane-revenue-review`  
**What it does:** Accepts a pricing proposal, revenue model, or conversion-funnel change. Reviews for assumption clarity, attribution logic, and owner approval. Returns a revenue-clarity finding with questions that must be answered before changes go live.  
**Automation path:** Triggered on pricing or revenue-model changes. Gate before Finn reviews financial implications.

---

### Drew — Sales Director
**Skill:** `drew-pipeline-review`  
**What it does:** Reads the current sales pipeline. Flags opportunities with stale stage, missing next steps, unclear decision-maker contact, or authority gaps in commitment. Returns a pipeline-health report with owner-routed correction items.  
**Automation path:** Triggered weekly or on pipeline change. Feeds Jordan's customer-success pulse.

---

### Harper — Security Engineering Director
**Skill:** `harper-security-review`  
**What it does:** Accepts a code change, architecture proposal, or new integration. Audits for OWASP-class risks, secrets exposure, auth gaps, and infrastructure attack surface. Returns a security-review finding set with CRITICAL/HIGH/MEDIUM severity tiers.  
**Automation path:** Triggered on security-sensitive PRs. Required gate before Mateo approves platform changes.

---

### Nora — Service Design Director
**Skill:** `nora-service-review`  
**What it does:** Accepts a service blueprint, customer touchpoint map, or handoff spec. Reviews for touchpoint consistency, handoff clarity, and gaps between designed and delivered experience. Returns a service-design finding.  
**Automation path:** Triggered on service-design changes. Feeds Kai's UX review.

---

### Jill — Staff Operations Director
**Skill:** `jill-staffops-review`  
**What it does:** Reviews staff operational processes for clarity, coverage, and consistency. Returns a staffops health report.  
**Automation path:** Triggered on staff-process changes.

---

### Samira — Support Director
**Skill:** `samira-support-review`  
**What it does:** Reads the current support queue and escalation log. Flags unresolved escalations, resolution-rate drift, missing escalation paths, and support gaps by customer segment. Returns a support-health report.  
**Automation path:** Triggered on escalation events or weekly sweep. Feeds Jordan's customer-success pulse.

---

### Owen — Technology Director
**Skill:** `owen-tech-review`  
**What it does:** Accepts a technology decision, stack change, or platform proposal. Reviews alignment against the current technology strategy roadmap, flags redundant tools, missing architectural fit, and decisions made without strategic context. Returns a tech-strategy alignment finding.  
**Automation path:** Triggered on new technology proposals. Gate before Mateo evaluates platform impact.

---

### Amara — User Research Director
**Skill:** `amara-research-synthesis`  
**What it does:** Accepts raw user research sessions, interview notes, or usability findings. Extracts structured insights: behavioral patterns, unmet needs, friction points, and evidence-graded recommendations. Returns a research-synthesis report ready for Priya and Kai.  
**Automation path:** Triggered on new research session completion. Feeds product vision and UX review gates.

---

### Victor — Vendor Management Director
**Skill:** `victor-vendor-review`  
**What it does:** Accepts a new vendor proposal, contract, or renewal decision. Reviews for strategic fit, contract risk, commitment clarity, and missing Scott or Finn approval gates. Returns a vendor-review packet.  
**Automation path:** Triggered on vendor onboarding or contract renewal. Gate before Adrian reviews legal exposure.

---

## Released

### Matt — Released MAPS ASPM
No skill. Role is released. No automation baseline.

---

## Open Issues

1. ~~**Name collision**: `staff-writer` and `staff-operations-director` both carry the name "June."~~ **Resolved 2026-06-28** — Staff Operations Director renamed **Jill** (`jill-staffops-review`). Staff Writer keeps June.
2. **Director roles (20 roles)** have thin personality files — their skills above are functional but not voice-calibrated. As their personality.md files mature, these skills should be updated to match voice and challenge style.
3. **Paige** appears in both `executive-assistant` and `personal-assistant` folders. Confirm these are the same role or two distinct roles. If same, one folder should be retired.
4. Skill slugs follow pattern `{name-short}-{function}`. Final slugs should be confirmed with Scott before build.

---

*Cole / HR Director — audit complete, routing to Scott for review.*
