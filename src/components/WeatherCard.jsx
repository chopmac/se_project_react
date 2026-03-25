import React from "react";
import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";
import { CurrentTemperatureUnitContext } from "../contexts/CurrentTemperatureUnitContext";

function WeatherCard({ weatherTemp, weatherCondition, isDay }) {
  const { currentTemperatureUnit } = React.useContext(
    CurrentTemperatureUnitContext,
  );

  const weatherOption = weatherOptions.find((option) => {
    return option.day === isDay && option.type === weatherCondition;
  });

  const cardClassName = `weather-card ${isDay ? "" : "weather-card_night"}`;

  return (
    <section className={cardClassName}>
      <p className="weather-card__temp">
        {weatherTemp}° {currentTemperatureUnit}
      </p>
      {weatherOption?.url && (
        <img
          className="weather-card__image"
          src={weatherOption?.url}
          alt={weatherCondition}
        />
      )}
    </section>
  );
}

export default WeatherCard;
