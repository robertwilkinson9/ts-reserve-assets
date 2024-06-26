/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('rabook app', () => {
/*
  beforeEach(() => {
  })
*/

  it('set end calendar datepickers to an hour hence', () => {
    cy.visit('https://10.0.2.15:5176/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').should('have.length', 5);
    cy.get('[data-testid="item"]').first().should('have.text', 'Mansfield Park');
    cy.get('[data-testid="items_select"]').select('Mansfield Park', {force: true});
    cy.get('[data-testid="email_input"]').type('b@b.b');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })
})
