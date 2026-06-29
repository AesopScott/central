# MindShare Local Development Install

This is the current development path for connecting the MindShare office UI to the local Codex CLI and Claude CLI.

> New here? Start with the repo-root [`README.md`](../README.md) for prerequisites and the fastest start path. This file covers the dev-install detail.

## Preferred Local Path

Run the local Electron app:

```powershell
cd C:\Users\scott\Code\central\local-client
npm install
npm start
```

The app loads:

- `C:\Users\scott\Code\central\public\index.html` (canonical Central UI; `main.js` loads this at boot)
- `preload.js`, which exposes `window.MindShareLocalClient`
- `mindshare-local-client.js`, which checks Codex/Claude install/login state and sends prompts through the local CLI

## Authentication

The Codex CLI and/or Claude CLI must be installed and logged in locally. Per
provider, the app checks:

- whether the CLI can be launched
- whether login status reports a local subscription login (ChatGPT for Codex)
- whether the CLI can produce a reply (e.g. `codex exec`)

## Product Note

The Chrome extension/native-host files are retained as experimental reference, not as the preferred product path. The clean local product is an app that owns the local process boundary directly.
