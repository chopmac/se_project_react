import React from "react";
import ItemCard from "../components/ItemCard"; 
import "../blocks/ClothesSection.css";

function ClothesSection({ onSelectCard, clothingItems, onCreateModal }) {
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
        {clothingItems.map((item) => (
          <ItemCard
            key={item._id || item.id}
            item={item}
            onSelectCard={onSelectCard}
          />
        ))}
      </ul>
    </div>
  );
}

export default ClothesSection;