import React, { Component } from 'react'
import Countdown from 'react-countdown-now';

class Time extends Component {

    startTimer = (e) => {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count-1
            }))
            if(this.state.count === 0){
                console.log("this counter is 0")
                clearInterval(this.myInterval)
            }
        },1000)
    }
    state = {
        count: parseInt(this.props.time),
        startCount: false
    }

    componentDidMount = () => {
        
    }
    componentWillUnmount = () => {
        clearInterval(this.myInterval)
    }

    render() {
        return (
            <div>
                <h1>Time remain:  {this.state.count} </h1>
                <button className="start-button-center" value={true} onClick={this.startTimer}>Start</button>
            </div>
        )
    }
}

export default Time
