const { contextBridge, ipcRenderer } = require('electron')

if (process.env.IS_TEST === 'true') {
    require('wdio-electron-service/preload');
}

contextBridge.exposeInMainWorld('electronAPI', {
    // renderer to electron main
    updateMenu: (locale) => ipcRenderer.send('update-menu', locale),
    modelClosed: (fileName) => ipcRenderer.send('model-closed', fileName),
    modelOpened: (fileName) => ipcRenderer.send('model-opened', fileName),
    modelSaved: (fileName, modelData) => ipcRenderer.send('model-saved', fileName, modelData),

    // electron main to renderer
    onCloseModel: (callback) => ipcRenderer.on('close-model', callback),
    onNewModel: (callback) => ipcRenderer.on('new-model', callback),
    onOpenModel: (callback) => ipcRenderer.on('open-model', callback),
    onSaveModel: (callback) => ipcRenderer.on('save-model', callback)
});
