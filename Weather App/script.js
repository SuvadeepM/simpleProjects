// const input = document.getElementById("input");

// let inputValue = input.value;
// console.log(inputValue);

const cityName = `new york`;
const APIKEY = "119decb2507d4e992138f835dc9b95e0";
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKEY}`;

async function simplfiData() {
  let data = fetch(API_URL);

  data
    .then((response) => response.json())
    .then((jsonData) => {
      console.log(jsonData);
      let cityName = jsonData.name;
      console.log(cityName);
    })
    .catch((error) => console.error("Error fetching data:", error));
}

simplfiData();
