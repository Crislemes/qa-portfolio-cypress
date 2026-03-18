describe('API - Usuários', () => {

  it('Deve buscar usuários', () => {
    cy.request({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/users'
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.length.greaterThan(0)
    })
  })

})