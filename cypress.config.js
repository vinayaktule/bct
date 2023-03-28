const { defineConfig } = require("cypress");
/// <reference types=”@shelex/cypress-allure-plugin” />
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  watchForFileChanges: false,
  video : true,
  e2e: {
    baseUrl : "https://wave-trial.getbynder.com/login/",
    setupNodeEvents(on, config) {
      this.screenshotOnRunFailure=true
      allureWriter(on, config); 
            return config;
    },
  },
});
