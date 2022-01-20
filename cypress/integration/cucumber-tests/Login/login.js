import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "./login_Page";


Given("user launches Deel URL", () => {
    LoginPage.visit();
    cy.url().should("include", "");
  });
  
  Then("user inputs valid login details", () => {
    LoginPage.fillEmailaddress();
    LoginPage.fillPassword();
    });
  
  And("user clicks login button", () => {
    LoginPage.clickLogin();
  });
  
  Then("confirm user has successfully login", () => {
    cy.get("div").should("contain", "Bulk Matching");
   });
  