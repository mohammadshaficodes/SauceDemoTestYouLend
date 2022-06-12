# Saucedemo

**To run this project**

You will need Cypress installed, please follow the guide on https://docs.cypress.io/guides/getting-started/installing-cypress#Installing (PLEASE USE CYPRESS V9.X, NOT V10)

Clone this repository on your machine, or download the zip folder, unzip and open in your IDE

To run the test in the browser from the root directory, run the following command and click the feature file displayed in the cypress client:

npx cypress open 

To run the test in headless mode, from the root directory, run:

npx cypress run

**The file structure is as follows:**

- The feature file is in the integration folder, with the corresponding step definitions located in the identically named folder
- Page object files are in the pageObjects folder
- Validations are in the validations folder
- User data is kept in testUser.json, in the fixtures folder

**Tech Debt & Improvements**

- More assertions on each page for more complete testing
- Initialise page objects in a separate file, and import that file into the step definitions folder (Singleton design pattern)
- Use regular expressions (RegEx) to remove text and special characters when obtaining prices, when multiple items are in the basket


