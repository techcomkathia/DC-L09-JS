// - **Navegação entre páginas:** navegar para `/page2` e `/page3` e checar que o conteúdo esperado aparece (títulos, textos ou componentes específicos).

describe('Renderização dos títulos das páginas', () => {
  it('pagina home', () => {
    //acessar a página
    cy.visit('http://localhost:5173/')
    //selecionar o elemento h1 e verificar se contém o texto esperado
    cy.get('h1').contains('Página 1');
    //método get utiliza os seletores do CSS para selecionar elementos na página
    //para verificar uma dada propriedade do elemento use : nomeTag[atributo="valor"]

  })

  it('pagina page2', () => {
    cy.visit('http://localhost:5173/page2');
    cy.get('h1').contains('Página 2');
  })

  it('pagina page3', () => {
    cy.visit('http://localhost:5173/page3');
    cy.get('h1').contains('Página 3 - Detalhes do Produto');
  })

  it('carrinho', () => {
    cy.visit('http://localhost:5173/cart');
    cy.get('h1').contains('Carrinho');
  })
})

//adicionar a propriedade data-cy nos elementos h1 de cada página para facilitar a seleção nos testes