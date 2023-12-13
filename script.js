window.addEventListener("DOMContentLoaded", () => {
  const send = document.getElementById("button-send");
  send.addEventListener("click", () => sendCity());
});

function loadCity(ciudad) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=dcec7df661b1e6b0edab51d796b7339c&units=metric&lang=es`
  )
    .then((response) => response.json())
    .then((json) => {
      document.querySelector(".container").style.visibility = "visible";
      document.querySelector("#city").textContent = json.name;
      document.querySelector("#temperature").innerHTML =
        json.main.temp.toFixed(1) + "<sup>°C</sup>";
      document.querySelector("#description").textContent =
        json.weather[0].description;
      document.querySelector("#wicon").src =
        "https://openweathermap.org/img/wn/" + json.weather[0].icon + "@2x.png";
      console.log(json);
    })
    .catch((error) => console.log("Error: " + error));
}

function sendCity() {
  const city = document.getElementsByTagName("input")[0].value;
  loadCity(city);
}
