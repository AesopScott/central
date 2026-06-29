# MindShare Central

MindShare Central is a local desktop app (Electron) that gives each MindShare
role its own office chat, backed by your locally authenticated **Codex CLI** and
**Claude CLI**. It runs on your machine so role conversations use your own CLI
subscription login — no API keys or tokens live in the page.

The canonical UI is authored at the repo-root [`public/`](public/) tree. The
desktop shell that loads it lives in [`local-client/`](local-client/).

---

## Prerequisites

Install these before starting:

- **Windows 10 or newer** (current builds target Windows).
- **Node.js** (LTS) on `PATH` — needed to run the Electron shell.
- **Codex CLI** — installed and logged in, for Codex role sessions.
- **Claude CLI** — installed and logged in, for Claude role sessions.

You only need the CLI for the provider you intend to use, but most offices
expect at least one of the two to be authenticated locally.

The app checks, per provider, that the CLI can launch, that login status reports
a local subscription login, and that it can produce a reply.

---

## Quick Start

From a PowerShell prompt:

```powershell
cd C:\Users\scott\Code\central\local-client
npm install
npm start
```

`npm start` launches the Electron app, which loads the canonical UI from the
repo-root `public/index.html`.

### One-command launcher

`start-mindshare-local.ps1` runs `npm install` (only if `node_modules` is
missing) and then `npm start`:

```powershell
powershell -ExecutionPolicy Bypass -File C:\Users\scott\Code\central\local-client\start-mindshare-local.ps1
```

---

## Environment / API keys (optional)

CLI **subscription** auth (Codex / Claude login) is separate from **tool** API
keys. Tool keys are only needed if you use features that call those services
(DeepSeek review, Kling video, Meetup, Cloudflare, Zoom, etc.).

To configure them, copy the template and fill in real values:

```powershell
copy .env.example .env.local
```

`.env.local` is gitignored and never bundled into a build. See
[`.env.example`](.env.example) for the full key list. The app runs without it —
only the tool features that need a given key will be unavailable.

---

## Building the Windows installer

To produce distributable builds, see
[`local-client/README.md`](local-client/README.md). In short, from
`local-client/`:

```powershell
npm install
npm run dist:win
npm run verify:package
```

This writes the installer, portable `.exe`, and unpacked runtime to
`local-client/release/` (a build artifact, gitignored — do not commit it).

---

## Where things live

| Path | What it is |
| --- | --- |
| [`public/`](public/) | Canonical Central UI (authored source). |
| [`local-client/`](local-client/) | Electron shell, packaging, and dev/build docs. |
| [`local-client/README.md`](local-client/README.md) | Run, sync, package, and bundling detail. |
| [`local-client/MINDSHARE_LOCAL_INSTALL.md`](local-client/MINDSHARE_LOCAL_INSTALL.md) | Dev install path. |
| [`local-client/RELEASE_README.md`](local-client/RELEASE_README.md) | Release notes shipped with a build. |
| [`roles/`](roles/) | MindShare role definitions (per-role office context). |

---

## Notes

- Builds are currently **unsigned** internal builds, so Windows SmartScreen may
  warn on first launch.
- Runtime sessions, credentials, generated files, and CLI auth state stay local
  to your machine.
- The Chrome-extension / native-host files in `local-client/` are retained as
  experimental reference only. They are **not** the product path; the desktop
  app is.
