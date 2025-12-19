// src/components/Form.js

import React, { useState } from 'react';

function Form({ onSubmit }) {
  const [formData, setFormData] = useState({ nome: '', email: '', senha: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          data-cy="nome-input"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          data-cy="email-input"
          required
        />
      </div>
      <div>
        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          data-cy="senha-input"
          required
        />
      </div>
      <button type="submit" data-cy="submit-button">Enviar</button>
    </form>
  );
}

export default Form;


//utilize o chat do copilot para adicionar as propriedades data-cy em todos os componentes. 
//IMPORTANTE: adicione o diretorio dos componentes no contexto para que o copilot consiga enxergar os arquivos.
//utilize o modo agente do copilot para fazer as modificações necessárias nos arquivos.
//verifique as inserções feitas pelo copilot e corrija caso necessário.

//pensem em um teste que pode ser realizado para a página 3. Veja o comportamento da página e passe as instruções para o copilot criar o teste.