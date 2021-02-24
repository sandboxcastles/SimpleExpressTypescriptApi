const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 300,
    height: 90,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.removeMenu();
  win.loadFile('index.html')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

ipcMain.on('start-server', (event, port) => {
    const { start } = require('./src/server/index.js');
    start(port);
})