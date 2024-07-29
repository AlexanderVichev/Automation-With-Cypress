/// <reference types="cypress" />

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

Given('I open Agile Travel page', () => {
    cy.visit('http://travel.agileway.net/login')
});

When('I fill the login details and proceed', () => {
    cy.get('#username').type('agileway')
    cy.get('#password').type('testwise')
    cy.get('#login-box > p:nth-child(4) > input:nth-child(1)').click()
})

Then('I select the flight details and proceed', () => {
    cy.get(':nth-child(2) > :nth-child(2) > select').select('New York')
    cy.get(':nth-child(3) > :nth-child(2) > select').select('Sydney')
    cy.get('#departDay').select('15')
    cy.get('#departMonth').select('December 2024')
    cy.get('#returnDay').select('20')
    cy.get('#returnMonth').select('December 2024')
    cy.get(':nth-child(2) > th > input').check()
    cy.get('[type="submit"]').click()
    cy.wait(3000)
})


Then('I fill the passenger details and proceed', function() {
    cy.get(':nth-child(1) > :nth-child(2) > input').type('firstName')
    cy.get(':nth-child(2) > :nth-child(2) > input').type('lastName')
    cy.get('[type="submit"]').click()
    cy.wait(3000)
})

When('I fill the payment details and proceed', function() {
    cy.get('[value="visa"]').check()
    cy.get(':nth-child(2) > :nth-child(2) > input').should('have.value', 'firstName lastName')
    cy.get(':nth-child(3) > :nth-child(2) > input').type('123456789')
    cy.get('[name="expiry_month"]').select('12')
    cy.get('p > input').click()
})

Then('I validate confirmation message', function() {
    cy.get('#confirmation > h2').should('have.text', 'Confirmation')
})

Then('I logout from the application', function() {
    cy.get('a').click()
}) 

Then('I validate logout message', function() {
    cy.get('#flash_notice').should('have.text', 'Signed out!')
})