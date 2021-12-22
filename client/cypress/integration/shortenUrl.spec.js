const baseUrl = Cypress.config().baseUrl

describe('Test Shorten Url Flow', () => {
    beforeEach(() => {
      cy.visit(baseUrl)
    })
    it('Should display shortened link', () => {
      cy.get('.input__field').type('https://drive.google.com/file/d/1r8PFlH2UKqwKRXHU16rLYxiKUdGbRDlR/view?usp=sharing')
      cy.get('[data-cy=btn__submit]').click()
      cy.get('.success-panel__link-container').should('contain', 'http://localhost:8080/')
    })
  })
  