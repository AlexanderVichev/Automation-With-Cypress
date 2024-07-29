/// <reference types="cypress" />

describe('User Registration', () => {

    it('should register a new user', () => {
      cy.visit('https://demo.opencart.com/', {
        defaultCommandTimeout: 10000
      });

      cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .fa-caret-down').click();
      cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click();

      cy.get('#input-firstname').type('John');
      cy.get('#input-lastname').type('Doe');
      // Generate random email address with "temp mail" service
      cy.get('#input-email').type(`johego8295@mfunza.com`);  // <-- Change e-mail for new tests
      cy.get('#input-password').type('password');
      cy.get('.text-end > .form-check > .form-check-input').check();
      cy.get('.text-end > .btn').click({ force: true });

      cy.contains('Your Account Has Been Created!').should('be.visible');
    });
  });
  