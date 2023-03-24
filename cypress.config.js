const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  video : false,
  e2e: {
    baseUrl : "https://wave-trial.getbynder.com/login/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
