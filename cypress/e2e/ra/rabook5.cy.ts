/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('rabook app', () => {
/*
  beforeEach(() => {
  })
*/

  it('Reserve "Northanger Abbey"', () => {
    cy.visit('https://10.0.2.15:5176/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').should('have.length', 4);
    cy.get('[data-testid="item"]').first().should('have.text', 'Northanger Abbey');
    cy.get('[data-testid="items_select"]').select('Northanger Abbey', {force: true});
    cy.get('[data-testid="email_input"]').type('c@c.c');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "Persuasion"', () => {
    cy.visit('https://10.0.2.15:5176/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').should('have.length', 3);
    cy.get('[data-testid="item"]').first().should('have.text', 'Persuasion');
    cy.get('[data-testid="items_select"]').select('Persuasion', {force: true});
    cy.get('[data-testid="email_input"]').type('d@d.d');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "Pride and Prejudice"', () => {
    cy.visit('https://10.0.2.15:5176/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').should('have.length', 2);
    cy.get('[data-testid="item"]').first().should('have.text', 'Pride and Prejudice');
    cy.get('[data-testid="items_select"]').select('Pride and Prejudice', {force: true});
    cy.get('[data-testid="email_input"]').type('e@e.e');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "Sense and Sensibility"', () => {
    cy.visit('https://10.0.2.15:5176/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').should('have.length', 1);
    cy.get('[data-testid="item"]').first().should('have.text', 'Sense and Sensibility');
    cy.get('[data-testid="items_select"]').select('Sense and Sensibility', {force: true});
    cy.get('[data-testid="email_input"]').type('f@f.f');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })
})
