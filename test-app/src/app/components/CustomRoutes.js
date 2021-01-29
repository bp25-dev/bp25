import React from 'react';
import { Route } from 'react-router-dom';
import ProfileEdit from './ProfileEdit.js';

export default [
    <Route 
    exact path="/my-profile"
    //key="my-profile"
    //render={() => <ProfileEdit />}
    component={ProfileEdit}
  />,
];