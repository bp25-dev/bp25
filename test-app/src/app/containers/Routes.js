import React from 'react'
import { BrowserRouter as Router,
    Route, Switch, Link } from "react-router-dom";
import Admins from './Admins';
import Exponate from './Exponate';
import Tours from './Tours';




export default class Routes extends React.Component {
    render() {
        return(
            <div>
            <Switch>
           <Route exact path="/" render={() => (
               <Tours></Tours>
           )}/>
              
         
          <Route exact path="/exponate">
               <Exponate></Exponate>
          </Route>
          <Route exact path="/admins">
                <Admins></Admins>
            </Route>
        </Switch>
        </div>
        )
    }
}