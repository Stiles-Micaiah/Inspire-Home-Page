import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let weather = _weatherService.Weather
	let template = weather.Template
	let templateIcon = weather.TemplateIcon
	document.getElementById('navbarColor01').innerHTML = template;
	document.getElementById('navbar-brand').innerHTML = templateIcon
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
