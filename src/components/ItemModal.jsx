import "../blocks/ItemModal.css";

function ItemModal({ isOpen, card, onClose }) {
  if (!card) return null;
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`} onClick={onClose}>
      <div
        className="modal__content modal__content_type_image"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        ></button>
        <img src={card.link} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <h2 className="modal__caption">{card.name}</h2>
          <p className="modal__weather-type">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
