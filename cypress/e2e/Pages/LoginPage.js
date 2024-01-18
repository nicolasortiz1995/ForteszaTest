class LoginPage {
    fillEmail(email) {
        cy.get(Cypress.env('login_selectors').mailfield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(email);
    }

    fillPassword(password) {
        cy.get(Cypress.env('login_selectors').passwordfield, { timeout: 20000 })
            .should('exist')
            .type(password);
    }

    clickLoginButton() {
        cy.contains(Cypress.env('login_selectors').loginbutton, { timeout: 20000 }).click();
    }

    loginAssertion(){
        cy.url().should('include', '/dashboard');
    }

}

export default new LoginPage();
