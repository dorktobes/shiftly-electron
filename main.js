const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow () {
	mainWindow = new BrowserWindow({ width: 800, height: 600, });
	//static page load below
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'client/dist/compiled/index.html'),
		protocol: 'file:',
		slashes: true,
	}));

	//from server below
	// mainWindow.loadURL('http://localhost:8080');

    //toggle for devtools
	// mainWindow.webContents.openDevTools();

	mainWindow.on('closed', () => {mainWindow = null;});
}
app.on('ready', createWindow);