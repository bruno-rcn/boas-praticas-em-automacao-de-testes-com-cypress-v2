describe('Browser testing bad practice - anchor with target _blank', () => {
  beforeEach(() => {
    cy.visit('https://cac-tat.s3.eu-central-1.amazonaws.com/index.html')
  })

  it('directs the user to the privacy page after removing the target and clicking the link', () => {
    //cy.contains('a', 'Política de Privacidade')
    //  .invoke('removeAttr', 'target') // dessa maneira remove o target e assim nao troca de aba no navegador
    //  .click()

    //cy.url()
    //  .should('be.equal', 'https://cac-tat.s3.eu-central-1.amazonaws.com/privacy.html')

    // dessa maneira vai validar que o href vai levar para o lugar certo e que o target ira levar para outra aba
    cy.contains('a', 'Política de Privacidade')
      .should('have.attr', 'href', '_blank')
      .and('have.attr', 'target', '_blank')

  })
})
