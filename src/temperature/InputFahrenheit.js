import React from 'react';
import TempUtils from './Utils.js';

class InputFahrenheit extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange = (input) => {
        this.props.onChange(input);
    }

    render() {
        var temp = this.props.value.scale === 'f' ?
                this.props.value.value :
                TempUtils.toFahrenheit(this.props.value.value);
        return (
            <input type="number" value={temp} onChange={this.onChange} />
        );
    }

}

export default InputFahrenheit;