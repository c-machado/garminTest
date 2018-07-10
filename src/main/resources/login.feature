Feature: As a user I want to be able to login to my personal account, so I can access and manage my personal data.

  Scenario: successful login in the Garmin homepage
    Given I'm in the Garmin Homepage
    When I click on Sign in option
    And I fill out the form with the correct information
    Then I am successfully logged in
