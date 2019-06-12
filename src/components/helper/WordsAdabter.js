import React, { Component } from 'react'
import CountDownTimer from '../feature/start/CountDownTimer'
import Words from '../feature/start/Words'

class WordsAdabter extends Component {

    render() {
        if(this.props.gameStart){
            return <Words words={this.props.showWords} nextWord={this.props.nextWord} wordsNumber={this.props.wordsNumber}/>
        }else{
            return <CountDownTimer setGameStart={this.props.setGameStart} />
        }
    }
}

export default WordsAdabter
