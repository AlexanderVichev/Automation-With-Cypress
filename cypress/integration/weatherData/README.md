# Weather Data Verification Test

## Description
This Cypress test verifies weather data for a given city using the OpenWeather website. The test includes the following steps:
- Visit the OpenWeather website.
- Accept cookies if prompted.
- Search for the specified city.
- Verify the city name, temperature, and weather condition.

## Test Script
The test script is located in the `cypress/integration/weatherDataVerification.spec.js` file.

## Setup
1. Ensure Cypress is installed: `npm install cypress`.
2. Add a `weatherData.json` file in the `cypress/fixtures` folder with the following structure:
    ```json
    {
      "city": "CityName",
      "temperature": "ExpectedTemperature",
      "condition": "ExpectedCondition"
    }
    ```

## Running the Test
Run the test using the Cypress Test Runner:
```sh
npx cypress open
