import React, { Component } from 'react'

class NavBar extends Component {

    onClickHandler= (e) => {
        console.log("You have clicked "+e.target.id)
    }
    
    render() {
        return (this.props.menu.map((menuElement) => 
            <div><li onClick={this.props.changePage}><a id={menuElement}>{menuElement}</a></li></div>
        ))
    }
}

export default NavBar
