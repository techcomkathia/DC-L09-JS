
//agrupa um conjunto de testes
//recebe dois parâmetros: uma string com o nome do grupo de testes e uma função que contém os testes
describe('tela home', () => {
  //define um teste individual
  //recebe dois parâmetros: uma string com o nome do teste e uma função que contém as ações do teste
  it('acesso a tela home', () => {
    cy.visit('http://localhost:5173/')
  })

  //verificar se o texto Vite + React está visível na tela
  it('Verifica se o texto Vite + React está visível na tela', () => {
    //acessa a página inicial da aplicação
    cy.visit('http://localhost:5173/')
    cy.get('h1').should('be.visible')
    cy.get('h1').contains('Vite + React') 
    //outra forma de seleção usando a propriedade data-cy criada no App.jsx
    cy.get('h1[data-cy="titulo-principal"]').should('be.visible').contains('Vite + React')
  }
  )
})
// clonagem do repositório https://github.com/techcomkathia/testesFront - base para testes
// instalação do cypress: npm install cypress --save-dev
// comando para abrir o cypress: npx cypress open
// selecionar o icone de e2e testing
// selecionar o navegador desejado
// criar o primeiro teste 'renderização de títulos das páginas'
