///<reference types="cypress" />
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    viewportHeight: 1000,
    viewportWidth: 1280,
    defaultCommandTimeout: 10000,
    chromeWebSecurity: false,
    specPattern: "cypress/specs/*/**/*.js",
    screenshotsFolder: "cypress/temp/screenshots",
    videosFolder: "cypress/temp/videos",
    reporter: "junit",
    supportFile: false,
    baseUrl: "https://maf-place-qa-fe.azurewebsites.net",
    reporterOptions: {
      mochaFile: "cypress/temp/reports/report-[hash].xml",
      toConsole: true
    },
    watchForFileChanges: false,
    testIsolation: false,
  },
});