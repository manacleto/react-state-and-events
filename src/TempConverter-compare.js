class TempConverter extends Component {

 constructor() {
   super();

   this.state = {
     celsius: 0,
     fahrenheit: 0
   }

   this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
   this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
 }

const toCelsius = (f) => {
  return (f - 32) * 5 / 9;
}

const toFahrenheit = (c) => {
  return (c * 9 / 5) + 32;
}


handleCelsiusChange(e) {
 this.setState({ 
    celsius: e.target.value, 
    fahrenheit: toFahrenheit(e.target.value) 
  });
  }

handleFahrenheitChange(e) {
 this.setState({ 
  fahrenheit: e.target.value, 
  celsius: toCelsius(e.target.value) 
  });
  }


 render() {
   return (
     <fieldset>
       <legend>Temperature Conversion</legend>
       <TemperatureInput
         label="°C"
         value={this.state.celsius}
         changeHandler={this.handleCelsiusChange} />
       <TemperatureInput
         label="°F"
         value={this.state.fahrenheit}
         changeHandler={this.handleFahrenheitChange} />     
     </fieldset>
   )
 }
}
