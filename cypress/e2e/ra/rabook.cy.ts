/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('rabook app', () => {
  beforeEach(() => {
    cy.visit('https://10.0.2.15:5176/');
  })

  it('displays two calendar datepickers items by default', () => {
    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_label"]').should('have.length', 2);
    cy.get('[data-testid="calendar_label"]').first().should('have.text', 'Start DateTime')
    cy.get('[data-testid="calendar_label"]').last().should('have.text', 'End DateTime')

  })

  it('has a bucket label "Author"', () => {
    cy.get('[data-testid="bucket_label_label"]').should('be.visible').and('contain', 'Author');
    cy.get('[data-testid="bucket_button_checked_label"]').should('be.visible').and('contain', 'Jane Austen');
    cy.get('[data-testid="bucket_button_unchecked_label"]').should('be.visible').and('contain', 'George Orwell');
  })

  it('has a select pulldown label "Book"', () => {
    cy.get('[data-testid="items_label"]').should('be.visible').and('contain', 'Book');
    cy.get('[data-testid="item"]').should('be.visible');
    cy.get('[data-testid="item"]').should('have.length', 6);
    cy.get('[data-testid="item"]').first().should('have.text', 'Emma')
    cy.get('[data-testid="item"]').last().should('have.text', 'Sense and Sensibility')
  })

  it('has an email input box', () => {
    cy.get('[data-testid="emailaddress_label"]').should('be.visible');
    cy.get('[data-testid="emailaddress_label"]').should('be.visible').and ('contain', 'Email address');
    cy.get('[data-testid="email_input"]').should('be.visible');
  })

  it('has a submit button labelled "Reserve book"', () => {
    cy.get('[data-testid="form_submit_button"]').should('be.visible');
    cy.get('[data-testid="form_submit_button"]').should('be.visible').and('contain', 'Reserve book');
  })

  it('reserve Emma for an hour hence', () => {
    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    const start_datetime = new Date(); // our first datepicker initialised to now
    const end_datetime = start_datetime;
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

    cy.get('[data-testid="item"]').first().should('have.text', 'Emma');
    cy.get('[data-testid="items_select"]').select('Emma', {force: true})

    cy.get('[data-testid="email_input"]').type('a@a.a');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
    // should test that the reservation is correctly stored through the back end
  })

  it('set now reserve Mansfield Park - Emma unavailable now', () => {
    const start_datetime = new Date(); // our first datepicker initialised to now
    const end_datetime = start_datetime;
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
    // should test that the reservation is correctly stored through the back end
  })
})
