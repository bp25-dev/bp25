import React from 'react';
import { UserMenu, MenuItemLink} from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

const MyUserMenu = (props) => {
  return (
    <UserMenu  {...props}>
      <MenuItemLink
        to="/my-profile"
        primaryText="Mein Profil"
        leftIcon={<SettingsIcon />}
      />
    </UserMenu>
  );
};

export default MyUserMenu;