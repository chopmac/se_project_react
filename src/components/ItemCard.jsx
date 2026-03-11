import "../blocks/ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <li className="card" onClick={() => onSelectCard(item)}>
      <div className="card__image-container">
        <img className="card__image" src={item.link} alt={item.name} />
        <p className="card__name">{item.name}</p>
      </div>
    </li>
  );
}

export default ItemCard;
