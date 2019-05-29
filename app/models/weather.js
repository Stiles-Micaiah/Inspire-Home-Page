export default class Weather {
  constructor(data) {
   
    this.city = data.name,
    this.kelvin = data.main.temp,
    this.humidity = data.main.humidity,
    this.description = data.weather[0].description,
    this.icon = data.weather[0].icon,
    this.windSpeed = data.wind.speed,
    this.celcius = (data.main.temp - 273).toFixed(2),
    this.farenheit= (((data.main.temp -273) * 1.8) + 32).toFixed(2) 
  }
  

  get Template(){
    return `
      <ul class="ul-body mr-auto navbar-nav">
				<li class="weather-li nav-item">${this.city}</li>
        <li class="weather-li nav-item">Kelvin: ${this.kelvin}</li>
        <li class="weather-li nav-item">Celcius: ${this.celcius}</li>
        <li class="weather-li nav-item">Farenheit: ${this.farenheit}</li>
        <li class="weather-li nav-item">${this.description}</li>
        <li class="card-subtitle mb-2 nav-item">Humidity: ${this.humidity}%</li>
        <li class="card-subtitle mb-2 nav-item">Wind Speed: ${this.windSpeed}Yeets</li>
      </ul>
    `
  }

  get  TemplateIcon() {
return `
<img src="http://openweathermap.org/img/w/${this.icon}.png" alt=""></img>
`
  }
}