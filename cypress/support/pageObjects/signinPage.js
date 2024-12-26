class SigninPage {
    visit() {
      cy.visit('/customer/account/login/');
    }
  
    fillLoginForm(email, password) {
      cy.get('#email').type(email);
      cy.get('#pass').type(password);
    }
  
    submitForm() {
      cy.get('button[title="Login"]').click();
    }
  
    confirmSignin() {
      cy.url().should('include', '/customer/account/');
    }
  }
  
  export default SigninPage;
  