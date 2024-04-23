/// <reference types="cypress" />

// https://on.cypress.io/introduction-to-cypress

describe('radesk app', () => {
  beforeEach(() => {
    cy.visit('https://10.0.2.15:5174/');

    const end_datetime = new Date();
    const current_hours = end_datetime.getHours();
    end_datetime.setHours(current_hours + 1);

    cy.get('[data-testid="calendar_datepicker"]').should('have.length', 2);
    cy.get('[data-testid="calendar_datepicker"]').last().type(end_datetime.toISOString()); // set the end calendar to an hour hence

  })

  it('Reserve "gf09"', () => {
    cy.get('[data-testid="item"]').should('have.length', 35);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf09');
    cy.get('[data-testid="items_select"]').select('gf09', {force: true});
    cy.get('[data-testid="email_input"]').type('c@c.c');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf10"', () => {
    cy.get('[data-testid="item"]').should('have.length', 34);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf10');
    cy.get('[data-testid="items_select"]').select('gf10', {force: true});
    cy.get('[data-testid="email_input"]').type('d@d.d');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf11"', () => {
    cy.get('[data-testid="item"]').should('have.length', 33);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf11');
    cy.get('[data-testid="items_select"]').select('gf11', {force: true});
    cy.get('[data-testid="email_input"]').type('e@e.e');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf12"', () => {
    cy.get('[data-testid="item"]').should('have.length', 32);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf12');
    cy.get('[data-testid="items_select"]').select('gf12', {force: true});
    cy.get('[data-testid="email_input"]').type('f@f.f');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf13"', () => {
    cy.get('[data-testid="item"]').should('have.length', 31);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf13');
    cy.get('[data-testid="items_select"]').select('gf13', {force: true});
    cy.get('[data-testid="email_input"]').type('g@g.g');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf14"', () => {
    cy.get('[data-testid="item"]').should('have.length', 30);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf14');
    cy.get('[data-testid="items_select"]').select('gf14', {force: true});
    cy.get('[data-testid="email_input"]').type('h@h.h');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf15"', () => {
    cy.get('[data-testid="item"]').should('have.length', 29);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf15');
    cy.get('[data-testid="items_select"]').select('gf15', {force: true});
    cy.get('[data-testid="email_input"]').type('i@i.i');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf16"', () => {
    cy.get('[data-testid="item"]').should('have.length', 28);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf16');
    cy.get('[data-testid="items_select"]').select('gf16', {force: true});
    cy.get('[data-testid="email_input"]').type('j@j.j');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf17"', () => {
    cy.get('[data-testid="item"]').should('have.length', 27);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf17');
    cy.get('[data-testid="items_select"]').select('gf17', {force: true});
    cy.get('[data-testid="email_input"]').type('k@k.k');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf18"', () => {
    cy.get('[data-testid="item"]').should('have.length', 26);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf18');
    cy.get('[data-testid="items_select"]').select('gf18', {force: true});
    cy.get('[data-testid="email_input"]').type('l@l.l');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf19"', () => {
    cy.get('[data-testid="item"]').should('have.length', 25);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf19');
    cy.get('[data-testid="items_select"]').select('gf19', {force: true});
    cy.get('[data-testid="email_input"]').type('m@m.m');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf20"', () => {
    cy.get('[data-testid="item"]').should('have.length', 24);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf20');
    cy.get('[data-testid="items_select"]').select('gf20', {force: true});
    cy.get('[data-testid="email_input"]').type('n@n.n');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf21"', () => {
    cy.get('[data-testid="item"]').should('have.length', 23);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf21');
    cy.get('[data-testid="items_select"]').select('gf21', {force: true});
    cy.get('[data-testid="email_input"]').type('o@o.o');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf22"', () => {
    cy.get('[data-testid="item"]').should('have.length', 22);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf22');
    cy.get('[data-testid="items_select"]').select('gf22', {force: true});
    cy.get('[data-testid="email_input"]').type('p@p.p');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf23"', () => {
    cy.get('[data-testid="item"]').should('have.length', 21);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf23');
    cy.get('[data-testid="items_select"]').select('gf23', {force: true});
    cy.get('[data-testid="email_input"]').type('q@q.q');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf24"', () => {
    cy.get('[data-testid="item"]').should('have.length', 20);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf24');
    cy.get('[data-testid="items_select"]').select('gf24', {force: true});
    cy.get('[data-testid="email_input"]').type('r@r.r');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf25"', () => {
    cy.get('[data-testid="item"]').should('have.length', 19);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf25');
    cy.get('[data-testid="items_select"]').select('gf25', {force: true});
    cy.get('[data-testid="email_input"]').type('s@s.s');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf26"', () => {
    cy.get('[data-testid="item"]').should('have.length', 18);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf26');
    cy.get('[data-testid="items_select"]').select('gf26', {force: true});
    cy.get('[data-testid="email_input"]').type('t@t.t');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf27"', () => {
    cy.get('[data-testid="item"]').should('have.length', 17);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf27');
    cy.get('[data-testid="items_select"]').select('gf27', {force: true});
    cy.get('[data-testid="email_input"]').type('u@u.u');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf28"', () => {
    cy.get('[data-testid="item"]').should('have.length', 16);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf28');
    cy.get('[data-testid="items_select"]').select('gf28', {force: true});
    cy.get('[data-testid="email_input"]').type('v@v.v');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf29"', () => {
    cy.get('[data-testid="item"]').should('have.length', 15);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf29');
    cy.get('[data-testid="items_select"]').select('gf29', {force: true});
    cy.get('[data-testid="email_input"]').type('w@w.w');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf30"', () => {
    cy.get('[data-testid="item"]').should('have.length', 14);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf30');
    cy.get('[data-testid="items_select"]').select('gf30', {force: true});
    cy.get('[data-testid="email_input"]').type('x@x.x');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf31"', () => {
    cy.get('[data-testid="item"]').should('have.length', 13);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf31');
    cy.get('[data-testid="items_select"]').select('gf31', {force: true});
    cy.get('[data-testid="email_input"]').type('y@y.y');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf32"', () => {
    cy.get('[data-testid="item"]').should('have.length', 12);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf32');
    cy.get('[data-testid="items_select"]').select('gf32', {force: true});
    cy.get('[data-testid="email_input"]').type('z@z.z');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf33"', () => {
    cy.get('[data-testid="item"]').should('have.length', 11);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf33');
    cy.get('[data-testid="items_select"]').select('gf33', {force: true});
    cy.get('[data-testid="email_input"]').type('aa@aa.aa');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf34"', () => {
    cy.get('[data-testid="item"]').should('have.length', 10);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf34');
    cy.get('[data-testid="items_select"]').select('gf34', {force: true});
    cy.get('[data-testid="email_input"]').type('bb@bb.bb');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf35"', () => {
    cy.get('[data-testid="item"]').should('have.length', 9);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf35');
    cy.get('[data-testid="items_select"]').select('gf35', {force: true});
    cy.get('[data-testid="email_input"]').type('cc@cc.cc');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf36"', () => {
    cy.get('[data-testid="item"]').should('have.length', 8);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf36');
    cy.get('[data-testid="items_select"]').select('gf36', {force: true});
    cy.get('[data-testid="email_input"]').type('dd@dd.dd');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf37"', () => {
    cy.get('[data-testid="item"]').should('have.length', 7);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf37');
    cy.get('[data-testid="items_select"]').select('gf37', {force: true});
    cy.get('[data-testid="email_input"]').type('ee@ee.ee');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf38"', () => {
    cy.get('[data-testid="item"]').should('have.length', 6);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf38');
    cy.get('[data-testid="items_select"]').select('gf38', {force: true});
    cy.get('[data-testid="email_input"]').type('ff@ff.ff');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf39"', () => {
    cy.get('[data-testid="item"]').should('have.length', 5);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf39');
    cy.get('[data-testid="items_select"]').select('gf39', {force: true});
    cy.get('[data-testid="email_input"]').type('gg@gg.gg');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf40"', () => {
    cy.get('[data-testid="item"]').should('have.length', 4);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf40');
    cy.get('[data-testid="items_select"]').select('gf40', {force: true});
    cy.get('[data-testid="email_input"]').type('hh@hh.hh');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf41"', () => {
    cy.get('[data-testid="item"]').should('have.length', 3);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf41');
    cy.get('[data-testid="items_select"]').select('gf41', {force: true});
    cy.get('[data-testid="email_input"]').type('ii@ii.ii');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf42"', () => {
    cy.get('[data-testid="item"]').should('have.length', 2);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf42');
    cy.get('[data-testid="items_select"]').select('gf42', {force: true});
    cy.get('[data-testid="email_input"]').type('jj@jj.jj');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })

  it('Reserve "gf43"', () => {
    cy.get('[data-testid="item"]').should('have.length', 1);
    cy.get('[data-testid="item"]').first().should('have.text', 'gf43');
    cy.get('[data-testid="items_select"]').select('gf43', {force: true});
    cy.get('[data-testid="email_input"]').type('kk@kk.kk');

    cy.get('[data-testid="form_submit_button"]').click({force: true});
    cy.get('[test-id="confirmation_page"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').should('be.visible');
    cy.get('[test-id="confirm_button"]').click();
  })
})
