/*
 * MindShare Central — Skills modal
 * Owner: Cole / HR Director
 * Source of truth: roles/skills-registry.json + each role's SKILL.draft.md frontmatter
 * Regenerate this data when the registry changes. Drafts are authored + owned + registered, NOT activated.
 */
(function () {
  "use strict";

  var SKILLS = [
    { skill: "exec-brief", owner: "rae-chief-executive-officer", status: "draft", trigger: "on-demand + weekly", gated: [], desc: "Reads Mindshare Central priorities, open decisions, and cross-role blockers from docs/backlog.json and produces a crisp CEO briefing — unresolved tradeoffs, unclear ownership, stale priorities, and one recommended next move per domain." },
    { skill: "role", owner: "ana-recruiter", status: "modify-existing", trigger: "on new role request", gated: [], desc: "Build role agents for a root organization or multi-agent corporation. Use when creating an organizational role and deciding role mode, engagement type, authority, implementation form, and learning behavior." },
    { skill: "assign-backlog", owner: "cal-program-manager", status: "draft", trigger: "daily", gated: ["external_comms"], desc: "Reads the current backlog and session state, assigns backlog ownership to other roles and agents, sends handoff communications, tracks progress, and alerts on stale updates." },
    { skill: "comms-check", owner: "mae-communications-director", status: "draft", trigger: "hourly (change-gated)", gated: [], desc: "Audits all current role channel assignments against the communications registry — flagging wrong-channel reads, missing assignments, stale comms, and updates buried in the wrong channels. Skips when nothing changed." },
    { skill: "release-git", owner: "reid-release-manager", status: "draft", trigger: "pre-git-approval gate", gated: ["git_release"], desc: "Inspects git state across tracked repos for dirty worktrees, stale branches, unclear merge authority, missing test evidence, and unreviewed promotion paths. Read-only readiness report that gates other roles' git actions." },
    { skill: "commit-git", owner: "reid-release-manager", status: "owner-gated", trigger: "hourly (dirty-state-gated)", gated: ["git_release", "secrets"], desc: "Scans for dirty branches and uncommitted files, recommends commit/push per item, and auto-commits and auto-pushes to origin on its own recommendation. Level 5 autonomy — gated; skips when worktree is clean." },
    { skill: "agentify", owner: "tess-autonomy-engineer", status: "owner-gated", trigger: "autonomy central tool", gated: ["autonomy"], desc: "Accepts a role slug and builds or modifies the agent autonomy baseline (autonomy.md, agent.md, hooks, loops, schedules, comms, heartbeats, tool use), prepping agents for autonomy approval across levels 4, 5, and 6." },
    { skill: "automation-review", owner: "tess-autonomy-engineer", status: "owner-gated", trigger: "on agentify completion", gated: ["autonomy"], desc: "Reviews agent creation for hidden authority expansion, ownership ambiguity, premature automation, missing control planes, and operation confusion. Returns required corrections before implementation is approved." },
    { skill: "gate-check", owner: "tess-autonomy-engineer", status: "owner-gated", trigger: "every 4h (change-gated)", gated: ["autonomy"], desc: "Flags gates open wider than contracted, missing stop conditions, heartbeat/hook changes that expand authority, and roles operating above their approved level. Skips when nothing changed." },
    { skill: "operationalize", owner: "cole-hr-director", status: "draft", trigger: "recruiting central", gated: [], desc: "For a selected role, checks existence and currency of required files at their stage — flagging missing files, stale mirrors, mismatched stages, and unrolled structure — and repairs or restores template-derived files from git or backup." },
    { skill: "validate-role-files", owner: "cole-hr-director", status: "draft", trigger: "every 4h (change-gated)", gated: [], desc: "Reads the file structure for every role, finds missing or incomplete files, and repairs them from git or backup, on a 4-hour cadence gated by a change pre-check that skips when no files changed." },
    { skill: "inspire-writing", owner: "june-staff-writer", status: "draft", trigger: "daily reminder", gated: [], desc: "Builds outlines, messages, or requested writing to inspire the user toward creative success, surfacing a fresh nudge for each active individual project." },
    { skill: "daily-brief", owner: "paige-executive-assistant", status: "owner-gated", trigger: "standard cadence", gated: ["secrets", "external_comms"], desc: "Accesses email, Slack, Discord, and other sources to assemble a single daily brief document for the user." },
    { skill: "accounting", owner: "finn-finance-director", status: "owner-gated", trigger: "scheduled + emails link", gated: ["secrets", "external_comms"], desc: "Connects via Plaid to the configured accounts and builds and loads a web page based on the current accounting configuration." },
    { skill: "visualize-schema", owner: "imani-data-engineering-director", status: "draft", trigger: "daily", gated: [], desc: "Builds a schema web page of all files used by roles and agents and their connectivity references across the repo." },
    { skill: "route-guest", owner: "mara-front-desk-administrator", status: "draft", trigger: "unrecognized visitor / new intake", gated: [], desc: "Greets new visitors or unrecognized callers, gathers intent and context, routes to the correct role/office/queue, and logs each routing decision. Fails closed on access/security/privacy questions." },
    { skill: "troubleshoot", owner: "lane-lab-operator", status: "draft", trigger: "service-ticket queue", gated: [], desc: "Troubleshoots a problem pulled from the service-ticket queue, logs the diagnosis and resolution to lab tracker.md, and recommends system augmentations to prevent further damage." },
    { skill: "research-ai-sec", owner: "vik-program-architect", status: "draft", trigger: "daily", gated: [], desc: "Scans internet sources for new AI and cybersecurity concepts to implement or build, and returns a read-only research digest with no commitment or action taken." },
    { skill: "code-check", owner: "bea-ai-engineer", status: "owner-gated", trigger: "on file change/create", gated: ["secrets"], desc: "Reviews a build and performs a code review using deepseek, then places the results in the code review drawer. Requires the deepseek API key." },
    { skill: "web-check", owner: "liz-website-manager", status: "draft", trigger: "obsidian change / weekly sweep", gated: [], desc: "Audits the Mojo website against current Obsidian content — flagging stale pages, broken navigation, unsupported training material, and gaps between site claims and org truth. Returns a content-update queue." },
    { skill: "meetup-check", owner: "jay-meetup-coordinator", status: "owner-gated", trigger: "daily", gated: ["secrets", "external_comms"], desc: "Checks for unanswered Meetup messages and sends a brief email to let Scott know there are messages to respond to. Requires Meetup and email credentials." },
    { skill: "theo-ai-review", owner: "theo-ai-systems-engineering-director", status: "draft", trigger: "AI-system PR / model proposal", gated: [], desc: "Evaluates a proposed AI integration, model choice, or system architecture against Mindshare's current AI stack — model fit, deployment pattern, cost posture, failure modes, and overlap. Gates before Vik reviews control-plane implications." },
    { skill: "isla-comply", owner: "isla-compliance-director", status: "draft", trigger: "process/contract change", gated: [], desc: "Checks a new process, contract, data practice, or operational change against the current compliance framework, separating blocking from advisory findings. Gate before Adrian reviews legal exposure." },
    { skill: "jordan-cs-pulse", owner: "jordan-customer-success-director", status: "draft", trigger: "support signal / weekly", gated: [], desc: "Produces a customer-health snapshot from touchpoint data, onboarding records, and support signals — accounts at risk, onboarding stalls, unresolved escalations, and a next action per account. Feeds the Rae briefing." },
    { skill: "nia-eng-review", owner: "nia-engineering-director", status: "draft", trigger: "new implementation plan", gated: [], desc: "Checks an implementation plan for team-capacity clarity, code-quality gate presence, missing test plans, and unclear squad handoffs. Gates before build sessions begin." },
    { skill: "leon-cadence", owner: "leon-executive-operations-director", status: "draft", trigger: "weekly", gated: [], desc: "Reviews meeting cadence, decision backlog, and executive alignment — flagging overdue decisions, missed cadence beats, and gaps between Rae's priorities and active workstreams. Feeds Rae's alignment briefing." },
    { skill: "kai-ux-review", owner: "kai-experience-design-director", status: "draft", trigger: "UX spec / design PR", gated: [], desc: "Reviews a user flow, interaction design, or experience spec for navigation clarity, design-system consistency, accessibility signals, and intended-vs-actual gaps. Gates before engineering implementation." },
    { skill: "adrian-legal-gate", owner: "adrian-legal-director", status: "draft", trigger: "external commitment / contract", gated: ["external_comms"], desc: "Flags contracts, external commitments, or legally sensitive changes that require legal review before execution. Hard gate — no external commitment proceeds without Adrian clearance." },
    { skill: "morgan-ops-review", owner: "morgan-operations-director", status: "draft", trigger: "new operational process", gated: [], desc: "Reviews an operational process or scaling proposal for bottlenecks, handoff gaps, undefined failure modes, and scaling risks. Returns an ops-readiness finding with correction owners." },
    { skill: "celia-partner-intake", owner: "celia-partnerships-director", status: "draft", trigger: "new partnership inquiry", gated: ["external_comms"], desc: "Reviews a new partnership opportunity for strategic alignment, authority to commit, commitment clarity, and missing Scott/Rae sign-off gates. Gate before any external partnership communication." },
    { skill: "mila-people-pulse", owner: "mila-people-operations-director", status: "draft", trigger: "onboarding / culture signal", gated: [], desc: "Reviews team-health signals for unresolved clarity gaps, onboarding stalls, and culture-standard violations. Returns a people-ops health report with owner-routed actions. Feeds Cole's HR audit." },
    { skill: "mateo-platform-review", owner: "mateo-platform-engineering-director", status: "draft", trigger: "infrastructure PR", gated: [], desc: "Reviews a platform infrastructure change, scaling decision, or reliability proposal for deployment risk, service-level exposure, dependency clarity, and missing rollback plan. Gates before Reid approves release." },
    { skill: "mira-project-sweep", owner: "mira-pmo-director", status: "draft", trigger: "weekly / backlog change", gated: [], desc: "Reads active projects from docs/backlog.json and flags unclear phase boundaries, missing owners, stale milestones, or no proof of progress. Feeds Cal's MAPS backlog hygiene check." },
    { skill: "priya-vision-check", owner: "priya-product-director", status: "draft", trigger: "new feature proposal", gated: [], desc: "Checks a feature, initiative, or product decision against Mindshare's current product vision — flagging scope drift, vision misalignment, and missing customer-need evidence. Gate before Gabe writes a PM spec." },
    { skill: "gabe-spec-review", owner: "gabe-product-management-director", status: "draft", trigger: "new spec submission", gated: [], desc: "Checks a feature spec or product requirement for complete acceptance criteria, stakeholder alignment, missing edge cases, and unclear scope. Gate before engineering estimation begins." },
    { skill: "elise-rollout-check", owner: "elise-product-operations-director", status: "draft", trigger: "pre-launch", gated: [], desc: "Reviews a rollout plan for metrics instrumentation, feedback-loop presence, rollback plan, and launch-readiness signals. Gate before Reid approves the release." },
    { skill: "sloane-revenue-review", owner: "sloane-revenue-director", status: "draft", trigger: "pricing / revenue-model change", gated: [], desc: "Reviews a pricing proposal, revenue model, or funnel change for assumption clarity, attribution logic, and owner approval. Gate before Finn reviews financial implications." },
    { skill: "drew-pipeline-review", owner: "drew-sales-director", status: "draft", trigger: "weekly / pipeline change", gated: [], desc: "Reads the sales pipeline and flags opportunities with stale stage, missing next steps, unclear decision-maker contact, or authority gaps in commitment. Feeds Jordan's customer-success pulse." },
    { skill: "harper-security-review", owner: "harper-security-engineering-director", status: "draft", trigger: "security-sensitive PR", gated: [], desc: "Audits a code change, architecture proposal, or new integration for OWASP-class risks, secrets exposure, auth gaps, and infrastructure attack surface. CRITICAL/HIGH/MEDIUM tiers. Gate before Mateo approves platform changes." },
    { skill: "nora-service-review", owner: "nora-service-design-director", status: "draft", trigger: "service-design change", gated: [], desc: "Reviews a service blueprint, touchpoint map, or handoff spec for touchpoint consistency, handoff clarity, and designed-vs-delivered gaps. Feeds Kai's UX review." },
    { skill: "jill-staffops-review", owner: "june-staff-operations-director", status: "draft", trigger: "staff-process change", gated: [], desc: "Reviews staff operational processes for clarity, coverage, and consistency. Returns a staffops health report. (Role renamed June → Jill; folder slug rename is a separate Ana task.)" },
    { skill: "samira-support-review", owner: "samira-support-director", status: "draft", trigger: "escalation / weekly", gated: [], desc: "Reads the support queue and escalation log, flagging unresolved escalations, resolution-rate drift, missing escalation paths, and support gaps by customer segment." },
    { skill: "owen-tech-review", owner: "owen-technology-director", status: "draft", trigger: "new technology proposal", gated: [], desc: "Reviews a technology decision, stack change, or platform proposal against the current technology strategy — flagging redundant tools, missing architectural fit, and context-free decisions. Gate before Mateo evaluates platform impact." },
    { skill: "amara-research-synthesis", owner: "amara-user-research-director", status: "draft", trigger: "research session completion", gated: [], desc: "Extracts structured insights from raw research sessions, interview notes, or usability findings — behavioral patterns, unmet needs, friction points, and evidence-graded recommendations. Ready for Priya and Kai." },
    { skill: "victor-vendor-review", owner: "victor-vendor-management-director", status: "draft", trigger: "vendor onboarding / renewal", gated: ["external_comms"], desc: "Reviews a new vendor proposal, contract, or renewal for strategic fit, contract risk, commitment clarity, and missing Scott/Finn approval gates. Gate before Adrian reviews legal exposure." }
  ];

  var GATE_LABELS = {
    autonomy: "Autonomy",
    git_release: "Git / release",
    secrets: "Secrets",
    external_comms: "External comms",
    backup: "Backup",
    activation: "Activation"
  };

  var TITLE_WORDS = { hr: "HR", ai: "AI", ux: "UX", pmo: "PMO", cs: "CS" };

  function ownerName(slug) {
    return slug.split("-")[0].replace(/^./, function (c) { return c.toUpperCase(); });
  }

  function ownerTitle(slug) {
    return slug.split("-").slice(1).map(function (w) {
      return TITLE_WORDS[w] || w.replace(/^./, function (c) { return c.toUpperCase(); });
    }).join(" ");
  }

  function statusClass(status) {
    if (status === "owner-gated") return "bg-error/15 text-error";
    if (status === "modify-existing") return "bg-secondary/20 text-secondary";
    return "bg-primary/15 text-primary";
  }

  function escapeHtml(s) {
    return String(s).replace(/[&<>"]/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c];
    });
  }

  function cardHtml(s) {
    var gates = (s.gated || []).map(function (g) {
      return '<span class="text-label-sm uppercase tracking-wider px-2 py-0.5 rounded-full bg-error/15 text-error">' +
        escapeHtml(GATE_LABELS[g] || g) + "</span>";
    }).join(" ");
    var gateRow = gates
      ? '<div class="flex flex-wrap items-center gap-2 mt-3"><span class="text-label-sm uppercase tracking-wider text-on-surface-variant">Gated:</span>' + gates + "</div>"
      : "";
    return '' +
      '<div class="skills-card glass rounded-xl p-5" data-search="' + escapeHtml((s.skill + " " + s.owner + " " + s.desc).toLowerCase()) + '">' +
        '<div class="flex items-start justify-between gap-4">' +
          '<h3 class="font-display-lg text-headline-md text-on-surface tracking-tight">' + escapeHtml(s.skill) + "</h3>" +
          '<span class="shrink-0 text-label-sm uppercase tracking-wider px-2.5 py-1 rounded-full ' + statusClass(s.status) + '">' + escapeHtml(s.status) + "</span>" +
        "</div>" +
        '<div class="mt-2 text-body-md text-on-surface-variant">' +
          '<span class="text-on-surface font-semibold">' + escapeHtml(ownerName(s.owner)) + '</span> · ' + escapeHtml(ownerTitle(s.owner)) +
        "</div>" +
        '<p class="mt-3 text-body-md text-on-surface-variant leading-relaxed">' + escapeHtml(s.desc) + "</p>" +
        '<div class="mt-3 text-label-sm uppercase tracking-wider text-on-surface-variant">Trigger: <span class="text-on-surface normal-case tracking-normal">' + escapeHtml(s.trigger) + "</span></div>" +
        gateRow +
      "</div>";
  }

  var overlay = null;

  function build() {
    if (overlay) return overlay;
    overlay = document.createElement("div");
    overlay.id = "skills-modal";
    overlay.className = "fixed inset-0 z-[100] hidden items-start justify-center p-4 md:p-8 overflow-y-auto";
    overlay.innerHTML = '' +
      '<div class="skills-backdrop absolute inset-0 bg-black/70 backdrop-blur-sm"></div>' +
      '<div class="glass-deep relative w-full max-w-5xl rounded-xl my-8 shadow-2xl">' +
        '<div class="sticky top-0 z-10 glass-deep rounded-t-xl px-6 py-5 border-b border-white/10 flex items-center justify-between gap-4">' +
          '<div>' +
            '<h2 class="font-display-lg text-headline-md text-on-surface tracking-tight">Role Skills</h2>' +
            '<p class="text-body-md text-on-surface-variant mt-1"><span id="skills-count"></span> skills · owner · description. Drafts are authored and owned, not yet activated.</p>' +
          "</div>" +
          '<button id="skills-close" class="shrink-0 size-10 rounded-full glass flex items-center justify-center text-on-surface hover:text-primary transition-colors" aria-label="Close">' +
            '<span class="material-symbols-outlined">close</span>' +
          "</button>" +
        "</div>" +
        '<div class="px-6 pt-5">' +
          '<input id="skills-search" type="search" placeholder="Filter by skill, owner, or keyword…" class="w-full rounded-lg bg-surface-container border border-white/10 px-4 py-3 text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary" />' +
        "</div>" +
        '<div id="skills-grid" class="px-6 py-5 grid grid-cols-1 md:grid-cols-2 gap-4"></div>' +
        '<div id="skills-empty" class="hidden px-6 pb-8 text-center text-on-surface-variant">No skills match that filter.</div>' +
      "</div>";
    document.body.appendChild(overlay);

    var grid = overlay.querySelector("#skills-grid");
    grid.innerHTML = SKILLS.map(cardHtml).join("");
    overlay.querySelector("#skills-count").textContent = String(SKILLS.length);

    overlay.querySelector("#skills-close").addEventListener("click", close);
    overlay.querySelector(".skills-backdrop").addEventListener("click", close);

    var search = overlay.querySelector("#skills-search");
    var empty = overlay.querySelector("#skills-empty");
    search.addEventListener("input", function () {
      var q = search.value.trim().toLowerCase();
      var shown = 0;
      grid.querySelectorAll(".skills-card").forEach(function (card) {
        var match = !q || card.getAttribute("data-search").indexOf(q) !== -1;
        card.classList.toggle("hidden", !match);
        if (match) shown++;
      });
      empty.classList.toggle("hidden", shown !== 0);
    });

    return overlay;
  }

  function open() {
    build();
    overlay.classList.remove("hidden");
    overlay.classList.add("flex");
    document.body.style.overflow = "hidden";
    var s = overlay.querySelector("#skills-search");
    if (s) s.focus();
  }

  function close() {
    if (!overlay) return;
    overlay.classList.add("hidden");
    overlay.classList.remove("flex");
    document.body.style.overflow = "";
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });

  document.addEventListener("click", function (e) {
    var trigger = e.target.closest ? e.target.closest("[data-skills-open]") : null;
    if (trigger) { e.preventDefault(); open(); }
  });

  window.MindShareSkills = { open: open, close: close, data: SKILLS };
})();
