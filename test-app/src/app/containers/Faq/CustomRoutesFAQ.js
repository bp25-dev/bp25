import React from 'react';
import { Route } from 'react-router-dom';
import SimpleAccordion from 'Faq.js';

export default [
  <Route
  key="faq"
  path="/faq"
  render={() => <SimpleAccordion/>}
/>


];
