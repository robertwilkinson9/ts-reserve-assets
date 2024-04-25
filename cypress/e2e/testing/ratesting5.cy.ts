/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('ratesting app', () => {
  beforeEach(() => {
    cy.visit('https://10.0.2.15:5177/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

  })

  it('Reserve "f3"', () => {
    cy.get('[data-testid="item"]').should('have.length', 1);
    cy.get('[data-testid="item"]').first().should('have.text', 'f3');
    cy.get('[data-testid="items_select"]').select('f3', {force: true});
    cy.get('[data-testid="email_input"]').type('c@c.c');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })
})
