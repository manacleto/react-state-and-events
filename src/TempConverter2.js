


import React, {Component} from 'react';
import TemperatureInput from './TemperatureInput';

class TempConverter extends Component {

	constructor(props) {

		super(props);

		/*this.state =  {
			celsius: 0
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);*/

		this.state =  {
			celsius: 0,
			fahrenheit: 0
		}
		this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
	    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);

	}

	handleCelsiusChange(e) {
		this.setState({ celsius: e.target.value});
	}

	handleFahrenheitChange(e) {
		this.setState({ fahrenheit: e.target.value});
	}

	render() {
		return (

			<fieldset>

				<legend> Temperature Converter </legend>

				<p><TemperatureInput label='°C'/></p>
				<p><TemperatureInput label='°F'/></p>

				<div id="message"></div>


			</fieldset>

		)


	}


}

export default TempConverter;