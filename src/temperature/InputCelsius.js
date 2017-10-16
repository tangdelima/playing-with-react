import React from 'react';
import TempUtils from './Utils.js';

class InputCelsius extends React.Component {

    constructor(props) {
        super(props);
    }

    onChange = (input) => {
        this.props.onChange(input);
    }

    render() {
        var temp = this.props.value.scale === 'c' ?
                this.props.value.value :
                TempUtils.toCelsius(this.props.value.value);
        return (
            <input type="number" value={temp} onChange={this.onChange} />
        );
    }

}

export default InputCelsius;