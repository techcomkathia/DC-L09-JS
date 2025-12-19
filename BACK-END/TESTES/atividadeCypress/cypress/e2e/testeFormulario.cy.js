describe('Teste do Formulário - Página 2', () => {
  beforeEach(() => {
    // Acessa a página 2
    cy.visit('http://localhost:5173/page2');
  });

  it('Deve preencher o formulário com valores esperados e exibir modal de sucesso', () => {
    // Preencher o campo Nome
    cy.get('[data-cy="nome-input"]')
      .should('be.visible')
      .type('João Silva');

    // Preencher o campo Email
    cy.get('[data-cy="email-input"]')
      .should('be.visible')
      .type('joao.silva@example.com');

    // Preencher o campo Senha
    cy.get('[data-cy="senha-input"]')
      .should('be.visible')
      .type('senha123');

    // Verificar que os valores foram preenchidos
    cy.get('[data-cy="nome-input"]').should('have.value', 'João Silva');
    cy.get('[data-cy="email-input"]').should('have.value', 'joao.silva@example.com');
    cy.get('[data-cy="senha-input"]').should('have.value', 'senha123');

    // Clicar no botão Enviar
    cy.get('[data-cy="submit-button"]').click();

    // Verificar se o modal de sucesso aparece
    cy.get('.modal').should('be.visible');
    cy.get('.modal-content').should('be.visible');
    cy.get('.modal-content p').should('contain', 'Conteúdo enviado');
  });

  it('Deve fechar o modal ao clicar no botão de fechar', () => {
    // Preencher e enviar o formulário
    cy.get('[data-cy="nome-input"]').type('Maria Santos');
    cy.get('[data-cy="email-input"]').type('maria.santos@example.com');
    cy.get('[data-cy="senha-input"]').type('senha456');
    cy.get('[data-cy="submit-button"]').click();

    // Verificar que o modal é exibido
    cy.get('.modal').should('be.visible');

    // Fechar o modal clicando no X
    cy.get('.close').click();

    // Verificar que o modal desapareceu
    cy.get('.modal').should('not.exist');
  });

  it('Deve validar campos obrigatórios do formulário', () => {
    // Tentar enviar formulário vazio
    cy.get('[data-cy="submit-button"]').click();

    // Verificar que o navegador exibe mensagem de validação
    cy.get('[data-cy="nome-input"]').then(input => {
      expect(input[0].validationMessage).to.not.be.empty;
    });
  });
});
