#!/usr/bin/env node
/**
 * gen-skill-bodies.js
 * Generates a real, installable SKILL.md per registry entry under skills/<slug>/SKILL.md.
 *
 * Body is an honest scaffold: valid frontmatter + role-aware structure derived from the
 * registry metadata (owner, trigger, reads/writes, gated_by, notes). Depth beyond the
 * scaffold is the owning role's authoring job — the file is real and installs as-is.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const registry = require(path.join(ROOT, 'roles', 'skills-registry.json'));
const SKILLS_DIR = path.join(ROOT, 'skills');

const GATE_LABEL = {
  autonomy: 'Autonomy gate — owner approval required before this skill runs autonomously (gate owners: Tess / Vik).',
  git_release: 'Git/release gate — commit, push, branch, or promotion steps require Reid (Release Manager) approval.',
  secrets: 'Secrets gate — depends on credentials in .env.local; Scott (final authority) must provision and approve.',
  external_comms: 'External-comms gate — any outbound message (email, Slack, Discord, partner) requires Mae (Communications) clearance.',
  backup: 'Backup gate — coordinate with Bea before destructive or state-changing steps.',
  activation: 'Activation gate — Scott must explicitly activate before live use.',
};

function titleize(slug) {
  return slug
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');
}

function roleName(ownerSlug) {
  if (!ownerSlug) return 'an unassigned owner';
  const parts = ownerSlug.split('-');
  const first = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
  const title = parts.slice(1).map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  return `${first} (${title})`;
}

function shortDescription(s) {
  const subject = titleize(s.skill);
  const owner = roleName(s.owner);
  const when = s.trigger ? ` Runs on: ${s.trigger}.` : '';
  return `${subject} skill owned by ${owner}.${when} Scaffold generated from the Mindshare skills registry; install into ~/.claude/skills/${s.skill}/ to use.`;
}

function gateSection(s) {
  const gates = s.gated_by || [];
  if (s.status === 'owner-gated' || gates.length) {
    const lines = [];
    if (s.status) lines.push(`- Registry status: \`${s.status}\``);
    if (typeof s.autonomy_level !== 'undefined') lines.push(`- Autonomy level: \`${s.autonomy_level}\``);
    gates.forEach((g) => lines.push(`- ${GATE_LABEL[g] || g}`));
    if (!gates.length) lines.push('- Owner-gated: the owning role must approve activation before live use.');
    return lines.join('\n');
  }
  return '- No special gate registered. Default authority is read-only / report-only until the owner activates broader scope.';
}

function ioSection(s) {
  const lines = [];
  (s.reads || []).forEach((r) => lines.push(`- Reads: \`${r}\``));
  (s.writes || []).forEach((w) => lines.push(`- Writes: \`${w}\``));
  if (!lines.length) lines.push('- Reads/writes: not yet declared in the registry. Treat as read-only until the owner specifies inputs and outputs.');
  return lines.join('\n');
}

function body(s) {
  const title = titleize(s.skill);
  const owner = roleName(s.owner);
  const notes = s.notes ? `\n## Registry Notes\n\n> ${s.notes}\n` : '';
  return `---
name: ${s.skill}
description: ${shortDescription(s).replace(/\n/g, ' ')}
---

# ${title}

Owned by **${owner}**. Generated scaffold from the Mindshare skills registry (\`roles/skills-registry.json\`). This file is a real, installable Claude skill: drop the \`${s.skill}/\` folder into \`~/.claude/skills/\` and invoke it with \`/${s.skill}\`. The structure below is honest scaffold depth — the owning role deepens the body with its real procedure.

## Purpose

Provide the ${title.toLowerCase()} capability for ${owner}. Use this skill when the owning role needs a repeatable, registered procedure rather than an ad-hoc prompt.

## When To Use

${s.trigger ? `- Trigger: ${s.trigger}` : '- Trigger: on demand by the owning role.'}
- Invoke with \`/${s.skill}\` or when the user describes the task this skill names.

## Inputs & Outputs

${ioSection(s)}

## Authority & Gates

${gateSection(s)}

> Tool ability is not authority. This scaffold defaults to report-only. Any step that commits, sends, spends, or changes control-plane state stays blocked until the gate owner approves.

## Procedure

1. Confirm the trigger condition and that the owning role authorizes this run.
2. Read the declared inputs above. Do not reach outside them without owner approval.
3. Perform the ${title.toLowerCase()} work the owning role defines here.
4. Produce a clear, reviewable report. Lead with the finding, then evidence, then recommended next action.
5. Stop at every registered gate. Hand the gated step to its owner with the cleanest safe path forward.

## Output

A reviewable report or artifact for ${owner}. No silent state changes. Every gated action is surfaced for approval, not auto-applied.

## Boundary

This file grants no authority by itself. Activation, autonomy, git/release, secrets, external comms, and spending all remain gated to their registered owners until explicitly approved.
${notes}`;
}

let written = 0;
for (const s of registry.skills) {
  const dir = path.join(SKILLS_DIR, s.skill);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'SKILL.md'), body(s), { encoding: 'utf8' });
  written += 1;
}

// Emit a manifest the web page can consume for the download list.
const manifest = {
  generated_from: 'roles/skills-registry.json',
  registry_version: registry.version,
  count: written,
  repo_raw_base: 'https://raw.githubusercontent.com/AesopScott/central/main/skills',
  repo_blob_base: 'https://github.com/AesopScott/central/blob/main/skills',
  skills: registry.skills.map((s) => ({
    skill: s.skill,
    owner: s.owner,
    status: s.status,
    path: `skills/${s.skill}/SKILL.md`,
    raw_url: `https://raw.githubusercontent.com/AesopScott/central/main/skills/${s.skill}/SKILL.md`,
  })),
};
fs.writeFileSync(path.join(SKILLS_DIR, 'manifest.json'), JSON.stringify(manifest, null, 2), { encoding: 'utf8' });

console.log(`Wrote ${written} SKILL.md files + manifest.json under skills/`);
