class EditContact {
    goToEditContact(){
        cy.get(Cypress.env('contact_selectors').authorizebutton, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .click();
    }

    fillData(){
        cy.get(Cypress.env('contact_selectors').namefield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('contactinfo').contactname);
        cy.get(Cypress.env('contact_selectors').lastnamefield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('contactinfo').contactlastname);
        cy.get(Cypress.env('contact_selectors').phonefield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('contactinfo').contactphoneA);
        cy.get(Cypress.env('contact_selectors').mailfield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('contactinfo').contactmail);
        cy.get(Cypress.env('contact_selectors').addressfield, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .type(Cypress.env('contactinfo').contactaddress);
        cy.get(Cypress.env('contact_selectors').savebutton, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .click();
    }

    contactAssertion(){
        cy.get(Cypress.env('assertions').asserteditcontact, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .then(($elemento) => {
            const texto = $elemento.text();
            expect(texto).to.eq("Usuario de confianza actualizado")
        });

        cy.get(Cypress.env('contact_selectors').closebutton, { timeout: 20000 })
            .should('exist', { timeout: 20000 })
            .should('be.visible', { timeout: 20000 })
            .click();
    }
}
export default new EditContact();