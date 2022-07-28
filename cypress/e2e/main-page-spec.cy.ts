import cypress from "cypress"

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "bookData"})
  })

  it('Should have a page title', () => {
    cy.get('h1').should('contain.text', 'Curious Reader')
  })

  it('Should have a home page displaying books.', () => {
    cy.get('.books-container').find('.book-card').should('have.length', 2)
  })

  it('Should have a home page displaying books with details about the book.', () => {
    cy.get('.book-card').first().should('contain.text', 'WHERE THE CRAWDADS SING')
    cy.get('.book-card').last().should('contain.text', 'THE BODY KEEPS THE SCORE')
    cy.get('.book-card').first().should('contain.text', 'In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.')
    cy.get('.book-card').last().should('contain.text', 'Bessel van der Kolk')
  })


  it('should test if true is true', () => {
    expect(true).to.equal(true)
  })
})

// check the length of the fixture
// see a home page with previews
// select different book genres/ filtered
// go back to home page