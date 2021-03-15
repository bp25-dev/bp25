import React from 'react';
import TreeMenu from '@bb-tech/ra-treemenu';
import { Layout, AppBar, UserMenu, MenuItemLink } from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';
import { ProfileProvider } from './MyProfile/Profile.js';

const MyUserMenu = (props) => (
  <UserMenu {...props}>
    <MenuItemLink
      to='/my-profile'
      primaryText='Mein Profil'
      leftIcon={<SettingsIcon />}
    />
  </UserMenu>
);

const MyAppBar = (props) => <AppBar {...props} userMenu={<MyUserMenu />} />;

const MyLayout = (props) => (
  <ProfileProvider>
    <Layout {...props} appBar={MyAppBar} menu={TreeMenu} />
  </ProfileProvider>
);

export default MyLayout;
