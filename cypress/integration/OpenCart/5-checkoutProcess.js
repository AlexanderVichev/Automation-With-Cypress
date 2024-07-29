/// <reference types="cypress" />

describe('Checkout', () => {
    it('should checkout', () => {
        cy.visit('https://demo.opencart.com/', {
            defaultCommandTimeout: 10000
        });
        
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').click();
      cy.wait(5000);
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click();
      cy.get('#product-list').contains('Mac')

      cy.get('[formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]').click({ force: true });
        cy.get('.alert').should('be.visible').and('contain', 'Success');
        cy.get(':nth-child(4) > a > .d-none').click();
        cy.get('#checkout-cart').contains('Mac')

        //proceed to checkout
        cy.get(':nth-child(7) > .text-end > .btn').click();

        // checkout as guest
        cy.get('#input-guest').click();

        // fill in details
        cy.get('#input-firstname').type('John');
        cy.get('#input-lastname').type('Doe');

        // Generate random email address with "temp mail" service
        cy.get('#input-email').type('soferej415@qodiq.com')

        // fill in address
        cy.get('#input-shipping-country').select('Bulgaria');
        cy.get('#input-shipping-city').type('Sofia');
        cy.get('#input-shipping-address-1').type('random adress');
        cy.get('#input-shipping-postcode').type('1000');
        cy.get('#input-shipping-zone').type('Sofia');
        //confirm order
        cy.get('#checkout-payment > .text-end').click(); // The button is disabled, so the test will fail


      
    });
  });