import "../blocks/ItemCard.css";

function ItemCard({ item, onSelectCard }) {
  return (
    <li className="card">
      <div className="card__name">{item.name}</div>
      <img
        src={item.link}
        alt={item.name}
        className="card__image"
        onClick={() => onSelectCard(item)}
      />
    </li>
  );
}

export default ItemCard;
