# testeCypress

Projeto de exemplo com páginas, componentes e configuração básica para testar interações usando Cypress.


## Comandos úteis

- Abrir a interface do Cypress (interativo):

```
npx cypress open
```

## Exercícios de Testes (sugestões)

Abaixo há exercícios simples que você pode transformar em testes E2E com Cypress. Cada item descreve ações que verificam renderização, preenchimento, cliques e mensagens.

- **Renderização do cabeçalho:** verificar se o componente de navegação é renderizado e contém links para `Página 1`, `Página 2`, `Página 3` e `Carrinho`.

- **Navegação entre páginas:** navegar para `/page2` e `/page3` e checar que o conteúdo esperado aparece (títulos, textos ou componentes específicos).

- **Formulário (preenchimento e submissão):** na página com o `Form.jsx` (se existir): preencher campos `nome`, `email` e `senha`, submeter e verificar que a ação esperada ocorre (ex.: modal de sucesso, redirecionamento ou mensagem de confirmação).

- **ProductCard - renderização e interação:** checar se o `ProductCard` mostra imagem, título e preço; clicar em `Adicionar ao Carrinho` e verificar se o `SuccessModal` aparece e (opcional) se redireciona para `/cart`.


- **Interações com cliques:** testar botões e links (ex.: remover item do carrinho, continuar comprando, fechar modal) e validar efeitos visuais ou mudanças de rota/estado.

- **Mensagens e validações:** para campos obrigatórios ou ações que mostram mensagens (ex.: "Seu carrinho está vazio"), escrever testes que forçam esses estados e verificam a mensagem exibida.


## Boas práticas para escrever os testes

- Use seletores estáveis: prefira `data-cy` ou `data-testid` quando possível.
- Evite depender apenas de índices de elementos; busque textos, labels e atributos.


---


