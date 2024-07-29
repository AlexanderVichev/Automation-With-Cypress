# Agile Travel End-to-End Tests with Cypress and Cucumber

This repository contains end-to-end tests for the Agile Travel application using Cypress and the Cucumber preprocessor. The tests cover the entire booking process from logging in to selecting flights, filling in passenger and payment details, and logging out.

## Prerequisites
- Node.js and npm installed
- Cypress installed globally or as a project dependency
- Cypress Cucumber preprocessor installed

## Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
    ```sh
    npm install
    ```

## Test Script

### End-to-End Travel Validation
This test script automates the travel booking process on the Agile Travel website.

- **File**: `cypress/integration/agileTravel.spec.js`
- **Feature File**: `cypress/integration/features/agileTravel.feature`
- **Description**: 
  - Visit the Agile Travel login page.
  - Log in with provided credentials.
  - Select flight details.
  - Fill in passenger details.
  - Fill in payment details.
  - Validate the confirmation message.
  - Log out and validate the logout message.
