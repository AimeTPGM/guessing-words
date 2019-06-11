import React, { Component } from 'react'
import Time from './Time'
import Words from './Words'

class Start extends Component {

    state = {
        score: 0,
        wordsNumber: 0,
        showWords: this.props.words.filter((word) => word.correct===false)
    }

    nextWord = () => {
        if(this.state.wordsNumber+1 === this.state.showWords.length){
            this.setState({...this,wordsNumber: 0})
        }else{
            this.setState({
                ...this,wordsNumber: this.state.wordsNumber+1
            })
        }
    }

    updateshowWords = () => {
        this.setState({
            showWords: this.props.words.filter((word) => word.correct===false)
        })
    }

    keyHanding = (e) => {
        console.log("This is the key "+e.keyCode)
        if(e.keyCode === 37){
            this.setState({
                ...this,score: this.state.score+1
            })
            this.props.correctWord(this.state.wordsNumber)
            this.updateshowWords()
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
                <Words words={this.state.showWords} nextWord={this.nextWord} wordsNumber={this.state.wordsNumber}/>
                <h1>Score: {this.state.score}</h1>
            </div>
        )
    }
}

export default Start
