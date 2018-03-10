


import React, {Component} from 'react';


class TempConverter extends Component {

	constructor(props) {

		super(props);

		this.state =  {
			celsius: 0
		}
	}

	handleCelsiusChange(e) {
		this.setState({ celsius: e.target.value});
	}

	
	render() {
		return (

			<fieldset>

				<legend> Temperature Converter </legend>
				<input 
					type='number' 
					value={this.state.celsius}
					onChange = {this.handleCelsiusChange()}
					/> °C
				<div id="message"></div>


			</fieldset>

		)


	}


}

export default TempConverter;