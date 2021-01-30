import React from 'react';
import { Route } from 'react-router-dom';
import {ProfileEdit} from './MyProfile/profile.js';

export default [
  <Route
  key="my-profile"
  path="/my-profile"
  render={() => <ProfileEdit />}
/>

];