const { contextBridge, ipcRenderer } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
  const bar = document.createElement('div');
  bar.id = 'electron-titlebar';
  bar.style.cssText = [
    'position:fixed', 'top:0', 'left:0', 'right:0', 'height:32px',
    'background:#070d1f', 'display:flex', 'align-items:center',
    'z-index:2147483647', '-webkit-app-region:drag',
    'transform:translateY(-100%)', 'transition:transform 0.15s ease',
    'border-bottom:1px solid rgba(190,198,224,0.08)'
  ].join(';');

  const title = document.createElement('span');
  title.textContent = 'MindShare Central';
  title.style.cssText = 'flex:1;padding-left:14px;font-family:Inter,sans-serif;font-size:12px;color:#6b7a9e;letter-spacing:0.06em;text-transform:uppercase;user-select:none;';

  const btnStyle = (hoverBg) => {
    let base = 'width:46px;height:32px;background:transparent;border:none;color:#8a93b0;cursor:pointer;font-size:11px;-webkit-app-region:no-drag;';
    return [base, hoverBg];
  };

  const makeBtn = (label, hoverBg, channel) => {
    const b = document.createElement('button');
    b.textContent = label;
    const [base, hover] = btnStyle(hoverBg);
    b.style.cssText = base;
    b.addEventListener('mouseenter', () => { b.style.background = hover; b.style.color = '#dce1fb'; });
    b.addEventListener('mouseleave', () => { b.style.background = 'transparent'; b.style.color = '#8a93b0'; });
    b.addEventListener('click', () => ipcRenderer.send(channel));
    return b;
  };

  const controls = document.createElement('div');
  controls.style.cssText = 'display:flex;-webkit-app-region:no-drag;';
  controls.appendChild(makeBtn('─', '#1e2538', 'window-minimize'));
  controls.appendChild(makeBtn('□', '#1e2538', 'window-maximize'));
  controls.appendChild(makeBtn('✕', '#c42b1c', 'window-close'));

  bar.appendChild(title);
  bar.appendChild(controls);
  document.body.prepend(bar);

  document.addEventListener('mousemove', (e) => {
    if (e.clientY <= 4) {
      bar.style.transform = 'translateY(0)';
    } else if (e.clientY > 36 && !bar.matches(':hover')) {
      bar.style.transform = 'translateY(-100%)';
    }
  });
  bar.addEventListener('mouseleave', () => {
    bar.style.transform = 'translateY(-100%)';
  });
});

contextBridge.exposeInMainWorld('MindShareLocalClient', {
  connectCodex: (payload) => ipcRenderer.invoke('mindshare:codex-connect', payload),
  connectClaude: (payload) => ipcRenderer.invoke('mindshare:claude-connect', payload),
  listSessions: () => ipcRenderer.invoke('mindshare:sessions'),
  resetSession: (payload) => ipcRenderer.invoke('mindshare:session-reset', payload),
  loadRoleContext: (payload) => ipcRenderer.invoke('mindshare:role-context', payload),
  loadConferenceRoomContext: () => ipcRenderer.invoke('mindshare:conference-room-context'),
  listConferenceRoomInviteCandidates: () => ipcRenderer.invoke('mindshare:conference-room-invite-candidates'),
  runTessLevel4Automation: (payload) => ipcRenderer.invoke('mindshare:tess-level4-automation', payload),
  controlAutomation: (payload) => ipcRenderer.invoke('mindshare:automation-control', payload),
  sendCodexMessage: (payload) => ipcRenderer.invoke('mindshare:codex-message', payload),
  sendClaudeMessage: (payload) => ipcRenderer.invoke('mindshare:claude-message', payload),
  stopMessage: (payload) => ipcRenderer.invoke('mindshare:stop-message', payload),
  getPromptPreview: (payload) => ipcRenderer.invoke('mindshare:prompt-preview', payload),
  sendComboMessage: (payload) => ipcRenderer.invoke('mindshare:combo-message', payload),
  connectDeepSeek: (payload) => ipcRenderer.invoke('mindshare:deepseek-connect', payload),
  sendDeepSeekMessage: (payload) => ipcRenderer.invoke('mindshare:deepseek-message', payload),
  getDeepSeekBalance: () => ipcRenderer.invoke('mindshare:deepseek-balance'),
  listConfigurationFiles: () => ipcRenderer.invoke('mindshare:configuration-files'),
  listMemoryLocations: () => ipcRenderer.invoke('mindshare:memory-locations'),
  getGitStatus: () => ipcRenderer.invoke('mindshare:git-status'),
  commitAndPush: (payload) => ipcRenderer.invoke('mindshare:git-commit-push', payload),
  openConfigurationFile: (payload) => ipcRenderer.invoke('mindshare:open-configuration-file', payload),
  triggerMicrophoneShortcut: () => ipcRenderer.invoke('mindshare:microphone-shortcut'),
  chooseFiles: () => ipcRenderer.invoke('mindshare:choose-files'),
  chooseImageFiles: () => ipcRenderer.invoke('mindshare:choose-image-files'),
  materializeAttachments: (payload) => ipcRenderer.invoke('mindshare:materialize-attachments', payload),
  copyText: (payload) => ipcRenderer.invoke('mindshare:copy-text', payload),
  showFile: (payload) => ipcRenderer.invoke('mindshare:show-file', payload),
  installSkill: (payload) => ipcRenderer.invoke('mindshare:install-skill', payload),
  installSkills: (payload) => ipcRenderer.invoke('mindshare:install-skills', payload),
  getCloudflareTopSites: (payload) => ipcRenderer.invoke('mindshare:cloudflare-top-sites', payload),
  getMeetupDashboard: (payload) => ipcRenderer.invoke('mindshare:meetup-dashboard', payload),
  generateKlingVideo: (payload) => ipcRenderer.invoke('mindshare:kling-generate-video', payload),
  getSkillsRegistry: () => ipcRenderer.invoke('mindshare:skills-registry')
});
