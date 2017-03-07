# An APP with Electron

## 一个基础项目需要的文件

参考 [electron quick-start](https://electron.atom.io/docs/tutorial/quick-start/)

1. file `package.json`
    ```
    {...
        "main": "main.js",
        "scripts": {
            "start": "electron ."
        },
    ...}
    ```

2. file `main.js`
    ```
    // 入口文件，控制这个 APP 的主线程 **main process**

    const {app, BrowserWindow} = require('electron')
    const path = require('path')
    const url = require('url')

    // Keep a global reference of the window object, if you don't, the window will
    // be closed automatically when the JavaScript object is garbage collected.
    let win

    function createWindow () {
      // Create the browser window.
      win = new BrowserWindow({width: 800, height: 600})

      // and load the index.html of the app.
      win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
      }))

      // Open the DevTools.
      win.webContents.openDevTools()

      // Emitted when the window is closed.
      win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
      })
    }

    // This method will be called when Electron has finished
    // initialization and is ready to create browser windows.
    // Some APIs can only be used after this event occurs.
    app.on('ready', createWindow)

    // Quit when all windows are closed.
    app.on('window-all-closed', () => {
      // On macOS it is common for applications and their menu bar
      // to stay active until the user quits explicitly with Cmd + Q
      if (process.platform !== 'darwin') {
        app.quit()
      }
    })

    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (win === null) {
        createWindow()
      }
    })
    ```

3. file `index.html`
    ```html
    <!-- 显示界面的文件 **renderer process** -->
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <title>Hello World!</title>
      </head>
      <body>
        <h1>Hello World!</h1>
        We are using node <script>document.write(process.versions.node)</script>,
        Chrome <script>document.write(process.versions.chrome)</script>,
        and Electron <script>document.write(process.versions.electron)</script>.
      </body>
    </html>
    ```
4. run app
    ```bash
    npm start
    ```


## To Use

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/electron/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies
npm install
# Run the app
npm start
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/).

## Other Example Apps

For more example apps, see the
[list of boilerplates](http://electron.atom.io/community/#boilerplates)
created by the awesome electron community.

