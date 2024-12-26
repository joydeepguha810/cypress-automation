import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SigninPage from '../pageObjects/signinPage';

const signinPage = new SigninPage();

Given('I visit the sign-in page', () => {
  signinPage.visit();
});

When('I enter valid credentials', () => {
  const email = 'user@test.com'; // Use the same email from sign-up
  const password = 'Password123!';
  signinPage.fillLoginForm(email, password);
  signinPage.submitForm();
});

Then('I should be logged in and redirected to the dashboard', () => {
  signinPage.confirmSignin();
});