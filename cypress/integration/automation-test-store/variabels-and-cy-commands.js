/// <reference types="Cypress" />

describe("Verify variabels, cypress commands and jquery commands", () => {
    it("Navigation to specific product pages", () => {
      cy.visit("https://automationteststore.com/");
      // const makeupLink = cy
      //   .get("a[href*='product/category&path=']")
      //   .contains("Makeup");
      // const skincareLink = cy
      //   .get("a[href*='product/category&path=']")
      //   .contains("Skincare");
      // makeupLink.click();
      // skincareLink.click();
  
      //The following  will pass
      // const makeupLink = cy
      //   .get("a[href*='product/category&path=']")
      //   .contains("Makeup");
      // makeupLink.click();
      // const skincareLink = cy
      //   .get("a[href*='product/category&path=']")
      //   .contains("Skincare");
      // skincareLink.click();
  
      //Recommended Approach
      cy.get("a[href*='product/category&path=']").contains("Makeup").click();
      cy.get("a[href*='product/category&path=']").contains("Skincare").click();
    });
  
    it("Navigation to specific product pages", () => {
      cy.visit("https://automationteststore.com/");
      cy.get("a[href*='product/category&path=']").contains("Makeup").click();
  
      //Following code will fail
      // const header = cy.get("h1 .maintext");
      // cy.log(header.text())
  
      cy.get("h1 .maintext").then(($headerText) => {
        const headerText = $headerText.text();
        cy.log("Found header text:" + headerText);
        expect(headerText).is.eq("Makeup");
      });
    });
  
    it.only("Navigation to specific product pages", () => {
      cy.visit("https://automationteststore.com/index.php?rt=content/contact");
  
      //Uses cypress commands and chaining
      cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name')
  
      //JQuery Approach
  
      //Embedded commands (Closure)
  });
  });
  