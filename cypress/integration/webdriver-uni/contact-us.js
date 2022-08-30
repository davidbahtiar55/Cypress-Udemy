/// <reference types="Cypress" />

describe ("Test Contact Us from via WebdriverUni", () => {
    it("Should be able to submit a successful via contact us from", () =>{
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.a.property', 'charset').and('eq', 'UTF-8')
        cy.title().should('include', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        //cy.get('#contact-us').click({force: true})
        cy.get('[name="first_name"]').type('David')
        cy.get('[name="last_name"]').type('Bahtiar')
        cy.get('[name="email"]').type('maildump@gmail.com')
        cy.get('textarea.feedback-input').type('Learn Cypress in morning via Udemy')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });

    it("She not be able to submit a successful submission via contact us form as all fields are required", () => {
        //cypress code
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type('Randy')
        cy.get('[name="last_name"]').type('Rand')
        cy.get('textarea.feedback-input').type('Learn Cypress in morning via Udemy')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
    });
    });
