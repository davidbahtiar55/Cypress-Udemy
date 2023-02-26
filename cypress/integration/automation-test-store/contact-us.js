/// <reference types="Cypress" />

describe("Test Contact Us from via WebdriverUni", () => {
  it("Should be able to submit a successful via contact us from", () => {
    cy.visit("https://automationteststore.com/");
    cy.get("a[href$='contact']")
      .click()
      .then(function(linkText) {
        cy.log("Clicked on link using text: " + linkText.text());
      })
    //cy.xpath("//a[contains(@href,'contact')]").click();
    cy.get("#ContactUsFrm_first_name").type("David");
    cy.get("#ContactUsFrm_first_name").should(
      "have.attr",
      "name",
      "first_name"
    );
    cy.get("#ContactUsFrm_email").type("maildump@mail.com");
    cy.get("#ContactUsFrm_email").should("have.attr", "name", "email");
    cy.get("#ContactUsFrm_enquiry").type(
      "Do you give me code voucher discount??"
    );
    cy.get("button[title='Submit']").click();
    cy.get(".mb40 > :nth-child(3)").should(
      "have.text",
      "Your enquiry has been successfully sent to the store owner!"
    );
  });
});