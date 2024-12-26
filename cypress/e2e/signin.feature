Feature: User Sign In

Scenario: User successfully signs in
  Given I visit the sign-in page
  When I enter valid credentials
  Then I should be logged in and redirected to the dashboard