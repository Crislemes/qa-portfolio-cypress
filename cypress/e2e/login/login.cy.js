describe('Login', () => {
    it('Deve fazer login com sucesso', () => {
      cy.visit('https://example.com/login')

      cy.get('#email').type('test@example.com')
      cy.get('#password').type('123456')
      
      cy.get('button[type="submit"]').click()

      cy.contains('Bem-vindo').should('be.visible')
    })
  });