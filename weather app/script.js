const apiKey = "924e31a3bc4451e100c1124a829af71e";

function getWeather() {

  // input se city name lena
  const city = document.getElementById("cityInput").value.trim();

  if (city === "") {
    alert("City name likho");
    return;
  }

  // API URL (dynamic city)
  const url =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // loading message
  document.getElementById("weatherResult").innerHTML =
    "<p>Loading...</p>";

  fetch(url)
    .then(response => response.json())
    .then(data => {

      // agar city galat ho
      if (data.cod != 200) {
        document.getElementById("weatherResult").innerHTML =
          "<p>City not found ❌</p>";
        return;
      }

      // weather show karna
      const icon =
  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

document.getElementById("weatherResult").innerHTML = `
  <h3>${data.name}, ${data.sys.country}</h3>
  <img src="${icon}" alt="weather icon">
  <h2>${data.main.temp} °C</h2>
  <p>${data.weather[0].description}</p>
  <p>Wind: ${data.wind.speed} km/h</p>
`;
const weatherMain = data.weather[0].main.toLowerCase();

if (weatherMain.includes("cloud")) {
  document.body.style.background =
    "linear-gradient(135deg,#757f9a,#d7dde8)";
}
else if (weatherMain.includes("rain")) {
  document.body.style.background =
    "linear-gradient(135deg,#373B44,#4286f4)";
}
else if (weatherMain.includes("clear")) {
  document.body.style.background =
    "linear-gradient(135deg,#f7971e,#ffd200)";
}
else {
  document.body.style.background =
    "linear-gradient(135deg,#4facfe,#00f2fe)";
}
      
    })
    .catch(error => {
      console.log(error);
      document.getElementById("weatherResult").innerHTML =
        "<p>Something went wrong ⚠️</p>";
    });
}
