describe('Cadastro', () => {

  it('Deve cadastrar usuário com sucesso', () => {
    cy.visit('https://example.com/register')

    cy.get('#name').type('Usuário Teste')
    cy.get('#email').type('teste@teste.com')
    cy.get('#password').type('123456')

    cy.get('button').click()

    cy.contains('Cadastro realizado').should('be.visible')
  })

})