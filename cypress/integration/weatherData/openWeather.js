/// <reference types="cypress" />

describe('Weather Data Verification', () => {
    beforeEach(() => {
      cy.fixture('weatherData').then(function (data) {
        this.data = data;
      });
    });
  
    it('Verify weather data for a given city', function () {
      // Visit OpenWeather website
      cy.visit('https://openweathermap.org/');
  
      // Accept cookies if prompted
      if (('.gdpr-banner'), 'visible'){
        cy.get('.gdpr-banner__opt-in > .gdpr-banner__button').click({ force: true });
      }
      // Search for the city
      cy.get('.search-container > input:nth-child(1)').type(this.data.city);
      cy.get('.button-round').click();
      cy.get(':nth-child(1) > [style="width: 140px;"]').click({ force: true });
  
      // Wait for search results to load
      cy.wait(3000);
  
      // Verify city name
      cy.get('.current-container > :nth-child(1) > h2').should('contain', this.data.city);
  
      // Verify temperature
      cy.get('.current-temp').should('contain', this.data.temperature); // Fails 
  
      // Verify weather condition
      cy.get(':nth-child(2) > .bold').should('contain', this.data.condition);
    });
  });
  