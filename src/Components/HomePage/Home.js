import React, { Component } from "react";

import NavBar from "../NavBar/NavBar";
import "./Home.css";
import Main from "../MainContent/MainContent";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div>
                <NavBar />
                <Main />
            </div>
        );
    }
}

export default Home;
