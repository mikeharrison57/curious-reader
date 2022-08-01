import cypress from "cypress";

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it.skip('Should have a page title', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('h1').should('contain.text', 'Curious Reader')
  })

  it.skip('Should diplay books from the correct genre' , () => {
    cy.get('.genres-container').find('p').first().click()
    cy.get('.books-container').find('.book-card').should('have.length', 15)
  })

  it.skip('Should have a genre page displaying books with details about the books from that genre.' , () => {
    cy.get('.genres-container').find('p').first().click()
    cy.get('.book-card').first().find('.title').should('contain.text', 'WHERE THE CRAWDADS SING')
    cy.get('.book-card').first().find('.description').should('contain.text', "In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.")
    cy.get('.book-card').first().find('.author').should('contain.text', "Delia Owens")
    cy.get('.book-card').last().find('.author').should('contain.text', "Colleen Hoover")
    cy.get('.book-card').last().find('.title').should('contain.text', "ALL YOUR PERFECTS")
    cy.get('.book-image').first().should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9781501171604.jpg')
  })

  it.skip('Should have a navbar', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('nav').should('be.visible')
  })

  it.skip('It should contain a list of genres', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('.genres-container').find('p').should('have.length', 11)
    cy.get('.genres-container').find('p').last().should('have.text', 'Hardcover Fiction')
  })

  it.skip('Should be able to navigate from one genre page to another genre page.', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('.book-card').first().find('.author').should('contain.text', "Daniel Silva")
    cy.get('.genres-container').find('p').first().click()
    cy.url().should('eq', 'http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
    cy.get('.book-card').first().find('.author').should('contain.text', "Delia Owens")
  })

  it.skip('Should be able to navigate using the window back and forward buttons.', () => {
    cy.get('.genres-container').find('p').first().click()
    cy.url().should('eq', 'http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
  })

  it('Should display an error message if a network request fails.', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {
      statusCode: 404,
      body: {
        error: "Cannot GET /svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Ly"
      }
    })
    cy.visit('http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
    .get('.error-message').should('have.text', 'Hey, we\'re having some technical difficulties right now.  Come see us again soon!')
  })

  it('Should display an error message if a network request fails.', () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {
      statusCode: 500,
      body: {
        error: "Cypress forced 500"
      }
    })
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    .get('.error-message').should('have.text', 'Hey, we\'re having some technical difficulties right now.  Come see us again soon!')
  })
})