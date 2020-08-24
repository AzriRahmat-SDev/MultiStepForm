import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //Process form here (data sent to back end api)
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };
    backToHome = e =>{
        e.preventDefault();
        this.props.backToHome();
    }


    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Your Submission Has Been Successful"/>
                    <List>
                        <ListItem
                            primaryText = "Thank You For Your Submission"
                            secondaryText = "Please Check Your Email For Further Instructions"
                        />
                    </List>

                    <RaisedButton
                        label="Fill In Another Form"
                        primary={true}
                        style={styles.button}
                        onClick={this.backToHome}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default Success;