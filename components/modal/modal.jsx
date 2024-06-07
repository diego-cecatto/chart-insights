import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-2xl">
        <div className="p-4 border-b">
          <button
            onClick={onClose}
            className="float-right text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
