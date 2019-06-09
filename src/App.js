import React, { Component } from 'react'
import NavBar from './components/shared/NavBar'
import Display from './components/helper/Display'

import './App.css'
class App extends Component {

  state = {
    currentPage:"Home",
    menu: ["Home", "Start", "Reset"],
    words: "",
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
      this.setState({
        ...this,words: newWords
      })
    }
    console.log("This is the current words in main state "+this.words)
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
        <Display page={this.state.currentPage} addWords={this.addWords} addTime={this.addTime} addTeamName={this.addTeamName} time={this.state.time} team={this.state.teamName}  words={this.state.words}/>
      </div>
    )
  }
}

export default App

