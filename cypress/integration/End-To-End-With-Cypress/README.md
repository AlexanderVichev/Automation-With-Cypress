# Car Selection Test

This repository contains an automated test for selecting a car on the Mobile.bg website, implemented using Cypress.
## Prerequisites
- Node.js and npm installed
- Cypress installed globally or as a project dependency

## Setup
1. Clone the repository.
2. Navigate to the project directory.
3. Install the dependencies:
    ```sh
    npm install
    ```

## Test Script
This test selects a car on the Mobile.bg website.

- **File**: `cypress/integration/carSelection.spec.js`
- **Description**: 
  - Visit the Mobile.bg website.
  - Log in with a registered user.
  - Search for a specific car model and price range.
  - Browse through the car photos.

## Running the Test
Run the test using the Cypress Test Runner:
```sh
npx cypress open
