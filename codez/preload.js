const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('api', {
  // Currently no IPC needed since we're running Python code directly in the renderer
});

