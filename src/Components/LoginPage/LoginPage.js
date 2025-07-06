import { Grid } from '@mui/material';
import react, { Component } from 'react';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // username: '',
            // password: ''
        };
    }
    render() {
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        Hello
                    </Grid>
                    <Grid item xs={6}>
                        from
                    </Grid>
                    <Grid item xs={3}>
                        Simplilearn
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LoginPage;
