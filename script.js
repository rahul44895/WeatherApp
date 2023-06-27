const city = "Allahabad";
const weather = async (city) => {
  const url =
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "9c2c145304mshd1651e93e4c252fp14520cjsneb7507de1aa1",
      "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    cityName.innerText = city[0].toUpperCase()+city.slice(1) ;
    cloud_pct.innerText = result.cloud_pct;
    wind_speed.innerText = result.wind_speed;
    temp.innerText = result.temp + "°C";
    feels_like.innerText = result.feels_like;
    humidity.innerText = result.humidity;
    min_temp.innerText = result.min_temp;
    max_temp.innerText = result.max_temp;
    wind_degrees.innerText = result.wind_degrees;
  } catch (error) {
    console.error(error);
  }
};

weather(city);
document.getElementById("submitBtn").addEventListener("click", () => {
  console.log(cityInput.value);
  weather(cityInput.value);
});
const date = new Date();
if (date.getHours > 6 && date.getHours() < 20) {
  // console.log("Day Time");
  document.body.style.backgroundImage = "url('./images/dayTime.jpg')";
} else {
  document.body.style.backgroundImage = "url('./images/nightTime.jpg')";
  // console.log("Night Time");
}