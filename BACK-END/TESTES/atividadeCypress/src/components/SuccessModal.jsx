// src/components/SuccessModal.js

import React from 'react';

function SuccessModal({ show, handleClose }) {
  if (!show) return null;

  return (
    <div className="modal" onClick={handleClose} data-cy="modal">
      <div className="modal-content" onClick={e => e.stopPropagation()} data-cy="modal-content">
        <span className="close" onClick={handleClose} data-cy="modal-close">&times;</span>
        <p data-cy="modal-message">Conteúdo enviado</p>
      </div>
    </div>
  );
}

export default SuccessModal;
