// src/pages/Page1.js

import React, { useState } from 'react';

function Page1() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1 data-cy="page1-title">Página 1</h1>
      <p data-cy="page1-count">Contagem: {count}</p>
      <button onClick={() => setCount(count + 1)} data-cy="page1-add-count">Adicionar Contagem</button>
    </div>
  );
}

export default Page1;
