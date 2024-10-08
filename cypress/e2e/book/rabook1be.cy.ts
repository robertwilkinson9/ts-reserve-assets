/// <reference types="cypress" />

describe('rabook backend test', () => {
/*
  beforeEach(() => {
  })
*/

  it('check index hello world page', () => {
    cy.request({ url: "https://localhost:6176/", method: 'GET', failOnStatusCode: false}).as('hello');
    cy.get('@hello').its('status').should('eq', 200);
    cy.get('@hello').then((response) => {
      const rb = JSON.stringify(response.body);
      expect(rb).to.equal('"Hello World!"');
    })
  })

  it('check books api is available', () => {
    cy.request({ url: 'https://localhost:6176/api/all_books', method: 'GET', failOnStatusCode: false}).as('books');
    cy.get('@books').its('status').should('eq', 200);
  })

  it('check details about Emma are correct', () => {
    cy.request({ url: 'https://localhost:6176/api/all_books', method: 'GET', failOnStatusCode: false}).as('books');
    cy.get('@books').its('status').should('eq', 200);
    cy.get('@books').then((response) => {
      const emma_info = response.body['data'][0];

      const em_email = emma_info['email'];
      expect(em_email).to.equal('a@a.a');

      const em_book = emma_info['book'];
      expect(em_book).to.equal('Emma');

      const em_author = emma_info['author'];
      expect(em_author).to.equal('Jane Austen');
    })
  })
});
