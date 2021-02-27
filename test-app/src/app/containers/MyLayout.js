import React from 'react';
import TreeMenu from '@bb-tech/ra-treemenu';
import { Layout } from 'react-admin';
import MyAppBar from './MyAppBar';
import { ProfileProvider } from './MyProfile/Profile.js';

const MyLayout = (props) => (
  <ProfileProvider>
    <Layout {...props} appBar={MyAppBar} menu={TreeMenu} />
  </ProfileProvider>
);

export default MyLayout;