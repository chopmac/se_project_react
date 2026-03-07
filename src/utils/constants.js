export const APIkey = "485867c7d90a2ce54e3279284ad00735";
export const latitude = "45.68";
export const longitude = "9.23";
export const weatherOptions = [
  {
    url: new URL("../assets/day/sunny.svg", import.meta.url).href,
    day: true,
    type: "sunny",
  },
  {
    url: new URL("../assets/day/cloudy.svg", import.meta.url).href,
    day: true,
    type: "cloudy",
  },
  {
    url: new URL("../assets/day/rain.svg", import.meta.url).href,
    day: true,
    type: "rain",
  },
  {
    url: new URL("../assets/day/storm.svg", import.meta.url).href,
    day: true,
    type: "storm",
  },
  {
    url: new URL("../assets/day/snow.svg", import.meta.url).href,
    day: true,
    type: "snow",
  },
  {
    url: new URL("../assets/day/fog.svg", import.meta.url).href,
    day: true,
    type: "fog",
  },
  {
    url: new URL("../assets/night/sunny.svg", import.meta.url).href,
    day: false,
    type: "sunny",
  },
  {
    url: new URL("../assets/night/cloudy.svg", import.meta.url).href,
    day: false,
    type: "cloudy",
  },
  {
    url: new URL("../assets/night/rain.svg", import.meta.url).href,
    day: false,
    type: "rain",
  },
  {
    url: new URL("../assets/night/storm.svg", import.meta.url).href,
    day: false,
    type: "storm",
  },
  {
    url: new URL("../assets/night/snow.svg", import.meta.url).href,
    day: false,
    type: "snow",
  },
  {
    url: new URL("../assets/night/fog.svg", import.meta.url).href,
    day: false,
    type: "fog",
  },
];