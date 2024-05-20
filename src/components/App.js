import React, { Component, Fragment } from "react";

import "../styles/App.css";
import Header from "./header";
import Main from "./Main";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header></Header>
                <Main></Main>
            </Fragment>
        );
    }
}

export default App;