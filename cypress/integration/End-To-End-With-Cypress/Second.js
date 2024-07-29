/// <reference types="cypress" />

describe('New Car', () => {
    let generatedEmail;

    it('should register, validate email, and pick a nice car', () => {
        // Step 1: Generate a temporary email
        cy.origin('https://tempail.com', () => {
            cy.visit('/');
            // Close any pop-ups if they appear
            cy.get('body').then($body => {
                if ($body.find('.popup-close').length) {
                    cy.get('.popup-close').click();
                }
            });
            cy.get('#eposta_adres').invoke('text').then((email) => {
                generatedEmail = email.trim();
            });
        });

        // Step 2: Visit registration page and register with the generated email
        cy.then(() => {
            cy.visit('https://www.mobile.bg/users/registration');
            cy.get('[type="text"]').type(generatedEmail);
            cy.get('[name="passw"]').type('password');
            cy.get('[name="passc"]').type('password');
            cy.get('.agree > input').check();
            cy.get('.loginButton').click();
        });

        // Step 3: Go back to Tempail to validate email
        cy.origin('https://tempail.com', () => {
            cy.visit('/');
            cy.wait(10000); // Wait for the email to arrive
            // Close any pop-ups if they appear
            cy.get('body').then($body => {
                if ($body.find('.popup-close').length) {
                    cy.get('.popup-close').click();
                }
            });
            cy.get('.mail').contains('Verify your email').click();
            cy.get('.mail-content').contains('Verify').click();
        });

        // Step 4: Return to login page and continue with the script
        cy.then(() => {
            cy.visit('https://www.mobile.bg/');
            cy.get('[data-link="//www.mobile.bg/users/login"] > strong').click();
            cy.get(':nth-child(1) > input').check();
            cy.get('[type="text"]').type(generatedEmail);
            cy.get('#passwordfield').type('password');
            cy.get('.loginButton').click();

            // Step 5: Navigate to search page and search for a car
            cy.get('[href="//www.mobile.bg/search/avtomobili-dzhipove"]').click();
            cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > :nth-child(1) > .sw145new').select('Mercedes-Benz');
            cy.get('.pubAdvForm > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3) > select:nth-child(1)').select('CLS 63 AMG');
            cy.get(':nth-child(2) > .sw90new').type('10000');
            cy.get(':nth-child(4) > .sw90new').type('80000');
            cy.get(':nth-child(3) > tbody > :nth-child(3) > :nth-child(5) > .sw145new').select('2010');
            cy.get(':nth-child(3) > tbody > :nth-child(3) > :nth-child(7) > .sw145new').select('2017');
            cy.get(':nth-child(5) > tbody > :nth-child(3) > :nth-child(1) > .sw145new').select('Бензинов');
            cy.get(':nth-child(5) > tbody > :nth-child(3) > :nth-child(7) > .sw145new').select('Черен');
            cy.get('[width="300"][rowspan="3"] > input').click();

            // Step 6: Choose a car and browse through photos
            cy.get('#ida11712085732572848 > .text > .zaglavie > .title').click();
            for (let i = 0; i < 10; i++) {
                cy.get('.Next > ico').click({ force: true });
                cy.wait(3000);
                cy.get('.pop-btn-ok').then($btn => {
                    if ($btn.is(':visible')) {
                        cy.wrap($btn).click({ force: true });
                    }
                });
            }
        });
    });
});
