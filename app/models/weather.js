export default class Weather {
  constructor(data) {

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.main = data.weather.main
    // this.icon = data.weather.icon
    this.humidity = data.main.humidity
  }


  Template() {
    return `
    <div class="card" style="width: 18rem;">
      <img src="..." class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">Weather</h5>
        <ul> 
        <li>${this.main}</li>
        <Li>${this.city}</li>
        <Li>${this.humidity}</li>
        <li>${this.kelvin * 1.8 - 459.67}</li>
        </ul>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `
  }
}