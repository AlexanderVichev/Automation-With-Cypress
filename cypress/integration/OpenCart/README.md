
### `README.md` for User Registration and Login

```markdown
# User Registration and Login Tests

## Description
These Cypress tests cover the user registration and login processes on the OpenCart demo website.

### User Registration
- Visit the OpenCart demo website.
- Register a new user with randomly generated email.
- Verify that the account creation message is displayed.

### User Login
- Visit the OpenCart demo website.
- Log in with the registered user credentials.
- Verify that the account information page is visible.

## Test Script
The test scripts are located in the `cypress/integration/userRegistration.spec.js` and `cypress/integration/userLogin.spec.js` files.

## Setup
1. Ensure Cypress is installed: `npm install cypress`.
2. Update the email address in the test scripts with a valid temporary email for each test run.

## Running the Tests
Run the tests using the Cypress Test Runner:
```sh
npx cypress open
