import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List,ListItem } from 'material-ui/List';
import RaisedButton from  'material-ui/RaisedButton'


export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //Process form here (data sent to back end api)
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const { values: {firstName, lastName, email, occupation, city, bio}} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title = "Confirmation"/>
                    <List>
                        <ListItem
                            primaryText = "First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText = "Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText = "Email Adress"
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText = "Your Occupation"
                            secondaryText = { occupation }
                        />
                        <ListItem
                            primaryText = "Your city"
                            secondaryText = { city }
                        />
                        <ListItem
                            primaryText = "Your Bio"
                            secondaryText = { bio }
                        />
                    </List>
                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label="Back"
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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
export default Confirm;
