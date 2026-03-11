import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

function WeatherCard({ weatherTemp, weatherCondition, isDay }) {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === isDay && option.type === weatherCondition;
  });

  const cardClassName = `weather-card ${isDay ? "" : "weather-card_night"}`;

 return (
  <section className={cardClassName}>
    <p className="weather-card__temp">{weatherTemp}° F</p>
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