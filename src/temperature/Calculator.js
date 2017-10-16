import React, { Component } from 'react';
import InputCelsius from './InputCelsius';
import InputFahrenheit from './InputFahrenheit';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scale: 'c',
            value: 26
        };
    }

    onCelsiusChange = (input) => {
        this.setState({ value: input.target.value, scale: 'c' });
    }

    onFahrenheitChange = (input) => {
        this.setState({ value: input.target.value, scale: 'f' });
    }

    formatTemperature = () => {
        return this.state.scale === 'c' ? this.state.value + 'o C' : this.state.value + 'o F';
    }

    render() {
        return (
            <div>
                Temperature State: {this.formatTemperature()} <br />
                <InputCelsius value={this.state} onChange={this.onCelsiusChange} /><br />
                <InputFahrenheit value={this.state} onChange={this.onFahrenheitChange} /><br />
            </div>
        );
    }
}

export default Calculator;