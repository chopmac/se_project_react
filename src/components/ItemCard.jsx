import React, { useContext } from "react";
import "../blocks/ItemCard.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemCard({ item, onSelectCard, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  // Safely check if current user liked the item (handles both string IDs and user objects)
  const isLiked = item.likes?.some(
    (id) => id === currentUser?._id || id._id === currentUser?._id
  );

  const itemLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn_liked" : ""
  }`;

  const handleLike = (e) => {
    e.stopPropagation();
    onCardLike({ id: item._id || item.id, isLiked });
  };

  return (
    <li className="card" onClick={() => onSelectCard(item)}>
      <div className="card__header">
        <p className="card__name">{item.name}</p>
        {isLoggedIn && (
          <button
            type="button"
            className={itemLikeButtonClassName}
            onClick={handleLike}
            aria-label="Like item"
          />
        )}
      </div>
      <img className="card__image" src={item.imageUrl} alt={item.name} />
    </li>
  );
}

export default ItemCard;