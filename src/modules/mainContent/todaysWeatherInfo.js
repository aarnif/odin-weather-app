import utils from "../../utils/utils.js";

const displayTodaysWeatherInfo = (displayUnit, todaysWeatherInfo) => {
  const percent = "%";
  const weatherInfo = document.createElement("div");
  const weatherInfoList = document.createElement("ul");

  const feelDegree =
    displayUnit === "Celcius"
      ? todaysWeatherInfo.temperatureC
      : todaysWeatherInfo.temperatureF;

  const weatherInfoListItems = [
    { SUNRISE: todaysWeatherInfo.sunrise },
    { SUNSET: todaysWeatherInfo.sunset },
    {
      "CHANCE OF RAIN": todaysWeatherInfo.changeOfRain + " " + percent,
    },
    { HUMIDITY: todaysWeatherInfo.humidity + " " + percent },
    {
      WIND: [
        todaysWeatherInfo.windDirection,
        utils.convertToMetersPerSecond(todaysWeatherInfo.windSpeed).toFixed(2) +
          " m/s",
      ],
    },
    { "FEELS LIKE": feelDegree + "°" },
    { PRECAPITATION: todaysWeatherInfo.precapitation + " cm" },
    { PRESSURE: todaysWeatherInfo.pressure + " hPa" },
    { VISIBILITY: todaysWeatherInfo.visibility + " km" },
    { "UV INDEX": todaysWeatherInfo.uvIndex },
  ];

  for (let i = 0; i < weatherInfoListItems.length; i += 2) {
    const listItem = document.createElement("li");
    const rowItems = weatherInfoListItems.slice(i, i + 2);

    for (let j = 0; j < 2; ++j) {
      const subList = document.createElement("ul");
      const listItemHeader = document.createElement("li");
      const listItemValue = document.createElement("li");
      const objectKey = Object.keys(rowItems[j])[0];
      const objectValue = Object.values(rowItems[j])[0];

      if (objectKey === "WIND") {
        listItemHeader.textContent = objectKey;
        listItemValue.textContent = `${objectValue[0]} ${objectValue[1]}`;
      } else {
        listItemHeader.textContent = objectKey;
        listItemValue.textContent = objectValue;
      }

      subList.appendChild(listItemHeader);
      subList.appendChild(listItemValue);
      listItem.appendChild(subList);
      weatherInfoList.appendChild(listItem);
    }
  }

  weatherInfo.appendChild(weatherInfoList);
  return weatherInfo;
};

export default displayTodaysWeatherInfo;
