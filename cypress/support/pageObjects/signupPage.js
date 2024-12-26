class SignupPage {
    visit() {
      cy.visit('/customer/account/create/');
    }
  
    fillSignupForm(email, password, firstName, lastName) {
      cy.get('#firstname').type(firstName);
      cy.get('#lastname').type(lastName);
      cy.get('#email_address').type(email);
      cy.get('#password').type(password);
      cy.get('#password-confirmation').type(password);
    }
  
    submitForm() {
      cy.get('button[title="Register"]').click();
    }
  
    confirmSignup() {
      cy.url().should('include', '/customer/account/');
    }
  }
  
  export default SignupPage;
  