/// <reference types="cypress" />

describe('Product Search', () => {
    it('should search for a product', () => {
        cy.visit('https://demo.opencart.com/', {
            defaultCommandTimeout: 10000
        });
        
      cy.get('.nav > :nth-child(1) > .dropdown-toggle').click();
      cy.get(':nth-child(1) > .dropdown-menu > .dropdown-inner > .list-unstyled > :nth-child(2) > .nav-link').click();
      cy.get('#product-list').contains('Mac')
      
    });
  });
  