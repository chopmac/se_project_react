import "../blocks/WeatherCard.css";
import { weatherOptions } from "../utils/constants";

function WeatherCard({ weatherTemp, weatherCondition }) {
  const weatherOption = weatherOptions.find((option) => {
    return option.day === true && option.type === weatherCondition;
  });

  return (
    <section className="weather-card">
      <p className="weather-card__temp">{weatherTemp}° F</p>
      <img
        className="weather-card__image"
        src={weatherOption?.url}
        alt={weatherCondition}
      />
    </section>
  );
}

export default WeatherCard;