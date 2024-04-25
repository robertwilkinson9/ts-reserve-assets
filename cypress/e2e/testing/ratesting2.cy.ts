/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('ratesting app', () => {
/*
  beforeEach(() => {
  })
*/

  it('set end calendar datepickers to an hour hence', () => {
    cy.visit('https://10.0.2.15:5177/');

    const end_datetime = new Date(); // our first datepicker is initialised to now
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);
    const end_datetime_string = end_datetime.toISOString();
    const end_datetime_enter = end_datetime_string.concat('{enter}');
    console.log(`end_datetime_enter is ${end_datetime_enter}`);

    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime_enter); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').should('have.length', 2);
    cy.get('[data-testid="item"]').first().should('have.text', 'f2');
    cy.get('[data-testid="items_select"]').select('f2', {force: true});
    cy.get('[data-testid="email_input"]').type('b@b.b');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })
})
