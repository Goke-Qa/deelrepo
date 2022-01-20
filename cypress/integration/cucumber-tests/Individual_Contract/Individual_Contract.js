import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
import Individual_Contract_Page from "./Individual_Contract_Page";
import login_Page from "../login/login_Page";

Given("I am on logged into Deel", () => {
    login_Page.visit();
    cy.url().should("include", "");
    login_Page.fillEmailaddress();
    login_Page.fillPassword();
    login_Page.clickLogin();
    login_Page.verifyLogin();
  });

  When ("user selects i'm an individual", () => {
    Individual_Contract_Page.clickIamanindividual();
  });

  And ("input necessary information", () => {
    Individual_Contract_Page.pickCitizen();
    Individual_Contract_Page.pickTax();
    Individual_Contract_Page.pickLegal();
    Individual_Contract_Page.inputDOB();
    Individual_Contract_Page.inputPhonenumber();
    Individual_Contract_Page.inputAddress();
  });

  Then ("click on complete profile", () => {
    Individual_Contract_Page.clickComplete();
  });