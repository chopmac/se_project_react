import { latitude, longitude, apiKey } from "./constants";

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

const mapWeatherType = (condition) => {
  const weatherMap = {
    Clear: "sunny",
    Clouds: "cloudy",
    Rain: "rain",
    Thunderstorm: "storm",
    Snow: "snow",
    Mist: "fog",
    Fog: "fog",
  };
  return weatherMap[condition] || "sunny";
};

export const filterDataFromApi = (data) => {
  const main = data.main;
  const weather = data.weather[0];
  const temperature = main && main.temp;
  
  return {
    temp: Math.round(temperature),
    city: data.name,
    condition: mapWeatherType(weather.main),
  };
};