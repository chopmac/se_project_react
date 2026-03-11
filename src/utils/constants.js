import sunnyDay from "../assets/SunnyDay.svg";
import cloudyDay from "../assets/Cloudy.svg";
import rainyDay from "../assets/Rainy.svg";
import stormDay from "../assets/Thunderstorm.svg";
import snowDay from "../assets/Snowy.svg";
import fogDay from "../assets/Foggy.svg";

import sunnyNight from "../assets/Moon.svg";
import cloudyNight from "../assets/CloudyNight.svg";
import rainyNight from "../assets/RainyNight.svg";
import stormNight from "../assets/ThunderstormNight.svg";
import snowNight from "../assets/SnowyNight.svg";
import fogNight from "../assets/FoggyNight.svg";

export const apiKey = "485867c7d90a2ce54e3279284ad00735";
export const latitude = "45.68";
export const longitude = "9.23";

export const weatherOptions = [
  { url: sunnyDay, day: true, type: "sunny" },
  { url: cloudyDay, day: true, type: "cloudy" },
  { url: rainyDay, day: true, type: "rain" },
  { url: stormDay, day: true, type: "storm" },
  { url: snowDay, day: true, type: "snow" },
  { url: fogDay, day: true, type: "fog" },
  { url: sunnyNight, day: false, type: "sunny" },
  { url: cloudyNight, day: false, type: "cloudy" },
  { url: rainyNight, day: false, type: "rain" },
  { url: stormNight, day: false, type: "storm" },
  { url: snowNight, day: false, type: "snow" },
  { url: fogNight, day: false, type: "fog" },
];