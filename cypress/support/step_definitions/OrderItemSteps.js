/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SDLoginPage from '../pages/SDLoginPage';
import OrderItemPage from '../pages/OrderItemPage';
import BasePage from '../pages/BasePage';

const loginPage = new SDLoginPage();
const basePage = new BasePage();
const orderItemPage = new OrderItemPage();

before(() => {
    loginPage.navigateToLoginPage("https://www.saucedemo.com/");
    loginPage.enterUsername();
    loginPage.enterPassword();
    loginPage.clickLogin();
})

When('user is on the main page {string}', (url) => {
    cy.clearAllSessionStorage();
    cy.clearCookies();
    loginPage.navigateToLoginPage(url);
});

When('user enters the username', () => {
    loginPage.enterUsername();
});

When('user enters the password', () => {
    loginPage.enterPassword();
});

When('user clicks the login button', () => {
    loginPage.clickLogin();
});

When('user selects item {string}', (item) => {
    orderItemPage.selectItem(item);
});

When('user add item to the cart', () => {
    orderItemPage.addItemToCart();
});

When('user selects shopping cart', () => {
    basePage.selectShoppingCart();
});

When('user selects checkout', () => {
    basePage.selectCheckout();
});

When('user enters First Name {string}', (firstName) => {
    orderItemPage.enterFirstName(firstName);
});

When('user enters Last Name {string}', (lastName) => {
    orderItemPage.enterLastName(lastName);
});

When('user enters Postal Code {string}', (postalCode) => {
    orderItemPage.enterPostalCode(postalCode);
});

When('user clicks continue', () => {
    basePage.clickContinue();
});

When('user clicks finish', () => {
    basePage.clickFinish();
});

Then('the thank you message should be presented', () => {
    basePage.verifyThankYouMessage();
    basePage.clikckOnBackButton();
});

Then('error message {string} should be displayed', (errorMessage) => {
    basePage.verifyErrorMessage(errorMessage);
});


