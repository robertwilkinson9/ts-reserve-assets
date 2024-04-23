/// <reference types="cypress" />

describe('radesk backend test', () => {
/*
  beforeEach(() => {
  })
*/

  it('check index hello world page', () => {
    cy.request({ url: "https://localhost:6179/", method: 'GET', failOnStatusCode: false}).as('hello');
    cy.get('@hello').its('status').should('eq', 200);
    cy.get('@hello').then((response) => {
      const rb = JSON.stringify(response.body);
      expect(rb).to.equal('"Hello World!"');
    })
  })

  it('check desks api is available', () => {
    cy.request({ url: 'https://localhost:6179/api/all_desks', method: 'GET', failOnStatusCode: false}).as('desks');
    cy.get('@desks').its('status').should('eq', 200);
  })

  it('check details about gf07 are correct', () => {
    cy.request({ url: 'https://localhost:6179/api/all_desks', method: 'GET', failOnStatusCode: false}).as('desks');
    cy.get('@desks').its('status').should('eq', 200);
    cy.get('@desks').then((response) => {
      const gf07_info = response.body['data'][0];

      const em_email = gf07_info['email'];
      expect(em_email).to.equal('a@a.a');

      const em_desk = gf07_info['desk'];
      expect(em_desk).to.equal('gf07');

      const em_floor = gf07_info['floor'];
      expect(em_floor).to.equal('ground');
    })
  })
});
