/// <reference types="cypress" />

describe('User Login', () => {
    it('should log in a registered user', () => {
        cy.visit('https://demo.opencart.com/', {
            defaultCommandTimeout: 10000
        });

        cy.get(':nth-child(2) > .dropdown > .dropdown-toggle > .d-none').click();
        cy.get(':nth-child(2) > .dropdown > .dropdown-menu > :nth-child(2) > .dropdown-item').click();
        cy.get('#input-email').type('johego8295@mfunza.com');
        cy.get('#input-password').type('password');
        cy.get('#form-login > .text-end > .btn').click({ force: true });
        cy.contains('Edit your account information').should('be.visible');
    });
});