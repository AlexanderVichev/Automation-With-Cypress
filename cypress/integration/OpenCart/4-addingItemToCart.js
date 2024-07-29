/// <reference types="cypress" />

describe('Cart add', () => {
    it('should add product to cart', () => {
        cy.visit('https://demo.opencart.com/', {
            defaultCommandTimeout: 10000
        });
        
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').click();
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click();
      cy.get('#product-list').contains('Mac')

      cy.get('[formaction="https://demo.opencart.com/en-gb?route=checkout/cart.add"]').click({ force: true });
      //validate "Success" message
        cy.get('.alert').should('be.visible').and('contain', 'Success');
        // check the cart and validate product is added
        cy.get(':nth-child(4) > a > .d-none').click();
        cy.get('#checkout-cart').contains('Mac')
      
    });
  });