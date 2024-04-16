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
})
