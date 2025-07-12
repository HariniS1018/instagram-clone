import React, { Component } from "react";
import { Grid } from "@mui/material";

import StatusBar from "../StatusBar/StatusBar";
import MainPage from "../MainPage/MainPage";

import "./Main.css";
class Main extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid size={{ xs: 2 }}></Grid>
                    <Grid size={{ xs: 6 }} className="maincontent__container">
                        <div>
                            <StatusBar />
                            <MainPage />
                        </div>
                    </Grid>

                    <Grid>
                        <Grid size={{ xs: 2 }}>
                            
                        </Grid>
                    </Grid>
                    <Grid size={{ xs: 2 }}>
                            
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Main;
