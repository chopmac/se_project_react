import "../blocks/ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <li className="card">
      <img
        src={item.link}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
      <div className="card__name">{item.name}</div>
    </li>
  );
}

export default ItemCard;