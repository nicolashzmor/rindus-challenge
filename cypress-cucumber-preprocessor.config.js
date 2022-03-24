const path = require("path")

const stepDefinitionsPath = path.resolve(process.cwd(), "./cypress/features")
const outputFolder = path.resolve(process.cwd(), "./cypress/cyreport/cucumber-json")

console.log(stepDefinitionsPath)

module.exports = {
  nonGlobalStepDefinitions: true,
  stepDefinitions: stepDefinitionsPath,
  commonPath: stepDefinitionsPath,
  cucumberJson: {
    generate: true,
    outputFolder: outputFolder,
    filePrefix: "",
    fileSuffix: ".cucumber",
  },
}
