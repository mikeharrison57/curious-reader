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
    cy.get('img').first().should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780735219090.jpg')
  })

  it('Should have a navbar', () => {
    cy.get('nav').should('be.visible')
  })

  it('It should contain a list of genres', () => {
    cy.get('.genres-container').find('p').should('have.length', 2)
    cy.get('.genres-container').find('p').first().should('have.text', 'Combined Print and E-Book Fiction')
  })

  it('Should be able to navigate to a genre page', () => {
    cy.get('.genres-container').find('p').last().click()
    cy.url().should('eq', 'http://localhost:3000/Combined%20Print%20and%20E-Book%20Nonfiction')
  })

  it('Should be able to navigate using the window back and forward buttons.', () => {
    cy.visit('http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.get('.book-card').first().should('contain.text', 'WHERE THE CRAWDADS SING')
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
    // revisit test to add data sample after fixture is added.
  })

  // it('Should display an error message if a network request fails.', () => {
  //   cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {
  //     statusCode: 404,
  //     body: {
  //       error: "Cannot GET /svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj"
  //     }
  //   })
  //   .get('h3').should('have.text', 'Hey, we\'re having some technical difficulties right now. Come see us again soon!')
  // })

  it('Should display an error message if a network request fails.', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {
      statusCode: 500,
      body: {
        error: "Cypress forced 500"
      }
    })
    .get('h3').contains('Hey, we\'re having some technical difficulties right now. Come see us again soon!')
  })
})
