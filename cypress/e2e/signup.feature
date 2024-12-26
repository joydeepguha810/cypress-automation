Feature: User Sign Up

Scenario: User successfully signs up
  Given I visit the sign-up page
  When I enter valid user details
  Then I should be signed up and redirected to the homepage