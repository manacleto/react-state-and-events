import React, { Component } from 'react';
import TemperatureInput from './TemperatureInput';

class TempConverter extends Component {

	constructor () {

		super();

		/*this.state =  {
			celsius: 0
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
*/
		this.state =  {
			celsius: 0,
			fahrenheit: 0
		}

		this.handleCelsiusChange    = this.handleCelsiusChange.bind(this);
	  this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

	}

  toCelsius = (f) => {
    return (f - 32) * 5/9;
  }

	toFahrenheit = (c) => {
		return (c * 9/5) + 32;
	}

	handleCelsiusChange(e) {
		this.setState({ 
			celsius: e.target.value,
			fahrenheit: this.toFahrenheit(e.target.value)
		});
	}

	handleFahrenheitChange(e) {
		this.setState({ 
			fahrenheit: e.target.value,
			celsius: this.toCelsius(e.target.value)
		});
	}

	render() {
		return (

			<fieldset>

				<legend> Temperature Converter </legend>

				<p><TemperatureInput 
					value={this.state.celsius} 
					changeHandler={this.handleCelsiusChange}
					label='°C'/></p>
				<p><TemperatureInput 
					value={this.state.fahrenheit} 
					changeHandler={this.handleFahrenheitChange}
					label='°F'/></p>

	     <div id="message">
        {
          this.state.celsius >= 100 ? 'Boiling!' : 'Not Boiling...'
        }
        </div>
  		</fieldset>

	
		)


	}



}

export default TempConverter;