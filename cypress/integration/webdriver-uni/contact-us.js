/// <reference types="Cypress" />

describe ("Test Contact Us from via WebdriverUni", () => {
    it("Should be able to submit a successful via contact us from", () =>{
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('David')
        cy.get('[name="last_name"]').type('Bahtiar')
        cy.get('[name="email"]').type('maildump@gmail.com')
        cy.get('textarea.feedback-input').type('Learn Cypress in morning via Udemy')
        cy.get('[type="submit"]').click()
    });

    it.only("She not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('Randy')
        cy.get('[name="last_name"]').type('Rand')
        cy.get('textarea.feedback-input').type('Learn Cypress in morning via Udemy')
        cy.get('[type="submit"]').click()
    });
    });
