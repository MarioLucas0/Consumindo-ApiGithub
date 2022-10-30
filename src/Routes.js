import React from 'react';
import {
    BrowserRouter as BRouter, Route, Switch
} from 'react-router-dom';

import Home from './pages/home';

const Routes = () => (
    <BRouter>
        <Switch>
            <Route path="/" exact component={ Home } />
            <Route path="/repos" component={ Home } />
        </Switch>
    </BRouter>
);

export default Routes;