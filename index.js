#!/usr/bin/env node
const shell = require('shelljs')
const colors = require('colors')
const fs = require('fs')
const program = require("commander")
const templates = require('./templates/templates.js')
const reduxTemplates = require('./redux-templates/templates.js')

const appName = process.argv[2]
const appDirectory = `${process.cwd()}/${appName}`

program
  .option("-r, --redux", "Add Redux to your project")
  .action((params) => {
    if (params.redux) {
      console.log("Redux option activated")
    }
  })
  .parse(process.argv)

const run = async () => {
  // const success = await createReactApp()
  // if (!success) {
  //   console.log('Something went wrong while trying to create a new React app using create-react-app'.red)
  //   return false
  // }
  await cdIntoNewApp()
  // await installPackages()
  await updateTemplates()
  if (program.opts().redux) {
    await addReduxTemplates()
  }
  console.log("All done")
}

const createReactApp = () => {
  return new Promise((resolve) => {
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
  return new Promise((resolve) => {
    console.log(`\nInstalling react-router-dom, axios, sass${program.opts().redux ? ", react-redux, redux, redux-thunk, redux-devtools-extension" : ""}\n`.cyan)
    shell.exec(`npm install --save react-router-dom axios sass${program.opts().redux ? " react-redux redux redux-thunk redux-devtools-extension" : ""}`, () => {
      console.log("\nFinished installing packages\n".green)
      resolve()
    })
  })
}

const updateTemplates = () => {
  return new Promise((resolve) => {
    const promises = []
    Object.keys(templates).forEach((fileName, i) => {
      promises[i] = new Promise(res => {
        if (typeof templates[fileName] === "object") {
          fs.mkdir(`${appDirectory}/src/${fileName}`, (err) => {
            if (err) { console.log(err) }
            Object.keys(templates[fileName]).forEach((file) => {
              console.log(`${appDirectory}/src/${fileName}/${file}`)
              fs.writeFile(`${appDirectory}/src/${fileName}/${file}`, templates[fileName][file], (err) => {
                if (err) { console.log(err) }
                res()
              })
            })
          })
        } else {
          if (fileName.includes("css")) {
            const [file, extension] = fileName.split(fileName[fileName.lastIndexOf(".")])
            shell.mv(`${appDirectory}/src/${file}.css`, `${appDirectory}/src/${fileName}`)
          }
          fs.writeFile(`${appDirectory}/src/${fileName}`, templates[fileName], (err) => {
            if (err) { console.log(err) }
            res()
          })
        }
      })
    })
    Promise.all(promises).then(() => { resolve() })
  })
}

const addReduxTemplates = () => {
  return new Promise((resolve) => {
    const promises = []
    Object.keys(reduxTemplates).forEach((fileName, i) => {
      promises[i] = new Promise((res) => {
        if (typeof reduxTemplates[fileName] === "object") {
          if (fs.existsSync(`${appDirectory}/src/${fileName}`)) {
            Object.keys(reduxTemplates[fileName]).forEach((file) => {
              fs.writeFile(`${appDirectory}/src/${fileName}/${file}`, reduxTemplates[fileName][file], (err) => {
                if (err) { console.log(err) }
                res()
              })
            })
          } else {
            fs.mkdir(`${appDirectory}/src/${fileName}`, (err) => {
              if (err) { console.log(err) }
              Object.keys(reduxTemplates[fileName]).forEach((file) => {
                fs.writeFile(`${appDirectory}/src/${fileName}/${file}`, reduxTemplates[fileName][file], (err) => {
                  if (err) { console.log(err) }
                  res()
                })
              })
            })
          }
        } else {
          fs.writeFile(`${appDirectory}/src/${fileName}`, reduxTemplates[fileName], (err) => {
            if (err) { console.log(err) }
            res()
          })
        }
      })
    })
    Promise.all(promises).then(() => { resolve() })
  })
}

run()
