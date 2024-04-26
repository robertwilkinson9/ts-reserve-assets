/// <reference types="cypress" />

describe('ratesting backend test', () => {
/*
  beforeEach(() => {
  })
*/

  it('check index hello world page', () => {
    cy.request({ url: "https://localhost:6177/", method: 'GET', failOnStatusCode: false}).as('hello');
    cy.get('@hello').its('status').should('eq', 200);
    cy.get('@hello').then((response) => {
      const rb = JSON.stringify(response.body);
      expect(rb).to.equal('"Hello World!"');
    })
  })

  it('check testings api is available', () => {
    cy.request({ url: 'https://localhost:6177/api/all_testing_item_names', method: 'GET', failOnStatusCode: false}).as('testings');
    cy.get('@testings').its('status').should('eq', 200);
  })

  it('check details about f1 are correct', () => {
    cy.request({ url: 'https://localhost:6177/api/all_testing_item_names', method: 'GET', failOnStatusCode: false}).as('testings');
    cy.get('@testings').its('status').should('eq', 200);
    cy.get('@testings').then((response) => {
      const f1_info = response.body['data'][0];

      const em_email = f1_info['email'];
      expect(em_email).to.equal('a@a.a');

      const em_testing = f1_info['testing_item_name'];
      expect(em_testing).to.equal('f1');

      const em_ftesting = f1_info['testing_bucket'];
      expect(em_ftesting).to.equal('first');
    })
  })

  it('check details about f2 are correct', () => {
    cy.request({ url: 'https://localhost:6177/api/all_testing_item_names', method: 'GET', failOnStatusCode: false}).as('testings');
    cy.get('@testings').its('status').should('eq', 200);
    cy.get('@testings').then((response) => {
      const f2_info = response.body['data'][1];

      const em_email = f2_info['email'];
      expect(em_email).to.equal('b@b.b');

      const em_testing = f2_info['testing_item_name'];
      expect(em_testing).to.equal('f2');

      const em_ftesting = f2_info['testing_bucket'];
      expect(em_ftesting).to.equal('first');
    })
  })

  it('check details about f3 are correct', () => {
    cy.request({ url: 'https://localhost:6177/api/all_testing_item_names', method: 'GET', failOnStatusCode: false}).as('testings');
    cy.get('@testings').its('status').should('eq', 200);
    cy.get('@testings').then((response) => {
      const f3_info = response.body['data'][2];

      const em_email = f3_info['email'];
      expect(em_email).to.equal('c@c.c');

      const em_testing = f3_info['testing_item_name'];
      expect(em_testing).to.equal('f3');

      const em_ftesting = f3_info['testing_bucket'];
      expect(em_ftesting).to.equal('first');
    })
  })
});
