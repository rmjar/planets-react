import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles, Theme } from '@material-ui/styles';




export default class SearchBar extends Component {
    useStyles = makeStyles(theme =>  ( {
        root: {
            flexGrow: 1,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        }
    }));

    render() {
        return (<AppBar position="static">
            <Toolbar>
                <Typography color="inherit" variant="h6" className={this.useStyles.title}>
                    SWAPI Demo
          </Typography>
            </Toolbar>
        </AppBar>)
    }
}