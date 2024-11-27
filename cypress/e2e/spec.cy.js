describe('Verify BrowserStack Home Page', () => {

  before(() => {
      // Visit the site once before all tests
      cy.visit('https://www.browserstack.com/');
  });

  it('Verify BrowserStack logo is visible', () => {
    cy.get('.bstack-mm-logo > img').should('be.visible');
  });

  it('Verify Header is present', () => {
    cy.get('h1', { timeout: 10000 }).should('exist');
      
  });

  it('Verify Product and Developer menus are present', () => {
      cy.get('#product-menu-toggle').should('exist');
      cy.get('#developers-menu-toggle').should('exist');
  });

  it('Verify menu Links are present', () => {
      cy.get("a[title='Pricing']").should('exist');
      cy.get("a[title='Sign In']").should('exist');
      cy.get("a[title='Live for Teams']").should('exist');
  });

});
