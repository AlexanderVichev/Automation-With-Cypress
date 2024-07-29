
/// <reference types="cypress" />

describe('Contact form', () => {
    it('should send an inquiry', () => {
        cy.visit('https://demo.opencart.com/', {
            defaultCommandTimeout: 10000
        });
        
        cy.get(':nth-child(2) > .list-unstyled > :nth-child(1) > a').click();
        cy.get('#input-name').type('ExampleName');
        cy.get('#input-email').type('soferej415@qodiq.com')
        cy.get('#input-enquiry').type('ExampleEnquiry');

        cy.get('.text-end > .btn').click();

        // validate success message
        cy.get('#content').should('be.visible').and('contain', 'Your enquiry has been successfully sent to the store owner!');
        
        // Note - Retry test if it fails on the first run


      
    });
  });