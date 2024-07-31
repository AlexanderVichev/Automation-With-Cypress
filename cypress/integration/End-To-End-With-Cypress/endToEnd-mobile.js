/// <reference types="cypress" />

describe('New Car', () => {

    it('should pick a nice car', () => {
        cy.visit('https://www.mobile.bg/', {
            defaultCommandTimeout: 10000
        })

        //   // Navigate to Register page
        //   cy.get('[data-link="//www.mobile.bg/users/registration"]').click();

        //   // Register a new user with a temporary e-mail address
        //   cy.get('[type="text"]').type('soferej415@qodiq.com'); 
        //   cy.get('[name="passw"]').type('password');
        //   cy.get('[name="passc"]').type('password');
        //   cy.get('.agree > input').check();
        //   cy.get('.loginButton').click();

        // cookies
        // Custom function to check visibility and click
        const clickIfVisible = (selector) => {
            cy.get('body').then(($body) => {
                // Check if the element exists in the DOM
                if ($body.find(selector).length) {
                    // Check if the element is visible
                    cy.get(selector, { timeout: 0 }).then(($el) => {
                        if ($el.is(':visible')) {
                            // Click the element
                            cy.wrap($el).click({ force: true }).then(() => {
                                cy.log('Element clicked');
                            }).catch((e) => {
                                cy.log('Failed to click the element but continuing the test', e);
                            });
                        } else {
                            cy.log('Element not visible');
                        }
                    }).catch((e) => {
                        cy.log('Element not found in DOM', e);
                    });
                } else {
                    cy.log('Element does not exist');
                }
            });
        };

        // Usage
        clickIfVisible('.fc-cta-consent > .fc-button-label');

        // Need to generate a random email address and change this if you want to use this(the upper) functionality

        // Login
        cy.get('[data-link="//www.mobile.bg/users/login"] > strong').click();
        cy.get(':nth-child(1) > input').check();
        cy.get('[type="text"]').type('soferej415@qodiq.com')
        cy.get('#passwordfield').type('password')
        cy.get('.loginButton').click();

        // navigate to search page
        cy.get('[href="//www.mobile.bg/search/avtomobili-dzhipove"]').click();
        // Choose a car and its model
        cy.get(':nth-child(2) > :nth-child(1) > :nth-child(3) > :nth-child(1) > .sw145new').select('Mercedes-Benz');
        cy.get('.pubAdvForm > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(3) > td:nth-child(3) > select:nth-child(1)').select('CLS 63 AMG');
        // Choose a price range
        cy.get(':nth-child(2) > .sw90new').type('10000');
        cy.get(':nth-child(4) > .sw90new').type('80000');
        // Choose a year range
        cy.get(':nth-child(3) > tbody > :nth-child(3) > :nth-child(5) > .sw145new').select('2010');
        cy.get(':nth-child(3) > tbody > :nth-child(3) > :nth-child(7) > .sw145new').select('2017');
        //choose engine type
        cy.get(':nth-child(5) > tbody > :nth-child(3) > :nth-child(1) > .sw145new').select('Бензинов');
        //choose color
        cy.get(':nth-child(5) > tbody > :nth-child(3) > :nth-child(7) > .sw145new').select('Черен');
        // search for the car
        cy.get('[width="300"][rowspan="3"] > input').click();
        // choose a car
        cy.get('#ida11712085732572848 > .text > .zaglavie > .title').click();

        // scroll down a bit 
        
        // Browse through photos
        for (let i = 0; i < 10; i++) {
            cy.get('.Next > ico').click({ force: true });
            cy.wait(3000);
            if (('.pop-btn-ok', "visible")) {
                cy.get('.pop-btn-ok').click({ force: true });
            }
        }

    });
})





// Add 3 products to the cart in 3 different ways

// Navigate to the cart and verify the products are there

// Remove 1 product from the cart

// Validate the total amount

// Proceed to checkout

// Fill in the billing details

// Fill in the shipping details

// Choose a payment method

// Confirm the order <-- We are missing this step cause we are using a real website. 
