const baseUrl = Cypress.config().baseUrl

describe('Test Shorten Url Flow', () => {
    beforeEach(() => {
      cy.visit(baseUrl)
    })
    it('Should display shortened link', () => {
      cy.get('.input__field').type('https://drive.google.com/file/d/1r8PFlH2UKqwKRXHU16rLYxiKUdGbRDlR/view?usp=sharing')
      cy.get('[data-cy=btn__submit]').click()
      cy.get('.input__field').should('contain.value', 'http://localhost:8080/')
    })

    it('Should display error because of empty link', () => {
      cy.get('[data-cy=btn__submit]').click()
      cy.get('.toast__message').should('be.visible')
    })

    it('Should display error because of invalid link', () => {
      cy.get('.input__field').type('drive.google.com/file/d/1r8PFlH2UKqwKRXHU16rLYxiKUdGbRDlR/view?usp=sharing')
      cy.get('[data-cy=btn__submit]').click()
      cy.get('.toast__message').should('be.visible')
    })
  })
  