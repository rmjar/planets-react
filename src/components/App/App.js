import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from '@material-ui/core';

import SearchBar from '../SearchBar'

const App = ({ name }) =>
    (<div>
        <SearchBar></SearchBar>
        <Button variant="contained" color="primary">
            Hello World </Button>
    </div>)


export default App;
