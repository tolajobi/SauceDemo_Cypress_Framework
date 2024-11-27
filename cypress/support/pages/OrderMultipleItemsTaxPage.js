/// <reference types="cypress" />

import BasePage from './BasePage';

class OrderMultipleItemsTaxPage extends BasePage {
    elements = {
        ...super.elements,
        firstNameInput: () => cy.get('[data-test="firstName"]'),
        lastNameInput: () => cy.get('[data-test="lastName"]'),
        postalCodeInput: () => cy.get('[data-test="postalCode"]'),
        taxAmount: () => cy.get('.summary_tax_label')
    }

    selectItem(itemName) {
        cy.get(`[data-test="add-to-cart-sauce-labs-${itemName}"]`).click();
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

    verifyTaxAmount(expectedTax) {
        this.elements.taxAmount().should('contain', expectedTax);
    }
}

export default OrderMultipleItemsTaxPage;