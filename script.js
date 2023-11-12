const apiKey = "53d22112941bff57a52856e745e6f559";
const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const search = document.getElementById("search");
const searchButton = document.getElementById("searchButton");
const currentLocation = document.getElementById("currentLocation");
const image = document.getElementById("image");
const pageError = document.getElementById("error");

pageError.style.display = "none";

async function checkWeather(city) {
  const response = await fetch(apiURL + city + `&appid=${apiKey}`);
  var data = await response.json();

  try {
    if (data.main.temp > 15) {
      console.log("its hot");
      currentLocation.innerHTML = data.name;
      temperature.innerHTML = Math.round(data.main.temp) + " °c";
      image.src = "hot.png";
      pageError.style.display = "none";
    } else if (data.main.temp < 15) {
      console.log("its cold");
      currentLocation.innerHTML = data.name;
      temperature.innerHTML = Math.round(data.main.temp) + " °c";
      image.src = "cold.png";
      pageError.style.display = "none";
    }
  } catch (error) {
    pageError.innerHTML = error;
    pageError.style.display = "block";
  }
}

searchButton.addEventListener("click", weatherButton);

function weatherButton() {
  checkWeather(search.value);
}
