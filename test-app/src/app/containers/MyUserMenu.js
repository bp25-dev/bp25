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

<<<<<<< HEAD:test-app/src/app/components/MyProfile/MyUserMenu.js
<<<<<<< HEAD
export default MyUserMenu;
=======
export default MyUserMenu;
>>>>>>> anna_dev
=======
export default MyUserMenu;
>>>>>>> fenja_dev:test-app/src/app/containers/MyUserMenu.js
