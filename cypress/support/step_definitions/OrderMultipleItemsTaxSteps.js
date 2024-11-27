/// <reference types="cypress" />


import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import SDLoginPage from '../pages/SDLoginPage';
import OrderMultipleItemsTaxPage from '../pages/OrderMultipleItemsTaxPage';
import BasePage from '../pages/BasePage';

const loginPage = new SDLoginPage();
const basePage = new BasePage();
const orderMultipleItemsTaxPage = new OrderMultipleItemsTaxPage();
 

When('user selects {string} from the dropdown', (option) => {
	basePage.itemListDropdownOption(option);
});

Then('user checks tax is {string}', (tax) => {
	orderMultipleItemsTaxPage.verifyTaxAmount(tax);
});