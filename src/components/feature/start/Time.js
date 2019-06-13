import React, { Component } from 'react'

class Time extends Component {

    timeIt() {
        this.myInterval = setInterval(() => {
            this.setState(prevState => ({
                count: prevState.count-1
            }))
            if(this.state.count === 0){
                console.log("this counter is 0")
                clearInterval(this.myInterval)
                this.props.setGameStart()
            }
        },1000)
    }

    startTimer = () => {
        if(this.state.count > 0){
            this.props.setGameStart()
            this.timeIt()
        }
    }
    state = {
        count: parseInt(this.props.time)
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
