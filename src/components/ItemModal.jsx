import React, { useContext } from "react";
import "../blocks/ItemModal.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemModal({ isOpen, card, onClose, onDeleteCard }) {
  const currentUser = useContext(CurrentUserContext);

  if (!card) return null;

  const isOwn = card.owner === currentUser?._id;

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
        />

        <img src={card.imageUrl} alt={card.name} className="modal__image" />
        <div className="modal__footer">
          <div className="modal__footer-top">
            <h2 className="modal__caption">{card.name}</h2>
            {onDeleteCard && isOwn && (
              <button
                className="modal__delete-button"
                type="button"
                onClick={() => onDeleteCard(card)}
              >
                Delete item
              </button>
            )}
          </div>
          <p className="modal__weather-type">Weather: {card.weather}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;