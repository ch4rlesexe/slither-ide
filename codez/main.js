const { app, BrowserWindow } = require('electron');
const path = require('path');

// Function to create the main IDE window
function createMain() {
  // Create a new browser window with the IDE interface
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    title: "Slither IDE",
    backgroundColor: "#1e1e1e",     // Dark background to match vs code theme
    autoHideMenuBar: true,          // Hide the default menu bar for cleaner look
    webPreferences: {
      // Path to preload script - this runs before the HTML loads
      preload: path.join(__dirname, 'preload.js'),
      
      // Security settings
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  // Load the main HTML file into the window
  win.loadFile('index.html');
  
  // uncomment the line below to open devtools for debugging
  // win.webContents.openDevTools();
}

// Once electron is ready create main IDE wiondow
app.whenReady().then(() => {
  // Create the main IDE window
  createMain();

  // On mac, clicking the dock icon should recreate the window if it's closed
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createMain();
    }
  });
});

// Handle the case when all windows are closed
// This is where we decide whether to quit the app or keep it running
app.on('window-all-closed', () => {
  // On mac, apps stay running even when windows are closed
  if (process.platform !== 'darwin') {
    app.quit();  // On other platforms (Windows, Linux), quit the app
  }
});