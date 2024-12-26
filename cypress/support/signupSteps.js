import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SignupPage from '../pageObjects/signupPage';

const signupPage = new SignupPage();

Given('I visit the sign-up page', () => {
  signupPage.visit();
});

When('I enter valid user details', () => {
  const email = `user${Date.now()}@test.com`; // Generate unique email
  const password = 'Password123!';
  signupPage.fillSignupForm('John', 'Doe', email, password);
  signupPage.submitForm();
});

Then('I should be signed up and redirected to the homepage', () => {
  signupPage.confirmSignup();
});