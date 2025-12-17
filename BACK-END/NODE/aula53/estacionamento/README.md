# 🚗 API -- Sistema de Gerenciamento de Estacionamento

Esta API foi desenvolvida para gerenciar as operações essenciais de um
sistema de estacionamento com múltiplas unidades.\
Ela atende aplicações **mobile**, **web** e **desktop**, oferecendo
recursos de cadastro, movimentações de veículos e pagamentos.

A arquitetura segue o padrão **MCV (Model--Controller--Service)** com
**Node.js**, **Express**, **Sequelize** e **MySQL**.

------------------------------------------------------------------------

## 🛠 Tecnologias Utilizadas

-   Node.js\
-   Express\
-   Sequelize\
-   MySQL\
-   Bcrypt\
-   JWT\
-   Nodemon\
-   Dotenv

------------------------------------------------------------------------

## 📦 Estrutura do Projeto

    src/
     ├── config/
     │    ├── database.js
     │    └── jwt.js
     ├── controllers/
     ├── services/
     ├── middlewares/
     ├── routes/
     ├── utils/
     ├── database/
     │    ├── models/
     │    ├── migrations/
     │    └── seeders/
     ├── app.js
     └── server.js

------------------------------------------------------------------------

## 🗂 Módulos da API

### 🔵 **Clientes**

Gerencia o cadastro de clientes.\
Rota base: `/clientes`

-   **POST /clientes** -- cria um cliente\
-   **GET /clientes** -- lista todos\
-   **GET /clientes/:id** -- busca por ID\
-   **PUT /clientes/:id** -- atualiza\
-   **DELETE /clientes/:id** -- remove

> Todas as rotas de clientes são **públicas**.

------------------------------------------------------------------------

## 🧾 Exemplo de JSON -- Criar Cliente

``` json
{
  "nome": "João da Silva",
  "telefone": "11987654321",
  "documento": "12345678900"
}
```

------------------------------------------------------------------------

## 🛠 Instalação do Projeto

### 1. Clone o repositório

``` bash
git clone nome-do-repositorio
```

### 2. Instale as dependências

``` bash
npm install express sequelize mysql2 bcrypt jsonwebtoken dotenv
npm install --save-dev nodemon
```

------------------------------------------------------------------------

## 🗄 Configuração do Banco de Dados

Crie o banco no MySQL Workbench:

``` sql
CREATE DATABASE estacionamentoFinal;
```

A conexão está configurada em:

`src/config/database.js`

``` javascript
const sequelize = new Sequelize('estacionamentoFinal', 'root', 'km2015', {
  host: 'localhost',
  dialect: 'mysql'
});
```

------------------------------------------------------------------------

## 🔧 Migrations (Sequelize CLI)

Inicialize o Sequelize:

``` bash
npx sequelize init
```

Execute as migrations:

``` bash
npx sequelize db:migrate
```

------------------------------------------------------------------------

## ▶ Executar o Servidor

### Modo normal:

``` bash
node src/server.js
```

### Modo desenvolvimento:

``` bash
npx nodemon src/server.js
```

Servidor rodará em:

    http://localhost:3000

------------------------------------------------------------------------

## 📡 Testes com Postman

Exemplo: criar cliente

-   Método: **POST**
-   URL: `http://localhost:3000/clientes`
-   Body (JSON):

``` json
{
  "nome": "Maria Oliveira",
  "telefone": "21987654321"
}
```

------------------------------------------------------------------------

## 🧩 Arquitetura

A API segue camadas organizadas:

-   **Model** → estrutura das tabelas\
-   **Service** → regras de negócio\
-   **Controller** → entrada e saída HTTP\
-   **Routes** → gerenciamento de endpoints\
-   **Middlewares** → autenticação e validações\
-   **Utils** → funções auxiliares

------------------------------------------------------------------------

## 🚀 Próximos Módulos

-   Usuários + Login JWT\
-   Unidades de Estacionamento\
-   Movimentações de entrada/saída\
-   Pagamentos\
-   Relatórios

------------------------------------------------------------------------

## 📄 Licença

Projeto desenvolvido para fins educacionais e laboratoriais.
