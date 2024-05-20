import React, { Component } from "react";

import "../styles/Header.css"

let buttonName = "Some button";
const handleClick = () => {
    console.log("you pushed the button", buttonName)
}

class Header extends Component {
    render() {
        return (
            <header>This is header
                <button className={ "some-button" } onClick={ handleClick }>{ buttonName }</button>
            </header>
        )
    }
}

export default Header;