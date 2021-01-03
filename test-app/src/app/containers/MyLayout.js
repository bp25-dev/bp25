import React from 'react';
import { Layout } from 'react-admin';
import MiniDrawer from '../containers/Drawer'; 



const MyLayout = props => <Layout {...props} menu={MiniDrawer}/>;

export default MyLayout;