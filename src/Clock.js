import React from 'react';
import RegionController from './RegionController'

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            summerTime: true
        };
    }

    regions = [
        {
            uf: 'SP',
            name: "Sao Paulo"
        },
        {
            uf: 'RJ',
            name: "Rio de Janeiro"
        },
        {
            uf: 'PR',
            name: "Parana"
        }
    ];

    componentDidMount() {
        this._startClock();
    }

    componentWillUnmount() {
        this._stopClock();
    }

    tick() {
        this.setState({
            date : new Date()
        });
    }

    startClock = () => {
        this._startClock();
    }

    stopClock = () => {
        this._stopClock();
    }

    _startClock() {
        this.timer = setInterval(() => {this.tick()}, 1000);
    }

    _stopClock() {
        clearInterval(this.timer);        
    }

    render() {
        return (
        <div>
            { this.state.summerTime && 
            <p>Estamos no horario de verao!</p>
            }
            <p>Hora atual {this.state.date.toISOString()}</p>
            <div>
                <button onClick={this.startClock}>Start</button>
                <button onClick={this.stopClock}>Stop</button>
            </div>
            <RegionController />
        </div>
        )
    }
}

export default Clock;