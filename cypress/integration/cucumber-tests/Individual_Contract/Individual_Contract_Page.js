const URL = "https://app.deel.training/login";
const btn_Imanindividual = ":nth-child(2) > .selector";
const btn_Next = ".anchor > .button > div";
const select_Citizen = '[data-qa="citizenOf"] > .input-container > :nth-child(2) > .select > .select__control > .select__indicators > .select__indicator';
const lst_Countryoftax = ':nth-child(5) > .input-container > :nth-child(2) > .select > .select__control';
const lst_Legalstatus = '[data-qa="legal-status-select"] > .input-container > :nth-child(2) > .select > .select__control';
const txt_DOB = ":nth-child(10) > .input-container > .input > input";
const lst_Dialcode = ".phone-input-code > :nth-child(2) > .select > .select__control";
const txt_Phonenumber = ".phone-input-input > .input";
const txt_Street = ":nth-child(12) > .input-container > .input";
const txt_City = ":nth-child(13) > .input-container > .input";
const txt_ZIPcode = ":nth-child(14) > .input-container > .input";
const lst_Country = ":nth-child(15) > .input-container > :nth-child(2) > .select > .select__control";
const btn_Completeprofile = ".p-10 > .button";

class Individual_Contract_Page {
    static visit() {
       cy.visit(URL);
    }
    static clickIamanindividual(){
        cy.get(btn_Imanindividual).click();
        cy.get(btn_Next).click();
    }
    static pickCitizen(){
        cy.wait(10000);
        cy.get(select_Citizen).click();
        cy.contains("Nigeria").click({force: true});
    }
    static pickTax(){
        cy.wait(10000)
        cy.get(lst_Countryoftax).click();
        cy.contains("France").click({force: true});
    }
    static pickLegal(){
        cy.wait(10000)
        cy.get(lst_Legalstatus).click();
        cy.contains("Individual").click({force: true});
    }    
    static inputDOB(){
        cy.get(txt_DOB).type("17041989");
    }
    static inputPhonenumber(){
        cy.wait(10000)
        cy.get(lst_Dialcode).click();
        cy.contains("NG +234").click();
        cy.get(txt_Phonenumber).type("08166583776");
    }
    static inputAddress(){
        cy.get(txt_Street).type("65, Ayo-Alabi Street, Oke-Ira, Ogba, Ikeja");
        cy.get(txt_City).type("Lagos");
        cy.get(txt_ZIPcode).type("100283");
        cy.get(lst_Country).select("Nigeria");
    }
    static clickComplete(){
       // cy.get(btn_Completeprofile).click();
    }
}
export default Individual_Contract_Page;