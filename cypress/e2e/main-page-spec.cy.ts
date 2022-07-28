import cypress from "cypress"

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "bookData"})
  })

  it('Should have a page title', () => {
    cy.get('h1').should('contain.text', 'Curious Reader')
  })

  it('Should have a home page displaying books', () => {
    cy.get('.book-card').should('contain.text', 'Curious Reader')
  })


  it('should test if true is true', () => {
    expect(true).to.equal(true)
  })
})

// check the length of the fixture
// see a home page with previews
// select different book genres/ filtered
// go back to home page