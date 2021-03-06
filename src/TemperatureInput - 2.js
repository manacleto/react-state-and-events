
import React, {Component} from 'react';


class TemperatureInput extends Component {

	constructor() {
		super();
		
		this.state = {
			temperature: 0
		}
		this.handleTempChange = this.handleTempChange.bind(this);
	}

	handleTempChange(e) {
		this.setState({ temperature: e.target.value});
	}

	render() {

		return(
			<div>
				<input 
					type='number' 
					value={this.state.temperature}
					onChange={this.handleTempChange}
					/> {this.props.label}
			</div>

		)
		
	}

}

export default TemperatureInput;


