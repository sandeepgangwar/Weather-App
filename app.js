"use strict";
searchButton.addEventListener('click', searchWeather);

function searchWeather() {
  loadingText.style.display = 'block';
  weatherBox.style.display = 'none';
  var cityName = searchCity.value.trim();

  if (cityName.length == 0) {
    alert('Please enter city name');
  }

  var http = new XMLHttpRequest();
  var method = 'GET';
  var apiKey = '';
  var url = 'https://api.apixu.com/v1/current.json?&q=' + cityName + '&key=' + apiKey;

  http.open(method, url);

  http.onreadystatechange = function() {
    if (http.readyState === XMLHttpRequest.DONE && http.status === 200) {
      var data = JSON.parse(http.responseText);
      var weatherData = new Weather(data.location.name, data.current.condition.text.toUpperCase());
      weatherData.temprature = data.current.temp_c;
     updateWeather(weatherData);
    } else if (http.readyState === XMLHttpRequest.DONE && http.status != 200) {
      alert('Somthing went wrong');
    }
  }
  http.send();
}


function updateWeather(weatherData){
      weatherCity.textContent = weatherData.cityName;
      weatherDescription.textContent = weatherData.description;
      weatherTemprature.textContent = weatherData.temprature;
      weatherBox.style.display = 'block';
      loadingText.style.display = 'none';
}