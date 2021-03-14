import React from 'react';
import { Route } from 'react-router-dom';
import { ProfileEdit } from './MyProfile/Profile.js';
import SimpleAccordion from './Faq/Faq.js';

export default [
  <Route key='my-profile' path='/my-profile' render={() => <ProfileEdit />} />,
  <Route key='faq' path='/faq' render={() => <SimpleAccordion />} />,
];
