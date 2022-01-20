import { Given, And, Then, } from "cypress-cucumber-preprocessor/steps";
import login_Page from "../login/login_Page";
import Fixed_RatePage from "./Fixed_RatePage";

Given("I am on logged into Deel", () => {
    login_Page.visit();
    cy.url().should("include", "");
    login_Page.fillEmailaddress();
    login_Page.fillPassword();
    login_Page.clickLogin();
    login_Page.verifyLogin();
});
And ("user clicks on create a contract", () => {
    Fixed_RatePage.clickCreatecontract();
});
Then ("selects fixed rate", () => {
    Fixed_RatePage.clickFixedrate();
});
And ("fill the contract", () => {
    Fixed_RatePage.inputContractname();
    Fixed_RatePage.pickContractortaxresidence();
    Fixed_RatePage.inputState();
    Fixed_RatePage.inputJobtitle();
    Fixed_RatePage.pickSenioritylevel();
    Fixed_RatePage.inputScopeofwork();
    Fixed_RatePage.clickNext();
    Fixed_RatePage.inputPaymentrate();
    Fixed_RatePage.pickPaymentfrequency();
    Fixed_RatePage.clickInvoicing();
    Fixed_RatePage.pickInvoicecycle();
    Fixed_RatePage.pickPaymentdue();
    Fixed_RatePage.clickNext_2();
    Fixed_RatePage.pickFirstpaymentdate();
    Fixed_RatePage.clickNext_3();
    Fixed_RatePage.clickNext_4();
});
Then ("user clicks on create contract button", () => {
    //Fixed_RatePage.clickCreate_contract();
});