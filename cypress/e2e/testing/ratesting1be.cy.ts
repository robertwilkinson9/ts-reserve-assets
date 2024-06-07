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
      cy.log(f1_info);

      const em_email = f1_info['email'];
      expect(em_email).to.equal('a@a.a');

      const em_testing = f1_info['testing_item_name'];
      expect(em_testing).to.equal('f1');

      const em_floor = f1_info['testing_bucket'];
      expect(em_floor).to.equal('first');

      const em_aux_used = f1_info['aux_used'];
      expect(em_aux_used).to.equal('this is used in db');
    })
  })
});
