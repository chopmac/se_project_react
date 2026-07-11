import React, { useContext } from "react";
import "../blocks/ItemCard.css";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function ItemCard({ item, onSelectCard, onCardLike, isLoggedIn }) {
  const currentUser = useContext(CurrentUserContext);

  const isLiked = item.likes && item.likes.some((id) => id === currentUser?._id);

  const itemLikeButtonClassName = `card__like-btn ${
    isLiked ? "card__like-btn_liked" : ""
  }`;

  const handleLike = (e) => {
    e.stopPropagation();
    onCardLike({ id: item._id || item.id, isLiked });
  };

  return (
    <li className="card" onClick={() => onSelectCard(item)}>
      <div className="card__image-container">
        <img className="card__image" src={item.imageUrl} alt={item.name} />
        <div className="card__info">
          <p className="card__name">{item.name}</p>
          {isLoggedIn && (
            <button
              type="button"
              className={itemLikeButtonClassName}
              onClick={handleLike}
            ></button>
          )}
        </div>
      </div>
    </li>
  );
}

export default ItemCard;