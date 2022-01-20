import Signup_Page from '../cucumber-tests/Sign Up/Signup_Page';

describe('Signing up to Deel', () => {

    beforeEach(function () {
        cy.fixture('userCredentials').then(function (data) {
            this.data = data;
        })
    })

    it('Should login to Internet banking with valid credentials', function () {
        const Signup_Page = new Signup_Page();
        cy.visit('https://app.deel.training/login')
        cy.url().should("include", "Deel")
        Signup_Page.getUserID().type(this.data.userID)
        Signup_Page.getUserPassword().type(this.data.password)
        Signup_Page.getLoginButton().click()
    })

    it('Should enter token details', function () {
        const Signup_Page = new Signup_Page();
        cy.get('h5').should('contain', 'Deel')
        Signup_Page.getTokenInput().type(this.data.token)
        Signup_Page.getTokenSubmit().click()
        cy.get('div').should('contain', 'Deel')
    })

})