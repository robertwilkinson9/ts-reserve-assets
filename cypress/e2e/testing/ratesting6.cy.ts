/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('ratesting app', () => {
  beforeEach(() => {
    cy.visit('https://10.0.2.15:5177/');
  })

  it('displays two calendar datepickers items by default', () => {
    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_label"]').should('have.length', 2);
    cy.get('[data-testid="calendar_label"]').first().should('have.text', 'Start DateTime')
    cy.get('[data-testid="calendar_label"]').last().should('have.text', 'End DateTime')
  })

  it('has a bucket label "Testing_bucket"', () => {
    const end_datetime = new Date(); // our first datepicker is initialised to now
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);
    const end_datetime_string = end_datetime.toISOString();
    const end_datetime_enter = end_datetime_string.concat('{enter}');
    console.log(`end_datetime_enter is ${end_datetime_enter}`);

    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime_enter); // set the end calendar to an hour hence

    cy.get('[data-testid="bucket_label_label"]').should('be.visible').and('contain', 'Testing_bucket');
    cy.get('[data-testid="bucket_button_checked_label"]').should('be.visible').and('contain', 'Second');
  })

  it('has a select pulldown label "Testing_item_name"', () => {
    const end_datetime = new Date(); // our first datepicker is initialised to now
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);
    const end_datetime_string = end_datetime.toISOString();
    const end_datetime_enter = end_datetime_string.concat('{enter}');
    console.log(`end_datetime_enter is ${end_datetime_enter}`);

    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime_enter); // set the end calendar to an hour hence

    cy.get('[data-testid="items_label"]').should('be.visible').and('contain', 'Testing_item_name');
    cy.get('[data-testid="item"]').should('be.visible');
    cy.get('[data-testid="item"]').should('have.length', 3);
    cy.get('[data-testid="item"]').first().should('have.text', 's4')
    cy.get('[data-testid="item"]').last().should('have.text', 's6')
  })

  it('has an email input box', () => {
    cy.get('[data-testid="emailaddress_label"]').should('be.visible');
    cy.get('[data-testid="emailaddress_label"]').should('be.visible').and ('contain', 'Email address');
    cy.get('[data-testid="email_input"]').should('be.visible');
  })

  it('has 2 auxilliary input boxes', () => {
    cy.get('[data-testid="input_label"]').should('be.visible');
    cy.get('[data-testid="input_label"]').should('have.length', 2);
    cy.get('[data-testid="input_label"]').first().should('have.text', 'auxilliary used in db')
    cy.get('[data-testid="input_label"]').last().should('have.text', 'auxilliary not used in db')
  })

  it('has a submit button labelled "Reserve testing"', () => {
    cy.get('[data-testid="form_submit_button"]').should('be.visible');
    cy.get('[data-testid="form_submit_button"]').should('be.visible').and('contain', 'Reserve testing');
  })
})
