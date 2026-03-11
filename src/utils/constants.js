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
  { url: sunnyDay, day: true, type: "hot" },
  { url: cloudyDay, day: true, type: "warm" },
  { url: rainyDay, day: true, type: "cold" },
  { url: stormDay, day: true, type: "cold" },
  { url: snowDay, day: true, type: "cold" },
  { url: fogDay, day: true, type: "warm" },
  { url: sunnyNight, day: false, type: "hot" },
  { url: cloudyNight, day: false, type: "warm" },
  { url: rainyNight, day: false, type: "cold" },
  { url: stormNight, day: false, type: "cold" },
  { url: snowNight, day: false, type: "cold" },
  { url: fogNight, day: false, type: "warm" },
];
