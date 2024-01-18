import LoginPage from '../Pages/LoginPage';
import EditProfile from '../Pages/EditProfile';
import EditContact from '../Pages/EditContact';
import EditPassword from '../Pages/EditPassword';

beforeEach(() => {
    // Visitar una URL
    cy.visit(Cypress.env('urls_test').homeurl);
    // Ingresar correo
    LoginPage.fillEmail(Cypress.env('login_credentials').usermail);
    //Ingresar contraseña
    LoginPage.fillPassword(Cypress.env('login_credentials').userpass);
    // Hacer clic en un botón
    LoginPage.clickLoginButton();
    cy.get('ion-icon[aria-label$=\'down\']', { timeout: 20000 }).should('be.visible')
});

describe('Prueba técnica Fortesza', () => {
    it('TC Exitoso | Ingreso al dashboard', () => {
        // Verificar que ingreso exitoso dashboard
        LoginPage.loginAssertion();

    });

    it('TC Exitoso | Ingreso a editar datos del perfil', () => {
        EditProfile.goToEditProfile();
        EditProfile.editProfileAssertion();
    });

    it('TC Exitoso | Agregar información de contacto de confianza', () => {
        EditProfile.goToEditProfile();
        EditContact.goToEditContact();
        EditContact.fillData();
        EditContact.contactAssertion();
    });

    it('TC Exitoso | Modificar contraseña del usuario', () => {
        EditProfile.goToEditProfile();
        EditPassword.fillDataPassword();
        EditPassword.contactAssertion();
    });
});

after(() => {
    //Cierre de sesión
    cy.visit(Cypress.env('urls_test').dashboardurl);
    cy.get(Cypress.env('logoutselector').menulateralbutton, { timeout: 20000 })
        .should('exist', { timeout: 20000 })
        .should('be.visible', { timeout: 20000 })
        .click();

    cy.get(Cypress.env('logoutselector').logoutbutton, { timeout: 20000 })
        .should('exist', { timeout: 20000 })
        .should('be.visible', { timeout: 20000 })
        .click();

    cy.get(Cypress.env('assertions').assertlogout, { timeout: 20000 })
        .should('exist', { timeout: 20000 })
        .should('be.visible', { timeout: 20000 })
        .then(($elemento) => {
            const texto = $elemento.text();
            expect(texto).to.eq("Iniciar Sesión")
        });
});