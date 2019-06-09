import React, { Component } from 'react'
import Time from './Time'
import Words from './Words'

class Start extends Component {

    state = {
        score: 0
    }

    keyHanding =(e)=>{
        console.log("This is the key "+e.keyCode)
        if(e.keyCode === 38){
            this.setState({
                ...this,score: this.state.score+1
            })
        }else if(e.keyCode === 40){
            this.setState({
                ...this,score: this.state.score-1
            })
        }
    }

    componentDidMount= (e) =>{
        window.addEventListener("keyup",this.keyHanding)
    }

    render() {
        return (
            <div>
                <h1>Team : {this.props.team}</h1>
                <Time time={this.props.time}/>
                <Words words={this.props.words} />
                <h1>Score: {this.state.score}</h1>
            </div>
        )
    }
}

export default Start
