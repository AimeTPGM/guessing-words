import React, { Component } from 'react'
import Home from '../feature/home/Home'
import Start from '../feature/start/Start';

class Display extends Component {


    render() {
        if(this.props.page === "Home"){
            return <Home addWords={this.props.addWords} addTime={this.props.addTime} addTeamName={this.props.addTeamName}/>
        }else if(this.props.page === "Start"){
            return <Start words={this.props.words} time={this.props.time} team={this.props.team} />
        }else if(this.props.page === "Reset"){
            return <div><h1>This is reset page</h1></div>
        }
    }
}

export default Display
