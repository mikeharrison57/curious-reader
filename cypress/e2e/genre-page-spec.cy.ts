import cypress from "cypress";

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "bookData"})
  })

  it('Should have a page title', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('h1').should('contain.text', 'Curious Reader')
  })

  it('Should diplay books from the correct genre' , () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "hardcoverFiction"})
    cy.get('.genres-container').find('p').last().click()
    cy.get('.books-container').find('.book-card').should('have.length', 15)
  })

  it('Should have a genre page displaying books with details about the books from that genre.' , () => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=tBjYHYybf8UG944wMFG4Hn44NXmN9Lyj', {fixture: "hardcoverFiction"})
    cy.get('.genres-container').find('p').last().click()
    cy.get('.book-card').first().find('.title').should('contain.text', 'PORTRAIT OF AN UNKNOWN WOMAN')
    cy.get('.book-card').first().find('.description').should('contain.text', "The 22nd book in the Gabriel Allon series. Allon becomes an art forger to uncover a multibillion-dollar fraud.")
    cy.get('.book-card').first().find('.author').should('contain.text', "Daniel Silva")
    cy.get('.book-card').last().find('.author').should('contain.text', "Silvia Moreno-Garcia")
    cy.get('.book-card').last().find('.title').should('contain.text', "THE DAUGHTER OF DOCTOR MOREAU")
    cy.get('.book-image').first().should('have.attr', 'src', 'https://storage.googleapis.com/du-prd/books/images/9780062834850.jpg')
  })

  it('Should have a navbar', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('nav').should('be.visible')
  })

  it('It should contain a list of genres', () => {
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('.genres-container').find('p').should('have.length', 3)
    cy.get('.genres-container').find('p').last().should('have.text', 'Hardcover Fiction')
  })

  it('Should be able to navigate from one genre page to another genre page.', () => {
    cy.visit('http://localhost:3000/Combined%20Print%20and%20E-Book%20Fiction')
    cy.get('.book-card').first().find('.author').should('contain.text', "Delia Owens")
    cy.get('.genres-container').find('p').last().click()
    cy.url().should('eq', 'http://localhost:3000/Hardcover%20Fiction')
    cy.visit('http://localhost:3000/Hardcover%20Fiction')
    cy.get('.book-card').first().find('.author').should('contain.text', "Daniel Silva")
  })

  it('Should be able to navigate using the window back and forward buttons.', () => {
    cy.get('.genres-container').find('p').last().click()
    cy.url().should('eq', 'http://localhost:3000/Hardcover%20Fiction')
    cy.go('back')
    cy.url().should('eq', 'http://localhost:3000/')
    cy.go('forward')
    cy.url().should('eq', 'http://localhost:3000/Hardcover%20Fiction')
  })
})