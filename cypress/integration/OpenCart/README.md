# OpenCart Automated Tests

This repository contains automated tests for the OpenCart demo website, implemented using Cypress. The tests cover various functionalities including user registration, login, product search, cart operations, checkout, and contact form submission.

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

## Test Scripts

### User Registration
This test covers the user registration process on the OpenCart demo website.

- **File**: `cypress/integration/userRegistration.spec.js`
- **Description**: 
  - Visit the OpenCart demo website.
  - Register a new user with randomly generated email.
  - Verify that the account creation message is displayed.

### User Login
This test covers the user login process on the OpenCart demo website.

- **File**: `cypress/integration/userLogin.spec.js`
- **Description**: 
  - Visit the OpenCart demo website.
  - Log in with the registered user credentials.
  - Verify that the account information page is visible.

### Product Search
This test performs a product search on the OpenCart demo website.

- **File**: `cypress/integration/productSearch.spec.js`
- **Description**: 
  - Visit the OpenCart demo website.
  - Search for a specific product (e.g., Mac).
  - Verify that the search results contain the product.

### Cart Add
This test covers adding a product to the cart on the OpenCart demo website.

- **File**: `cypress/integration/cartAdd.spec.js`
- **Description**: 
  - Visit the OpenCart demo website.
  - Add a product to the cart.
  - Verify that the product is added to the cart and the success message is displayed.

### Checkout
This test covers the checkout process on the OpenCart demo website.

- **File**: `cypress/integration/checkout.spec.js`
- **Description**: 
  - Visit the OpenCart demo website.
  - Add a product to the cart and proceed to checkout.
  - Fill in the guest checkout details.
  - Note: The test will fail at the order confirmation step as it's a real website.

### Contact Form
This test sends an inquiry through the contact form on the OpenCart demo website.

- **File**: `cypress/integration/contactForm.spec.js`
- **Description**: 
  - Visit the OpenCart demo website.
  - Fill in the contact form with name, email, and inquiry.
  - Verify that the success message is displayed.

## Running the Tests
Run the tests using the Cypress Test Runner:
```sh
npx cypress open
