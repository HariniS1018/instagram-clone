import React, { Component } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import postimage from "../../assets/profile-pic.jpg";

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className="post__container">
                <div className="post__container">
                    <Avatar className="post__image" src="" />
                    <div className="post_username">Username</div>
                </div>
                <div>
                    <img
                        // className="post__image"
                        src={postimage}
                        style={{ width: "610px" }}
                        alt="Post"
                    />
                </div>
                <div>

                </div>
                <div></div>
            </div>
        );
    }
}

export default Post;
