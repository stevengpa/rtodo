import React from 'react';
import {Switch, Route, Redirect} from "react-router-dom";

import {ToDo} from "../pages/ToDo/ToDo";

const Report = React.lazy(() => import('../pages/Report/Report'));

export const routes = (
  <Switch>
    <Route path="/report" render={props => <Report {...props}/>} exact/>
    <Route path="/todo" exact component={ToDo}/>
    <Redirect to="/todo" />
  </Switch>
);
