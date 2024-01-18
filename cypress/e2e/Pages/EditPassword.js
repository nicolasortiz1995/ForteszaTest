class EditPassword{

    fillDataPassword(){
        cy.get(Cypress.env('newpasswordselectors').actualpasswordfield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('login_credentials').userpass);

        cy.get(Cypress.env('newpasswordselectors').newpasswordfield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('login_credentials').userpass);

        cy.get(Cypress.env('newpasswordselectors').confirmpasswordfield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('login_credentials').userpass);

        cy.get(Cypress.env('newpasswordselectors').savebuttonpassword, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .click();
    }

    contactAssertion(){
        cy.get(Cypress.env('assertions').assertpassword, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .then(($elemento) => {
                const texto = $elemento.text();
                expect(texto).to.eq("Contraseña modificada correctamente")
            });

        cy.get(Cypress.env('newpasswordselectors').closebuttonpassword, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .click();
    }
}
export default  new EditPassword();