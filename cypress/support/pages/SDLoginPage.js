/// <reference types="cypress" />

class SDLoginPage {
    elements = {
        usernameInput: () => cy.get('[data-test="username"]'),
        passwordInput: () => cy.get('[data-test="password"]'),
        loginButton: () => cy.get('[data-test="login-button"]')
    }

    navigateToLoginPage(url) {
        cy.visit(url);
    }

    enterUsername() {
        this.elements.usernameInput().type('standard_user');
    }

    enterPassword() {
        this.elements.passwordInput().type('secret_sauce');
    }

    clickLogin() {
        this.elements.loginButton().click();
    }
}

export default SDLoginPage;