import React from 'react';
import { UserMenu, MenuItemLink} from 'react-admin';
import SettingsIcon from '@material-ui/icons/Settings';

import { createMuiTheme } from '@material-ui/core/styles';



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

<<<<<<< HEAD
export default MyUserMenu;
=======
export default MyUserMenu;
>>>>>>> anna_dev
