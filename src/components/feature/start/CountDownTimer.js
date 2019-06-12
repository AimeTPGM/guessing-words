import React, { Component } from 'react'

class CountDownTimer extends Component {

    state = {
        countdown: 5
    }

    startGame = () => {
        this.props.setGameStart()
    }

    startTimer = ()=>{
        this.countDownInterval = setInterval(() => {
            this.setState(prevState => ({
                countdown: prevState.countdown-1
            }))
            if(this.state.countdown === 0){
                console.log("this countdown is 0")
                clearInterval(this.countDownInterval)
                this.startGame()
            }
        },1000)
    }

    render() {
        return (
            <div>
                <h1 className="words-center">{this.state.countdown}</h1>
                <button className="start-button-center" value={true} onClick={this.startTimer}>Start</button>
            </div>
        )
    }
}

export default CountDownTimer
