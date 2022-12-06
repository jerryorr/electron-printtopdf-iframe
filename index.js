const { app, BrowserWindow } = require('electron')
const fs = require('fs')
const os = require('os')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadURL('https://jerryorr.github.io/electron-printtopdf-iframe/')

  win.webContents.on('did-finish-load', () => {
    // Set a short delay to make sure iframe has time to load
    setTimeout(() => {
      const pdfPath = path.join(os.tmpdir(), 'electron-printtopdf-iframe.pdf')

      win.webContents.printToPDF({}).then(data => {
        fs.writeFile(pdfPath, data, (error) => {
          if (error) throw error
          console.log(`Wrote PDF successfully to ${pdfPath}`)
        })
      }).catch(error => {
        console.log(`Failed to write PDF to ${pdfPath}: `, error)
      })
    }, 3000)
  })
}

app.whenReady().then(() => {
  createWindow()
})
