/// <reference types="Cypress" />

describe("Test Contact Us from via WebdriverUni", () => {
  it("Should be able to submit a successful via contact us from", () => {
    cy.visit("https://automationteststore.com/");
    cy.get('.info_links_footer > :nth-child(5) > a').click();
    cy.get('#ContactUsFrm_first_name').type('David');
    cy.get('#ContactUsFrm_email').type('maildump@mail.com');
    cy.get('#ContactUsFrm_enquiry').type('Do you give me code voucher discount??')
    cy.get('.col-md-6 > .btn').click();
  });
});
