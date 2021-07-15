import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Modal.scss';

function Modal({ buttonClassName, buttonContent, children }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className={buttonClassName} onClick={() => setOpen(!open)}>
        {buttonContent}
      </button>
      {open && (
        <div className="modal-container">
          <button type="button" className="btnclose" onClick={() => setOpen(!open)}>&#x2717;</button>
          {children}
        </div>
      )}
    </>
  );
}

Modal.propTypes = {
  buttonClassName: PropTypes.string,
  buttonContent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

Modal.defaultProps = {
  buttonClassName: '',
};

export default Modal;
