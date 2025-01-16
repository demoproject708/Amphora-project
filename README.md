# Cypress Automation UI and API
  -------------------------------------------

Using Cypress, we will create a test automation framework with the following features:

- The Page Object Model is a pattern
- BDD (Cucumber) support
- Multi-environment and multi-browser testing support
- Create reports that include videos and screenshots


## 1. Create an empty repo and clone

## 2. Initialize node project and install cypress

    npm init -y
    npm install cypress --save-dev
    npx cypress open
---------------------------------------------------

## 3. Add BDD support (Gherkin syntax)

      Install


      npm install @bahmutov/cypress-esbuild-preprocessor --save-dev
      npm install @badeball/cypress-cucumber-preprocessor --save-dev
---------------------------------------------------------------------

#4. add to config

`   cypress.config.js`

    ```javascript
    const { defineConfig } = require("cypress");
    const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
    const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
    const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

    module.exports = defineConfig({
    e2e: {
    setupNodeEvents(on, config) {
      on("file:preprocessor",
      createBundler({
        plugins: [createEsbuildPlugin.default(config)],
      }));
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      return config;
    },
	    specPattern: "**/*.feature",
    },
    });
---------------------------------------------------------------

#5.CREATE insede e2e folder feature file, pages and test files

    e2e
      |
    features
        |
         ---------Homepage.feature
         ---------RestAPI.feature
    Pages
        |
         ---------crud.js
         ---------homepage.js
         ---------newsletter.js
    Tests
        |
        -----------homepagetest.cy.js
        -----------test.cy.js
-----------------------------------------------------------------


6.configure the cypress-cucumber-preprocessor to using global

`package.json`

```javascript
"cypress-cucumber-preprocessor": {
    "step_definitions": ""cypress/e2e/Tests"
    "nonGlobalStepDefinitions": false
  }


## 5. add scripts to package.json 

`package.json`

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "run-tests": "npx cypress run --headed --browser chrome --spec cypress/e2e",
    "generate-multi-cucumber-html-report":"node cypress\\cucumber-html-report.js"
  },
-----------------------------------------------------------------------------------

##7. Define report folder

`cypress.config.js`

```javascript
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...
    },
    ...,
    videosFolder: "cypress/reports/videos",
    screenshotsFolder: "cypress/reports/screenshots",
  },
})
----------------------------------------------------------------------

## 7. Add Mochawesome reporter

### Install

```
npm install cypress-mochawesome-reporter --save-dev
```

### add to config

`cypress.config.js`

```javascript

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      ...,
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    ...,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'custom-title',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
  },
})

-------------------------------------------------------------------------

### add to cypress/support/e2e.js

`e2e.js`

```javascript
import 'cypress-mochawesome-reporter/register';
```
------------------------------------------------------------------------------


Run the script through CLI command

  - npm run run-tests
    (this command will run all the test cases)


