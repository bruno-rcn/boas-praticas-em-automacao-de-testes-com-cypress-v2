describe('Browser testing bad practice - anchor href', () => {
  beforeEach(() => {
    cy.visit('https://notes-serverless-app.com')
  })

  it('directs the user to the login page when clicking the login link', () => {
    
    // Sempre que o elemento possui href e target blank e o teste valida a troca de pagina, isso valido o browser e nao a aplicacao
    // Da maneira abaixo o teste valida a aplicacao. Validando o valor correto no attr href e que nao possui target
    cy.contains('.nav a', 'Login').should('have.attr', 'href', '/login').and('not.have.attr', 'target')

    // dessa maneira valida o browser e nao a aplicacao
    //cy.contains('.nav a', 'Login').click()
    //cy.url().should('be.equal', 'https://notes-serverless-app.com/login')
  })
})
