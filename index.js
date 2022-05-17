//Create a const app to load the application
const { app, BrowserWindow } = require('electron')

//Function to create browser dimensions
const createWindow = () => {
    const newBrowser = new BrowserWindow({
      width: 1000,
      height: 1000,
      resizable: false
    })
    
    //Load index (.html)
    newBrowser.loadFile('index.html')
  }

  //Call the function that will create the screen in the browser
  app.whenReady().then(() => {
    createWindow()
  })

  