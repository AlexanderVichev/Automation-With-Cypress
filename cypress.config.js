const { defineConfig } = require("cypress");

const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");



async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));
  require('cypress-mochawesome-reporter/plugin')(on); // !!!!!!!!
  
  

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
  
}

module.exports = defineConfig({

  

  defaultCommandTimeout: 10000,
  reporter: 'cypress-mochawesome-reporter',
  projectId: "q41ytq",

  retries: {
    runMode: 1,
 
  },

  e2e: {
    setupNodeEvents,
    // require('cypress-mochawesome-reporter/plugin')(on);

    // specPattern: 'cypress/integration/Examples/*.js',
    // specPattern: 'cypress/integration/*/*.js',
    // specPattern: 'cypress/integration/BDD/*.feature',
    // specPattern: 'cypress/integration/OpenCart/*.js',
    specPattern: 'cypress/integration/End-To-End-With-Cypress/*.js',
    // specPattern: 'cypress/integration/weatherData/*.js',
    // specPattern: 'cypress/integration/AgileTravel/*.feature',

    viewportWidth: 1280,
    viewportHeight: 800,
  },
});
