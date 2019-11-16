import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';
import PlanetList from '../PlanetList'

import SearchBar from '../SearchBar'
const planets = [
    {id:1, name: "Venus"},
    {id:2, name: "Earth"},
    {id:3, name: "Mars"}
]

const App = ({ name }) =>
    (<div>
        <SearchBar></SearchBar>
        <Button variant="contained" color="primary">
            Hello World </Button>

            <PlanetList planets={planets} />
    </div>)


export default App;
