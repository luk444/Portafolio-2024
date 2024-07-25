import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative bg-white p-4 rounded">
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        <img src={image} alt="Certificado" className="max-w-full max-h-screen" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.string,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
