import { latitude, longitude, APIkey } from "./constants";

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${APIkey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const getWeatherCondition = (temp) => {
  if (temp >= 86) {
    return "hot";
  } else if (temp >= 66 && temp < 86) {
    return "warm";
  } else {
    return "cold";
  }
};

export const filterDataFromApi = (data) => {
  const main = data.main;
  const temperature = main && main.temp;
  return {
    temp: Math.round(temperature),
    city: data.name,
    condition: getWeatherCondition(temperature),
  };
};