import "../blocks/DeleteConfirmationModal.css";

function DeleteConfirmationModal({ isOpen, onClose, onDelete }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onClick={onClose}>
      <div className="modal__content modal__content_type_confirm" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" type="button" onClick={onClose} />
        <div className="modal__confirm-container">
          <p className="modal__confirm-text">
            Are you sure you want to delete this item? <br />
            This action is irreversible.
          </p>
          <button className="modal__confirm-delete" type="button" onClick={onDelete}>
            Yes, delete item
          </button>
          <button className="modal__confirm-cancel" type="button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteConfirmationModal;