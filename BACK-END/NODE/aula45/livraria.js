const express = require('express');
const app = express();

// Permite que o Express leia JSON no corpo das requisições
app.use(express.json());

let livros = [
  { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien', preco: 49.90 },
  { id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling', preco: 39.90 }
];

// Rota inicial
app.get('/', (req, res) => {
  res.send('API da Biblioteca do Cleitinho v1.0.0');
});

// Listar todos os livros
app.get('/livros', (req, res) => {
  res.json({
    quantidade: livros.length,
    livros
  });
});

// Adicionar novo livro
app.post('/livros', (req, res) => {
  const { titulo, autor, preco } = req.body;

  if (!titulo || !autor || preco === undefined) {
    return res.status(400).json({
      erro: 'Campos obrigatórios: titulo, autor, preco'
    });
  }

  const novoLivro = {
    id: livros.length > 0 ? Math.max(...livros.map(l => l.id)) + 1 : 1,
    titulo,
    autor,
    preco
  };

  livros.push(novoLivro);

  res.status(201).json({
    mensagem: 'Livro adicionado com sucesso',
    livro: novoLivro
  });
});

// Atualizar livro existente
app.put('/livros/:id', (req, res) => {
  const idLivro = parseInt(req.params.id);

  //certifique-se de que o body está vindo corretamente
  const { titulo, autor, preco } = req.body || {};

  const index = livros.findIndex(l => l.id === idLivro);

  if (index === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  // Atualiza apenas campos que vierem no body
  if (titulo !== undefined) livros[index].titulo = titulo;
  if (autor !== undefined) livros[index].autor = autor;
  if (preco !== undefined) livros[index].preco = preco;

  res.json({
    mensagem: 'Livro atualizado com sucesso',
    livroAtualizado: livros[index]
  });
});

// Deletar livro
app.delete('/livros/:id', (req, res) => {
  const idLivro = parseInt(req.params.id);
  const index = livros.findIndex(l => l.id === idLivro);

  if (index === -1) {
    return res.status(404).json({ erro: 'Livro não encontrado' });
  }

  const livroRemovido = livros.splice(index, 1)[0];

  res.json({
    mensagem: 'Livro removido com sucesso',
    livroRemovido
  });
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT} — http://localhost:${PORT}`);
});

