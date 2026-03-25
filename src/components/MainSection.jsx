import React from "react";
import "../blocks/Main.css";
import WeatherCard from "./WeatherCard";
import ItemCard from "./ItemCard";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function Main({
  weatherTemp,
  weatherCondition,
  isDay,
  onSelectCard,
  clothingItems,
}) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext,
  );

  return (
    <main className="main">
      <WeatherCard
        weatherTemp={weatherTemp}
        weatherCondition={weatherCondition}
        isDay={isDay}
      />
      <section className="main__clothes">
        <div className="main__info">
          Today is {weatherTemp}° {currentTemperatureUnit} / You should wear:
        </div>
        <ul className="main__items">
          {clothingItems
            .filter((item) => {
              return (
                item.weather.toLowerCase() === weatherCondition.toLowerCase()
              );
            })
            .map((item) => {
              return (
                <ItemCard
                  key={item._id || item.id}
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
