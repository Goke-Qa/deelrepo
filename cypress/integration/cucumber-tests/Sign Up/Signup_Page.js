const URL = "https://app.deel.training/login";
const btn_Signup = ".create-account > .anchor > .button > div";
const btn_Contractor = ".pl-6 > .selector";
const btn_Continue = ".w-100 > div";
const txt_Fullname = ":nth-child(2) > .input-container > .input > input";
const txt_Emailaddress = ":nth-child(3) > .input-container > .input > input";
const txt_Password = ":nth-child(4) > .input-container > .input > input";
const txt_Confirmpassword = ":nth-child(5) > .input-container > .input > input";
const inp_HowdidyouhearaboutDeel = ".select__value-container";
const btn_CreateyourDeelaccount = "form > .button > div";

class Signup_Page {
  static visit() {
     cy.visit(URL);
  }
  static clickSignup(){
    cy.get(btn_Signup).should('be.visible')
  }
  static pickContractor() {
    cy.get(btn_Contractor).click();
    cy.get(btn_Continue).click();
  }
  static fillFullname() {
    cy.get(txt_Fullname).type("Imamat Isiaka");
  }
  static fillEmailaddress(){
    cy.get(txt_Emailaddress).type("imamat.isiaka@gmail.com");
  }
  static fillPassword() {
    cy.get(txt_Password).type("Imamat//12");
  }
  static fillConfirmpassword() {
    cy.get(txt_Confirmpassword).type("Imamat//12");
  }
  static pickHowaboutDeel() {
    cy.get(inp_HowdidyouhearaboutDeel).select('LinkedIn')
  }
  static clickCreateDeelaccount() {
    cy.get(btn_CreateyourDeelaccount).click();
  }
}
export default Signup_Page;
