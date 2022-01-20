const URL = "https://app.deel.training/login";
const btn_Createacontract = ":nth-child(2) > .anchor > .sidebar-link > .flex > .sidebar-option-p";
const btn_Fixedrate = ":nth-child(1) > .anchor > .box";
const txt_Contractname = ":nth-child(1) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input";
const select_Contractortaxresidence = ".box > :nth-child(1) > .deel-ui__stack_vertical > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control > .deel-ui__select__value-container";
const select_State = ":nth-child(2) > .deel-ui__select__input-container > .deel-ui__select__control"
const txt_Jobtitle = ":nth-child(3) > :nth-child(1) > .deel-ui__input-component__wrapper > .deel-ui__input-component > .deel-ui__input-component__input";
const select_Senioritylevel = '[data-qa="selector-seniority-level"] > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control';
const txt_Scopeofwork = ".deel-ui__textarea-component__textarea";
const btn_Next = ".justify-content-end > .button";
const txt_Paymentrate = ".deel-ui__input-component__input";
const select_Paymentfrequency = ":nth-child(2) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const btn_Invoicing = '[data-qa="tab-button-DAY_OF_LAST_WEEK"]';
const select_Invoicecycle = ":nth-child(4) > .input-container > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const select_Paymentdue = ":nth-child(5) > .flex > .deel-ui__select > .deel-ui__select__input-container > .deel-ui__select__control";
const btn_Next_2 = ".contract-creation-footer > .mt-9";
const select_Firstpaymentdate = ".deel-ui__select__control";
const btn_Next_3 = ".submit-define-dates";
const btn_Next_4 = ".contract-creation-footer > .mt-7";
const btn_Create_contract = ".contract-creation-footer > .mt-7"

class Fixed_RatePage {
    static visit() {
       cy.visit(URL);
}
static clickCreatecontract(){
    cy.get(btn_Createacontract).click();
}
static clickFixedrate(){
    cy.get(btn_Fixedrate).click
}
static inputContractname(){
    cy.get(txt_Contractname).type("Imamat Contract")
}
static pickContractortaxresidence(){
    cy.get(select_Contractortaxresidence).click();
    cy.contains("United States").click({force: true});
}
static inputState(){
    cy.get(select_State).click();
    cy.contains("Colorado").click({force: true});
}
static inputJobtitle() {
    cy.get(txt_Jobtitle).type("");
}
static pickSenioritylevel(){
    cy.get(select_Senioritylevel).click();
    cy.contains("Junior (Individual Contributor Level 1").click({force: true});
}
static inputScopeofwork(){
    cy.get(txt_Scopeofwork).type("");
}
static clickNext(){
    cy.get(btn_Next).click();
}
static inputPaymentrate(){
    cy.get(txt_Paymentrate).type("");
}
static pickPaymentfrequency(){
    cy.get(select_Paymentfrequency).click();
    cy.contains("Weekly").click({force: true});g
}
static clickInvoicing(){
    cy.get(btn_Invoicing).click();
}
static pickInvoicecycle(){
    cy.get(select_Invoicecycle).click();
    cy.contains("28th of the month").click({force: true});
}
static pickPaymentdue(){
    cy.get(select_Paymentdue).click();
    cy.contains("5 Days later").click({force: true});
}
static clickNext_2(){
    cy.get(btn_Next_2).click();
}
static pickFirstpaymentdate(){
    cy.get(select_Firstpaymentdate).click();
    cy.contains("Feb 2nd, 2022").click({force: true});
}
static clickNext_3(){
    cy.get(btn_Next_3).click();
}
static clickNext_4(){
    cy.get(btn_Next_4).click();
}
static clickCreate_contract(){
  //  cy.get(btn_Create_contract).click();
    }

}

export default Fixed_RatePage;