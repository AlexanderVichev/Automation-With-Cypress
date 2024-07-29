Feature: End to End Travel Validation

        Scenario: Travel Booking
        Given I open Agile Travel page
        When I fill the login details and proceed
        And I select the flight details and proceed
        Then I fill the passenger details and proceed
        When I fill the payment details and proceed
        And I validate confirmation message
        Then I logout from the application
        And I validate logout message