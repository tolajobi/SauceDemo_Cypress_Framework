/// <reference types="cypress" />

class BasePage {
    elements = {

        shoppingCart: () => cy.get('.shopping_cart_link'),
        menuButton: () => cy.get('#react-burger-menu-btn'),
        checkoutButton: () => cy.get('[data-test="checkout"]'),
        continueButton: () => cy.get('[data-test="continue"]'),
        finishButton: () => cy.get('[data-test="finish"]'),
        thankYouMessage: () => cy.get('.complete-header'),
        productSort: () => cy.get('[data-test="product-sort-container"]'),
        errorMessage: () => cy.get('[data-test="error"]')
    }
    
    selectShoppingCart() {
        this.elements.shoppingCart().click();
    }

    selectCheckout() {
        this.elements.checkoutButton().click();
    }

    clickContinue() {
        this.elements.continueButton().click();
    }

    clickFinish() {
        this.elements.finishButton().click();
    }

    verifyThankYouMessage() {
        this.elements.thankYouMessage()
            .should('be.visible')
            .should('have.text', 'Thank you for your order!');
    }

    itemListDropdownOption(option) {
        cy.wait(5000);
        this.elements.productSort().select(option);
    }

    verifyErrorMessage(expectedError) {
        this.elements.errorMessage()
            .should('be.visible')
            .and('have.text', expectedError);
    }
}

export default BasePage;