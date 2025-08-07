async function getWeather() {
  const apiKey = 'YOUR_API_KEY';
  const city = document.getElementById('city').value;
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
  const data = await response.json();

  if (data.cod === 200) {
    document.querySelector('.weather-card').style.display = 'block';
    document.getElementById('cityName').innerText = data.name;
    document.getElementById('icon').src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById('temp').innerText = `Temperature: ${data.main.temp} °C`;
    document.getElementById('humidity').innerText = `Humidity: ${data.main.humidity}%`;
    document.getElementById('wind').innerText = `Wind Speed: ${data.wind.speed} m/s`;
  } else {
    alert('City not found!');
  }
}