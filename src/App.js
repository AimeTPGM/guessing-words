import React, { Component } from 'react'
import NavBar from './components/shared/NavBar'
import Display from './components/helper/Display'
import update from 'immutability-helper'

import './App.css'
class App extends Component {

  state = {
    currentPage:"Home",
    menu: ["Home", "Start", "Reset"],
    words: [],
    time: 0,
    teamName: "default"
  }

  changePage = (newPage) => {
    if(newPage.target.id !== this.state.currentPage){
      this.setState({
        ...this,currentPage: newPage.target.id
      })
    }
    console.log("The current page is "+newPage.target.id)
  } 

  addWords = (newWords) => {
    if(newWords !== null){
      console.log("You have input "+newWords.length+" words")
      newWords.map((singleWord) => {
        this.setState( prevState => ({
          words: [...prevState.words,{wordId: prevState.words.length, wording: singleWord, correct: false}]
        }))
      })

    }    
    console.log("This is the current words in main state "+this.state.words)
  }

  correctWord = (wordId) => {
    this.setState({
      words: update(this.state.words,{[wordId]: {correct: {$set: true}}})
    })
  }

  getWords = () => {
    return this.state.words
  }

  addTime = (newTime) => {
    if(newTime !== 0){
      this.setState({
        ...this,time: newTime
      })
    }
  }

  addTeamName = (newTeamName) => {
    if(newTeamName !== ""){
      this.setState({
        ...this,teamName: newTeamName
      })
    }
  }

  render() {
    return (
      <div>
        <ul>
          <NavBar menu={this.state.menu} changePage={this.changePage}/>
        </ul>
        <br />
        <Display page={this.state.currentPage} addWords={this.addWords} addTime={this.addTime} addTeamName={this.addTeamName} time={this.state.time} team={this.state.teamName}  words={this.state.words} correctWord={this.correctWord}/>
      </div>
    )
  }
}

export default App

