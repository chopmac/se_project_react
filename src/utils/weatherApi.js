import { latitude, longitude, apiKey } from "./constants";
import { checkResponse } from "./api";

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then(checkResponse);
};

export const filterDataFromApi = (data) => {
  const result = {};
  result.city = data.name;

  const tempF = data.main.temp;
  result.temp = {
    F: Math.round(tempF),
    C: Math.round(((tempF - 32) * 5) / 9),
  };

  if (tempF >= 86) {
    result.condition = "hot";
  } else if (tempF >= 66 && tempF <= 85) {
    result.condition = "warm";
  } else {
    result.condition = "cold";
  }

  return result;
};