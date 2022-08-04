let weather = document.querySelector("#Weather_details");
let search = document.querySelector("#search");
let cityS = document.getElementById("city");

async function getwheatherdata(city) {
  let weath_data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90 `
  );
  var result = await weath_data.json();
  console.log(result);
  let cityres = cityS.value;
  if (cityres.length == 0) {
    alert("Please enter a location");
  } else {
    //console.log(res);
    console.log(result.weather[0].icon);
    console.log(result.weather[0].main);
    var weat_img = result.weather[0].main;
    console.log(result.weather[0].temp);
    console.log(result.name);
    console.log(result.main.temp_min);
    console.log(result.main.temp_max);
    console.log(result.wind.speed);
    weather.innerHTML = `
        <h2>${result.name}</h2>
        <h4 class="weather">${result.weather[0].main}</h4>
        <h4 class="desc">${result.weather[0].description}</h4>
        <h1>${Math.round(result.main.temp - 273.15)} &#176;C<img src="https://openweathermap.org/img/w/${result.weather[0].icon}.png"></h1>
        
        <div class="temp-container">
            <div id="left">
                <h4 class="title">Min.Temp</h4>
                <h4 class="temp">${Math.round(result.main.temp_min - 273.15)}&#176;C</h4>
            </div>
            <div id="right">
                <h4 class="title">Max.Temp</h4>
                <h4 class="temp">${Math.round(result.main.temp_max - 273.15)}&#176;C</h4>
            </div>
        </div>
        <div  class="wind">
                <h4 class="title">Wind</h4>
                <h4 class="windspeed">${result.wind.speed} Kmph</h4>
        </div>
        <div  class="wind-degree">
                <h4 class="title">Wind Deg</h4>
                <h4 class="winddegree">${result.wind.deg}&#176;C</h4>
        </div>
    `;
  }
  // if(weat_img == haze){
  //       document.querySelector("body").style="background:url('Cloudy.jpg');background-size:cover;";
  //    }
}
function getData() {
  getwheatherdata(cityS.value);
}