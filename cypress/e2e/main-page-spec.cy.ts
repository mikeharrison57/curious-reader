import cypress from "cypress"

describe('Top Book Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should test if true is true', () => {
    expect(true).to.equal(true)
  })
})