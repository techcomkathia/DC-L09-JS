describe('Teste de adição ao carrinho - Página 3', () => {
    //montagem do ambiente
  beforeEach(() => {
    // Acessa a página 3 (ajuste a porta se necessário)
    cy.visit('http://localhost:5173/page3');
  });

    it('Deve exibir imagem, nome e preço do produto', () => {
        cy.get('[data-cy="product-image"]').should('be.visible');
        cy.get('[data-cy="product-title"]').should('be.visible').and('contain', 'Produto');
        cy.get('[data-cy="product-price"]').should('be.visible');
    });

    it('Ao adicionar ao carrinho mostra modal e navega para a página carrinho', () => {
        cy.clock();
        cy.get('[data-cy="add-to-cart"]').should('be.visible').click();
        
        // Capturar screenshot do modal
        cy.screenshot('pagina3/modal-aparecendo');
        
        cy.get('[data-cy="modal"]').should('be.visible');
        cy.tick(2000);
        
        // Capturar screenshot após navegação
        cy.screenshot('apos-navegacao-carrinho');
        
        cy.url().should('include', '/cart');
    });

  

    it('Ao adicionar ao carrinho mostra modal e navega para a página carrinho', () => {
    // Usar relógio falso para avançar o timeout de navegação controladamente
        cy.clock();

        // Clicar em adicionar ao carrinho
        cy.get('[data-cy="add-to-cart"]').should('be.visible').click();

        // O modal deve aparecer
        cy.get('[data-cy="modal"]').should('be.visible');
        cy.get('[data-cy="modal-message"]').should('contain', 'Conteúdo enviado');

        // Avançar 2 segundos (2000ms) para simular o timeout usado no componente
        cy.tick(2000);

        // Verificar que houve navegação para /cart
        cy.url().should('include', '/cart');

        // Verificar que a página carrinho está renderizada
        cy.get('[data-cy="cart-title"]').should('be.visible').and('contain', 'Carrinho');
    });
});
