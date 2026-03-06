import "../blocks/ModalWithForm.css";

function ModalWithForm({ 
  children, 
  buttonText, 
  title, 
  isOpen, 
  name, 
  onClose 
}) {
  return (
    <div className={`modal modal_type_${name} ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <button 
          className="modal__close" 
          type="button" 
          onClick={onClose} 
        />
        <h3 className="modal__title">{title}</h3>
        <form className="modal__form" name={name}>
          {children} {}
          <button className="modal__submit" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;