import React from "react";

import "../styles/App.css";
import Header from "./header";
import Main from "./Main";


function App() {
    const buttonName = "Some Button"
    return (
        <>
            <Header buttonName={ buttonName }></Header>
            <Main></Main>
        </>
    );
}

export default App;