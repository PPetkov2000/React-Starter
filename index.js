#!/usr/bin/env node
const shell = require('shelljs')
const colors = require('colors')
const fs = require('fs')
const templates = require('./templates/templates.js')

const appName = process.argv[2]
const appDirectory = `${process.cwd()}/${appName}`

const run = async () => {
  const success = await createReactApp()
  if (!success) {
    console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
    return false;
  }
  await cdIntoNewApp()
  await installPackages()
  await updateTemplates()
  console.log("All done")
}

const createReactApp = () => {
  return new Promise(resolve => {
    if (appName) {
      shell.exec(`npx create-react-app ${appName}`, () => {
        console.log("Created react app")
        resolve(true)
      })
    } else {
      console.log("\nNo app name was provided.".red)
      console.log("\nProvide an app name in the following format: ")
      console.log("\ncreate-react-app-starter ", "app-name\n".cyan)
      resolve(false)
    }
  })
}

const cdIntoNewApp = () => {
  return new Promise((resolve) => {
    shell.cd(appDirectory)
    resolve()
  })
}

const installPackages = () => {
  return new Promise(resolve => {
    console.log("\nInstalling react-router-dom, axios, node-sass\n".cyan)
    shell.exec(`npm install --save react-router-dom axios node-sass`, () => {
      console.log("\nFinished installing packages\n".green)
      resolve()
    })
  })
}

const updateTemplates = () => {
  return new Promise(resolve => {
    const promises = []
    Object.keys(templates).forEach((fileName, i) => {
      promises[i] = new Promise(res => {
        if (typeof templates[fileName] === "object") {
          fs.mkdir(`${appDirectory}/src/${fileName}`, function (err) {
            if (err) { return console.log(err) }
            Object.keys(templates[fileName]).forEach((file) => {
              fs.writeFile(`${appDirectory}/src/${fileName}/${file}`, templates[fileName][file], function (err) {
                if (err) { return console.log(err) }
                res()
              })
            })
          })
        } else {
          if (fileName.includes("css")) {
            const [file, extension] = fileName.split(fileName[fileName.lastIndexOf(".")])
            shell.mv(`${appDirectory}/src/${file}.css`, `${appDirectory}/src/${fileName}`)
          }
          fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], function (err) {
            if (err) { return console.log(err) }
            res()
          })
        }
      })
    })
    Promise.all(promises).then(() => { resolve() })
  })
}

run()