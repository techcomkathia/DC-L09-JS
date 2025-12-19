// src/pages/Page2.js

import React, { useState } from 'react';
import Form from '../components/Form';
import SuccessModal from '../components/SuccessModal';

function Page2() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div>
      <h1 data-cy="page2-title">Página 2</h1>
      <Form onSubmit={handleSubmit} />
      <SuccessModal show={isSubmitted} handleClose={closeModal} />
    </div>
  );
}

export default Page2;
