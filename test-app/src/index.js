import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import CssBaseline from "@material-ui/core/CssBaseline";
import Path from 'path';

//App.use(Express.static(Path.join(__dirname, 'build'))); //here is important thing - no static directory, because all static :)

/*App.get("/*", function(req, res) {
  res.sendFile(Path.join(__dirname, 'build', "index.html"));
});*/

ReactDOM.render(<App />, document.getElementById('root'));


//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
