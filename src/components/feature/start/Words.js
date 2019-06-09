import React, { Component } from 'react'

class Words extends Component {
    state = {
        wordsNumber: 0
    }

    keyHanding =(e)=>{
        console.log("This is the key "+e.keyCode)
        if(e.keyCode === 39){
            this.setState({
                ...this,wordsNumber: this.state.wordsNumber+1
            })
            if(this.state.wordsNumber === this.props.words.length-1){
                this.setState({wordsNumber: 0})
            }
        }
    }

    componentDidMount= (e) =>{
        window.addEventListener("keyup",this.keyHanding)
    }

    onClickChangeWord = (e) => {
        this.setState({
            wordsNumber: this.state.wordsNumber+1
        })
        if(this.state.wordsNumber === this.props.words.length-1){
            this.setState({wordsNumber: 0})
        }
    }



    render() {
        return (
            <div>
                <h1 className="words-center">{this.props.words[this.state.wordsNumber]}</h1>
            </div>
        )
    }
}

export default Words
