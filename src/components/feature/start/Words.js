import React, { Component } from 'react'

class Words extends Component {

    state = {
        gameStart: this.props.gameStart
    }

    // componentWillReceiveProps() {
    //     this.setState({
    //         gameStart: this.props.gameStart
    //     })
    // }

    keyHanding =(e)=>{
        console.log("This is the key "+e.keyCode)
        if(e.keyCode === 39 && this.props.gameStart){
            this.props.nextWord()
        }
    }

    componentDidMount= (e) =>{
        window.addEventListener("keyup",this.keyHanding)
    }

    render() {
        return (
            <div>
                <h1 className="words-center">{this.props.words[this.props.wordsNumber].wording}</h1>
            </div>
        )
    }
}

export default Words
