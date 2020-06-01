import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';

const style = {
    background: 'linear-gradient(gray, darkgray)' , 
    backgroundAttachment: 'fixed'
}

class HomePage extends Component {
    render() {
        return <>
        <div style={{backgroundColor : 'lightblue' , height : '100vh'}}>

        </div>
        </>
    }
}


export default withStyles(style)(HomePage) ; 