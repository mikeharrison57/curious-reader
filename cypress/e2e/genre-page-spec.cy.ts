import cypress from "cypress";

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "hardcoverFiction"})
  })

  it('Should have a page title', () => {
    cy.get('h1').should('contain.text', 'Curious Reader')
  })

  it('Should ')
})