import React, {Component} from "react";
import Grid from "@mui/material/Grid";

import insta from "../../assets/instagram-name.png"
import home from "../../assets/home.jpg";
import message from "../../assets/message.jpg";
import find from "../../assets/search.png";
import react from "../../assets/explore.jpg";
import heart from "../../assets/heart.png";
import "./NavBar.css";


class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
            <div>
                <div className="navbar_barcontent">
                    <Grid container>
                        <Grid size={{ xs: 2 }}>

                        </Grid>
                        <Grid size={{ xs: 6 }}>
                            <img className="navbar_logo" src={insta} alt="Instagram Logo" style={{width: "105px"}}/>
                        </Grid>
                        <Grid size={{ xs: 4 }}>
                            <input text="text" placeholder="Search"/>
                        </Grid>

                        <Grid size={{ xs: 3 }} style={{ display: "flex" }}>
                            <img src={home} alt="Home Icon" style={{ width: "25px" }} />
                            <img src={message} alt="Message Icon" style={{ width: "25px" }} />
                            <img src={find} alt="Find Icon" style={{ width: "25px" }} />
                            <img src={react} alt="React Icon" style={{ width: "25px" }} />
                            <img src={heart} alt="Heart Icon" style={{ width: "25px" }} />
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default NavBar;
