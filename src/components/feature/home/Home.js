import React, { Component } from 'react'

class Home extends Component {

    state = {
        words: [],
        time: 0,
        teamName: 'default'
    }

    onWordsChange = (e) => {
        this.setState({
            ...this,words: e.target.value
        })
    }

    onTimeChange = (e) => {
        this.setState({
            ...this,time: e.target.value
        })
    }

    onTeamNameChange = (e) => {
        this.setState({
            ...this,teamName: e.target.value
        })
    }

    onClickHandler = (e) => {
        const words = this.state.words.split('\n')
        console.log("These are the words added to main state "+words)
        this.props.addWords(words)
        this.props.addTime(this.state.time)
        this.props.addTeamName(this.state.teamName)
    }

    render() {
        return (
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td>Words</td>
                        </tr>
                        <tr>
                            <td><textarea cols="80" rows="30" value={this.state.words} onChange={this.onWordsChange}/></td>
                        </tr>
                        <tr>
                            <td><input type="number" placeholder="Time" value={this.state.time} onChange={this.onTimeChange}/></td>
                        </tr>
                        <tr>
                            <td><input type="text" placeholder="Team name" value={this.state.teamName} onChange={this.onTeamNameChange}/></td>
                        </tr>
                        <tr>
                            <td><button type="button" onClick={this.onClickHandler}>Save</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home
