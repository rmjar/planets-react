import React, { Component } from 'react';
import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search';


const useStylesSearchBar = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'nowrap',
        alignItems: 'center',
        justifyContent: 'left'
    },
    paper: {
        minWidth: 200,
        width: '100%',
        padding: '2px 4px',
        display: 'flex',
        flexWrap: 'nowrap',
        flexGrow: 1,
    },
    title: {
        minWidth: 150,
        flexGrow: 1,
        padding: '5px 5px',
        marginRight: '10px',
    },
    input: {
        marginLeft: '8px',
        flex: 1,
        flexGrow: 1,
    },
}));

const SearchBar = () => {
    const classes = useStylesSearchBar();
    return (<AppBar position="static">
        <Toolbar>
            <Container maxWidth="lg">
                <Typography color="inherit" variant="h6" className={classes.title}>SWAPI Demo</Typography>
            </Container>
            <Paper className={classes.paper}>
                <InputBase className={classes.input} placeholder="Search Planets" />
                <IconButton aria-label="Search">
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Toolbar>
    </AppBar>)
}

export default SearchBar;