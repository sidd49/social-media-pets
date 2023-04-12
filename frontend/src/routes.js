import React from 'react';
import {Switch, Route} from 'react-router-dom'

import Feed from './pages/Feed';
import New from './pages/New';
import LoginPage2 from './pages/LoginPage';

function Routes(){
    return(
        <Switch>
            <Route path="/" exact component={Feed}/>
            <Route path="/New" component={New}/>
            <Route path="/login" component ={LoginPage2}/>
        </Switch>
    );
}

export default Routes;
