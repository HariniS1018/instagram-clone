import Grid from '@mui/material/Grid';
import React, { Component } from 'react';
// import insta_page from "../../assets/instagram-page.png";
import insta from "../../assets/instagram-name.png";
import fb from "../../assets/facebook-logo.png";
import google_play from "../../assets/get-it-on-google-play.png";
import microsoft_store from "../../assets/microsoft-store.png";
import './LoginPage.css';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <Grid container spacing={60}>
                    <Grid size={{xs: 3}}> </Grid>
                    <Grid size={{xs: 6}}>
                        <div className='loginpage__main'>
                            {/* <div>
                                <img src={insta_page} alt="Instagram Page" style={{ width: '450', height: '600px', borderRadius: "30px", border: "solid lightgrey 0.2px" }} />
                            </div> */}
                            <div>
                                <div className='loginpage__rightcomponent'>
                                    <img src={insta} alt="Instagram Logo" className='loginpage__logo' />
                                    <div className='loginpage__signin'>
                                        <input className='loginpage__text' type="text" placeholder='Phone number, username, or email'/>
                                        <input className='loginpage__text' type="password" placeholder='Password' />
                                        <button className='login__button'>Log In</button>
                                    </div>

                                    <div className='login__ordiv'>
                                        <div className='login__divider'></div>
                                        <div className='login__or'>OR</div>
                                        <div className='login__divider'></div>
                                    </div>

                                    <div className='login__fb'>
                                        <img src={fb} alt='Facebook Logo' style={{width: '25px', marginRight: '5px'}}/> Log in with Facebook </div>
                                    <div className='login__forgot'>Forgot password?</div>
                                </div>

                                <div className='loginpage__signupoption'>
                                    <div className='loginpage_signup'>
                                        Don't have an account? Sign up
                                    </div>

                                    <div className='loginpage__downloadsection'>
                                        <div>
                                            Get the app.
                                        </div>

                                        <div className="loginpage__option">
                                            <img className='loginpage_dwing' src={google_play} alt="Google Play Store" style={{ width: '136px', height: '50px' }} />
                                            <img className='loginpage_dwing' src={microsoft_store} alt="Microsoft Store" style={{ width: '136px', height: '50px'}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{xs: 3}}> </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;
