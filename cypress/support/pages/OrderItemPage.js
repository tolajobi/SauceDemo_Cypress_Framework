/// <reference types="cypress" />

import BasePage from './BasePage';

class OrderItemPage extends BasePage {
    elements = {
        ...super.elements,
        firstNameInput: () => cy.get('[data-test="firstName"]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        postalCodeInput: () => cy.get('[data-test="postalCode"]')
    }

    selectItem(itemName) {
        cy.get(`[data-test="add-to-cart-sauce-labs-${itemName}"]`).click();
    }

    addItemToCart() {
        // This method is intentionally left empty as the selectItem method already adds to cart
        return;
    }

    enterFirstName(firstName) {
        this.elements.firstNameInput().type(firstName);
    }

    enterLastName(lastName) {
        this.elements.lastNameInput().type(lastName);
    }

    enterPostalCode(postalCode) {
        this.elements.postalCodeInput().type(postalCode);
    }
}

export default OrderItemPage;