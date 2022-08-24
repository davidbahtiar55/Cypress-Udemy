/// <reference types="Cypress" />

describe ("Test Contact Us from via WebdriverUni", () => {
    it("Should be able to submit a successful via contact us from", () =>{
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('David')
    });

    it("She not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
    });
})