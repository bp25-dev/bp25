import React from 'react'
import { BrowserRouter as Router,
    Route, Switch, Link } from "react-router-dom";
import Admins from './Admins';
import Exponate from './Exponate';
import Touren from './Touren';




export default class Routes extends React.Component {
    render() {
        return(
            <div>
            <Switch>
           <Route exact path="/Touren" render={() => (
               <Touren></Touren>
           )}/>
              
         
          <Route exact path="/Exponate">
               <Exponate></Exponate>
          </Route>
          <Route exact path="/User">
                <Admins></Admins>
            </Route>
        </Switch>
        </div>
        )
    }
}