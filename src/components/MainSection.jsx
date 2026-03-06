import "../blocks/main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";

function Main({ weatherTemp, weatherCondition, onSelectCard, clothingItems }) {
  return (
    <main className="main">
      <WeatherCard weatherTemp={weatherTemp} />
      <section className="main__clothes">
        <div className="main__info">
          Today is {weatherTemp}° F / You should wear:
        </div>
        <ul className="main__items">
          {clothingItems
            .filter((item) => {
              return item.weather.toLowerCase() === weatherCondition.toLowerCase();
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id}
                  item={item}
                  onSelectCard={onSelectCard}
                />
              );
            })}
        </ul>
      </section>
    </main>
  );
}

export default Main;