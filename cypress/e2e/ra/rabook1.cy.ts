/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('rabook app', () => {
  beforeEach(() => {
    cy.visit('https://10.0.2.15:5176/');
  })

  it('set end calendar datepickers to an hour hence', () => {
    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);

    cy.get('[data-testid="item"]').first().should('have.text', 'Emma');
    cy.get('[data-testid="items_select"]').select('Emma')

    cy.get('[data-testid="email_input"]').type('a@a.a');

    const start_datetime = new Date(); // our first datepicker initialised to now
    const end_datetime = start_datetime;
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence
    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
    // should test that the reservation is correctly stored through the back end
  })
})
