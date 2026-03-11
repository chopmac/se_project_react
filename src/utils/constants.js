export const apiKey = "485867c7d90a2ce54e3279284ad00735";
export const latitude = "45.68";
export const longitude = "9.23";
export const weatherOptions = [
  {
    url: new URL("../assets/SunnyDay.svg", import.meta.url).href,
    day: true,
    type: "sunny",
  },
  {
    url: new URL("../assets/Cloudy.svg", import.meta.url).href,
    day: true,
    type: "cloudy",
  },
  {
    url: new URL("../assets/Rainy.svg", import.meta.url).href,
    day: true,
    type: "rain",
  },
  {
    url: new URL("../assets/Thunderstorm.svg", import.meta.url).href,
    day: true,
    type: "storm",
  },
  {
    url: new URL("../assets/Snow.svg", import.meta.url).href,
    day: true,
    type: "snow",
  },
  {
    url: new URL("../assets/Fog.svg", import.meta.url).href,
    day: true,
    type: "fog",
  },
  {
    url: new URL("../assets/Moon.svg", import.meta.url).href,
    day: false,
    type: "sunny",
  },
  {
    url: new URL("../assets/CloudyNight.svg", import.meta.url).href,
    day: false,
    type: "cloudy",
  },
  {
    url: new URL("../assets/RainyNight.svg", import.meta.url).href,
    day: false,
    type: "rain",
  },
  {
    url: new URL("../assets/ThunderstormNight.svg", import.meta.url).href,
    day: false,
    type: "storm",
  },
  {
    url: new URL("../assets/SnowyNight.svg", import.meta.url).href,
    day: false,
    type: "snow",
  },
  {
    url: new URL("../assets/FoggyNight.svg", import.meta.url).href,
    day: false,
    type: "fog",
  },
];