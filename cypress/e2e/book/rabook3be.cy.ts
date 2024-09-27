/// <reference types="cypress" />

describe('rabook backend test', () => {
  beforeEach(() => {
    cy.request({ url: 'https://localhost:6176/api/all_books', method: 'GET', failOnStatusCode: false}).as('books');
  })

  it('check index hello world page', () => {
    cy.request({ url: "https://localhost:6176/", method: 'GET', failOnStatusCode: false}).as('hello');
    cy.get('@hello').its('status').should('eq', 200);
    cy.get('@hello').then((response) => {
      const rb = JSON.stringify(response.body);
      expect(rb).to.equal('"Hello World!"');
    })
  })

  it('check books api is available', () => {
    cy.get('@books').its('status').should('eq', 200);
  })

  it('check details about Emma are correct', () => {
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

  it('check details about Mansfield Park are correct', () => {
    cy.get('@books').its('status').should('eq', 200);
    cy.get('@books').then((response) => {
      const mansfield_park_info = response.body['data'][1];

      const em_email = mansfield_park_info['email'];
      expect(em_email).to.equal('b@b.b');

      const em_book = mansfield_park_info['book'];
      expect(em_book).to.equal('Mansfield Park');

      const em_author = mansfield_park_info['author'];
      expect(em_author).to.equal('Jane Austen');
    })
  })

  it('check details about Northanger Abbey are correct', () => {
    cy.get('@books').its('status').should('eq', 200);
    cy.get('@books').then((response) => {
      const northanger_abbey_info = response.body['data'][2];

      const em_email = northanger_abbey_info['email'];
      expect(em_email).to.equal('c@c.c');

      const em_book = northanger_abbey_info['book'];
      expect(em_book).to.equal('Northanger Abbey');

      const em_author = northanger_abbey_info['author'];
      expect(em_author).to.equal('Jane Austen');
    })
  })

  it('check details about Persuasion are correct', () => {
    cy.get('@books').its('status').should('eq', 200);
    cy.get('@books').then((response) => {
      const persuasion_info = response.body['data'][3];

      const em_email = persuasion_info['email'];
      expect(em_email).to.equal('d@d.d');

      const em_book = persuasion_info['book'];
      expect(em_book).to.equal('Persuasion');

      const em_author = persuasion_info['author'];
      expect(em_author).to.equal('Jane Austen');
    })
  })

  it('check details about Pride and Prejudice are correct', () => {
    cy.get('@books').its('status').should('eq', 200);
    cy.get('@books').then((response) => {
      const pride_and_prejudice_info = response.body['data'][4];

      const em_email = pride_and_prejudice_info['email'];
      expect(em_email).to.equal('e@e.e');

      const em_book = pride_and_prejudice_info['book'];
      expect(em_book).to.equal('Pride and Prejudice');

      const em_author = pride_and_prejudice_info['author'];
      expect(em_author).to.equal('Jane Austen');
    })
  })

  it('check details about Sense and Sensibility are correct', () => {
    cy.get('@books').its('status').should('eq', 200);
    cy.get('@books').then((response) => {
      const sense_and_sensibility_info = response.body['data'][5];

      const em_email = sense_and_sensibility_info['email'];
      expect(em_email).to.equal('f@f.f');

      const em_book = sense_and_sensibility_info['book'];
      expect(em_book).to.equal('Sense and Sensibility');

      const em_author = sense_and_sensibility_info['author'];
      expect(em_author).to.equal('Jane Austen');
    })
  })
});
