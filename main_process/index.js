const electron = require('electron')
    // Module to control application life.
const app = electron.app
    // Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const url = require('url')
const util = require('util');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow() {
    console.log('ready');

    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        transparent: false
    })

    // and load the index.html of the app.
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    // Open the DevTools.
    mainWindow.webContents.openDevTools()

    // let child = new BrowserWindow({
    //   parent: mainWindow
    // })
    // child.webContents.openDevTools()
    // child.show()
    // child.loadURL('http://192.168.1.71/web/')

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null
    })
    app.setBadgeCount(9)
}

// Control app’s event lifecycle.

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Emitted when Electron has finished initializing. On macOS, launchInfo holds the userInfo of the NSUserNotification that was used to open the application, if it was launched from Notification Center. You can call app.isReady() to check if this event has already fired.

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    console.log('activate')// only mac
    if (mainWindow === null) {
        createWindow()
    }
})

app.on('will-finish-launching', () => {
    console.log('will-finish-launching');

// Emitted when the application has finished basic startup. On Windows and Linux, the will-finish-launching event is the same as the ready event; on macOS, this event represents the applicationWillFinishLaunching notification of NSApplication. You would usually set up listeners for the open-file and open-url events here, and start the crash reporter and auto updater.

// In most cases, you should just do everything in the ready event handler.
})


app.on('before-quit', () => {
    console.log('before-quit');
    
})

app.on('will-quit', () => {
    console.log('will-quit');
    
})

app.on('quit', () => {
    console.log('quit');
    
})

app.on('open-file', () => {
    console.log('open-file');
    // only mac
})

app.on('open-url', () => {
    console.log('open-url');
    // only mac
})

app.on('continue-activity', () => {
    console.log('continue-activity');
    // only mac
})

app.on('browser-window-blur', () => {
    console.log('browser-window-blur');
    
})

app.on('browser-window-focus', () => {
    console.log('browser-window-focus');
    
})

app.on('browser-window-created', () => {
    console.log('browser-window-created');
    
})

app.on('web-contents-created', () => {
    console.log('web-contents-created');
    
})

app.on('certificate-error', () => {
    console.log('certificate-error');
    
})

app.on('select-client-certificate', () => {
    console.log('select-client-certificate');
    
})

app.on('login', () => {
    console.log('login');
    
})

app.on('gpu-process-crashed', () => {
    console.log('gpu-process-crashed');
    
})

app.on('accessibility-support-changed', () => {
    console.log('accessibility-support-changed');
    
})


