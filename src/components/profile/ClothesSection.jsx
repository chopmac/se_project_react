import React, { useContext } from "react";
import ItemCard from "../ItemCard.jsx"; 
import "../../blocks/ClothesSection.css";
// Import your CurrentUserContext (adjust path if needed)
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js"; 

function ClothesSection({ 
  onSelectCard, 
  clothingItems, 
  onCreateModal, 
  isLoggedIn, 
  onCardLike 
}) {
  const currentUser = useContext(CurrentUserContext);

  const userItems = clothingItems.filter(
    (item) => item.owner === currentUser?._id
  );

  return (
    <div className="clothes-section">
      <div className="clothes-section__header">
        <p className="clothes-section__title">Your items</p>
        <button 
          className="clothes-section__add-btn" 
          type="button" 
          onClick={onCreateModal}
        >
          + Add New
        </button>
      </div>
      <ul className="clothes-section__items">
        {userItems.map((item) => (
          <ItemCard
            key={item._id || item.id}
            item={item}
            onSelectCard={onSelectCard}
            isLoggedIn={isLoggedIn}
            onCardLike={onCardLike}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;