import React, { Component } from 'react'
import Time from './Time'
import Words from './Words'
import WordsAdabter from '../../helper/WordsAdabter';

class Start extends Component {

    state = {
        score: 0,
        wordsNumber: 0,
        showWords: this.props.words.filter((word) => word.correct===false),
        gameStart: false
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

    setGameStart = () => {
        this.setState({
            ...this, gameStart: !this.state.gameStart
        })
    }


    updateshowWords = () => {
        if(this.state.wordsNumber >= this.state.showWords.length-1){
            this.setState({
                ...this,wordsNumber: 0
            })
        }
        console.log('This is the wordsnumber' + this.state.wordsNumber)
        if(this.state.showWords.length === 1){
            this.setState({
                ...this,
                showWords: [{wordId:0, wording: 'You Got It All!', correct: false}],
                gameStart: false,
                wordsNumber: 0
            })
        }else{
            this.setState({
                showWords: this.props.words.filter((word) => word.correct===false)
            })
        }
    }

    keyHanding = (e) => {
        console.log("This is the key "+e.keyCode)
        if(e.keyCode === 37 && this.state.gameStart){
            this.setState({
                ...this,score: this.state.score+1
            })
            console.log('this is the show words id '+this.state.showWords.wordId)
            this.props.correctWord(this.state.showWords[this.state.wordsNumber].wordId)
            this.updateshowWords()
        }
        // else if(e.keyCode === 40){
        //     this.setState({
        //         ...this,score: this.state.score-1
        //     })
        // }
    }

    componentDidMount= (e) =>{
        window.addEventListener("keyup",this.keyHanding)
    }

    render() {
        return (
            <div>
                <h1>Team : {this.props.team}</h1>
                <Time time={this.props.time} setGameStart={this.setGameStart}/>
                <Words words={this.state.showWords} nextWord={this.nextWord} wordsNumber={this.state.wordsNumber} gameStart={this.state.gameStart}/>
                <h1>Score: {this.state.score}</h1>
            </div>
        )
    }
}

export default Start
