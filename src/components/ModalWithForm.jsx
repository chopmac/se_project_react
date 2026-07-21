import React from "react";
import "../blocks/ModalWithForm.css";

function ModalWithForm({
  children,
  buttonText,
  title,
  isOpen,
  name,
  onClose,
  onSubmit,
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        />
        <h3 className="modal__title">{title}</h3>

        <form className="modal__form" name={name} onSubmit={onSubmit}>
          {children}
          {buttonText && (
            <div className="modal__submit-container">
              <button className="modal__submit" type="submit">
                {buttonText}
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;