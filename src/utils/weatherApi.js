import { latitude, longitude, apiKey } from "./constants";

export const getWeather = () => {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=imperial&appid=${apiKey}`,
  ).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Error: ${res.status}`);
    }
  });
};

export const filterDataFromApi = (data) => {
  const temp = Math.round(data.main.temp);

  let condition = "";
  if (temp >= 86) {
    condition = "hot";
  } else if (temp >= 66 && temp <= 85) {
    condition = "warm";
  } else {
    condition = "cold";
  }

  return {
    temp: temp,
    city: data.name,
    condition: condition,
  };
};
