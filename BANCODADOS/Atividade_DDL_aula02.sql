/* ============================================================
   🧩 ATIVIDADE DE SQL – DDL (MySQL)
   Tema: Banco de Dados Escolar
   ============================================================ */

/* ===========================
   ETAPA 1 – CRIAÇÃO DO BANCO
   =========================== */

/*
1. Crie um banco de dados chamado Escola.
2. Selecione o banco de dados para uso.
*/


/* ===============================
   ETAPA 2 – CRIAÇÃO DAS TABELAS
   =============================== */

/*
Crie as tabelas a seguir com as colunas e restrições indicadas:
*/

/* --------- Tabela Alunos ---------
id (inteiro, chave primária, auto incremento)
nome (texto de até 100 caracteres, não nulo)
data_nascimento (tipo DATE, não nulo)
email (texto de até 100 caracteres, deve ser único)
---------------------------------- */


/* --------- Tabela Professores ---------
id (inteiro, chave primária, auto incremento)
nome (texto de até 100 caracteres, não nulo)
area_atuacao (texto de até 50 caracteres, não nulo)
----------------------------------------- */


/* --------- Tabela Disciplinas ---------
id (inteiro, chave primária, auto incremento)
nome (texto de até 100 caracteres, não nulo)
id_professor (inteiro, chave estrangeira que referencia a tabela Professores)
------------------------------------------ */


/* --------- Tabela Matriculas ---------
id (inteiro, chave primária, auto incremento)
id_aluno (inteiro, chave estrangeira que referencia a tabela Alunos)
id_disciplina (inteiro, chave estrangeira que referencia a tabela Disciplinas)
data_matricula (tipo DATE, deve ser informado manualmente)
--------------------------------------- */


/* ====================================
   ETAPA 3 – ALTERAÇÕES NA ESTRUTURA
   ==================================== */

/*
Após criar todas as tabelas, execute as operações abaixo:

1. Adicione uma coluna chamada telefone (VARCHAR(15)) à tabela Alunos.
2. Renomeie a coluna area_atuacao da tabela Professores para especialidade.
3. Remova a coluna telefone da tabela Alunos.
*/


/* ========================
   ETAPA 4 – EXCLUSÕES
   ======================== */

/*
1. Exclua a tabela Matriculas.
2. Exclua o banco de dados Escola.
*/

/* ============================================================
   FIM DA ATIVIDADE
   ============================================================ */
