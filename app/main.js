// main.js

const { app, BrowserWindow } = require('electron');

function createWindow(){
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        resizable: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        }
    });

    mainWindow.loadFile('./public/index.html');
    mainWindow.on('close', () => mainWindow = null);
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
    if(process.platform !== 'darwin') app.quit();
});
app.on('activate', () => {
    if(mainWindow === null) createWindow();
});