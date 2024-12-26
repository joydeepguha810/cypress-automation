const { defineConfig } = require("cypress");
const cucumber = require('@badeball/cypress-cucumber-preprocessor').default;

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://magento.softwaretestingboard.com",
    supportFile: "cypress/support/commands.js",  // Path to commands file
    specPattern: "**/*.feature",  // Glob pattern for feature files
    setupNodeEvents(on, config) {
      // Register the Cucumber preprocessor
      on("file:preprocessor", cucumber());

      // Return the config object
      return config;
    },
  },
});