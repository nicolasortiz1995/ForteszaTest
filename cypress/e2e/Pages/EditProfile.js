class EditProfile{
    goToEditProfile(){
        cy.visit(Cypress.env('urls_test').editprofileurl);
    }


    editProfileAssertion(){
        cy.url().should('include', '/profile');
    }

}
export default new EditProfile();