# BCT Assignment  

## installing

[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Install Cypress for Mac, Linux, or Windows, then [get started](https://on.cypress.io/install).

```bash
npm install cypress --save-dev
```

## Running Cypress from scripts configuration mentioned in package.json file 

### Opening Cypress App

```bash
npm run cypress:open
```

## Running Cypress App

```bash
npm run cypress:run
```

## Running from the CLI

To run the project in headerless mode with chrome
```bash
npm run cy:chrome
```

To run the project in headed mode with chrome
```bash
npm run cy:chrome_headed
```

### runs all example projects in specific browser
### similar to cypress run --<headed/headless>--browser <name> --spec <relative path test filename>
  ```bash
  npm run cy:run -- --browser electron
  npm run cy:run --headed --browser electron
  npm run cy:run --headless --browser electron
  npm run cy:run --headless --browser electron cypress/e2e/test/<test_file_name>.cy.js
  ```

### generate allure report
1. install dependency on mac
   ```bash
   sudo npm install -g allure-commandline
   ```
2. To generate allure reports for all tests 
   ```bash
   cypress run --spec cypress/e2e/**/**.js --env allure=true
   ```
3. To generate allure reports at particular file path
   ```bash
   cypress run --env allure=true allureResultsPath= /allure-results
   ```
4. To generate html format from allure reports for all tests
   ```bash
   allure generate allure-results --clean -o allure-reports
   ```
