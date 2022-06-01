// LoginPage.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('LoginTest', () => {

  it('Tests logging in with incorrect email and password (Scenario 1)', () => {
    const email = 'aaa@instabug.com';
    const password = 'A11223344'; 
    cy.visit('/');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('form > button').click();
    cy.get('.data-incorrect').should('have.text', 'Your email and/or password are incorrect');
  });

  it('Tests logging in with correct email and incorrect password (Scenario 2)', () => {
    const email = 'mohamed@instabug.com';
    const password = 'A11223344'; 
    cy.visit('/');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('form > button').click();
    cy.get('.data-incorrect').should('have.text', 'Your email and/or password are incorrect');
  });

  it('Tests logging in with correct email and password (Scenario 3)', () => {
    const email = 'mohamed@instabug.com';
    const password = 'A12345678';
    cy.visit('/');
    cy.get('input[name=email]').type(email);
    cy.get('input[name=password]').type(password);
    cy.get('form > button').click();
    cy.url().should('include', `/welcome/${email}`);
  });

  it('Tests typing invalid email address (Scenario 4)', () => {
    cy.visit('/');
    cy.get('input[name=email]').type('dddd');
    //unfocusing the textbox
    cy.get('.right-part').click();
    cy.get('.email-error').should('have.css', 'color', 'rgb(255, 0, 0)');
    cy.get('input[name=email]').should('have.css', 'border-color', 'rgb(255, 0, 0)');

  });

});
