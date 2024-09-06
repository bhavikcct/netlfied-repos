import React from "react";
import ReactDOM from "react-dom";
import "../styles/modal.css"; 

const Modal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>New Build Available</h2>
        <p>A new build is available. Do you want to reload the page?</p>
        <div className="modal-actions">
          <button className="btn-confirm" onClick={onConfirm}>
            Yes, Reload
          </button>
          <button className="btn-cancel" onClick={onClose}>
            No, Close
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root") 
  );
};

export default Modal;
