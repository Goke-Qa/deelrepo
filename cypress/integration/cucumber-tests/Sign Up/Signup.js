import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import Signup_Page from "./Signup_Page";

Given("user launches Deel URL", () => {
  Signup_Page.visit();
  cy.url().should("include", "");
});

Then("user clicks on sign up", () => {
  Signup_Page.clickSignup();
});

When("user selects as a contractor option", () => {
  Signup_Page.pickContractor();
});

And("user fills all necessary data", () => {
  Signup_Page.fillFullname();
  Signup_Page.fillEmailaddress();
  Signup_Page.fillPassword();
  Signup_Page.fillConfirmpassword();
  Signup_Page.pickHowaboutDeel
 });

 Then("user clicks create your Deel account button", () => {
  Signup_Page.clickCreateDeelaccount();
 });
