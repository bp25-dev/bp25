import React from 'react';
import { Admin, Resource, AppBar, Layout } from 'react-admin';
import { theme } from './app/components/Style/Theme.js';
// site components
import {
  ExponateList,
  ExponateEdit,
  ExponateCreate,
} from './app/components/Exponate.js';
import {
  TourenList,
  TourenEdit,
  TourenCreate,
} from './app/components/Touren.js';
import {
  UserList,
  AccountEdit,
  UserCreate,
  CodeCreate,
} from './app/components/User.js';
import {
  AbzeichenList,
  AbzeichenEdit,
  AbzeichenCreate,
} from './app/components/Abzeichen.js';
import Dashboard from './app/containers/Dashboard';
//icons
import NavigationIcon from '@material-ui/icons/Navigation';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
//import TreeMenu from '@bb-tech/ra-treemenu';
//todo: import login page
//import LoginPage from 'path';
import dataProvider from './app/containers/dataProvider.js';


export default function App() {
  return (
    <div>
      <Admin
        title='Hessisches Landesmuseum'
        //can be replaced with the real data provider
        dataProvider={dataProvider}
        //dataProvider={jsonServerProvider('mongodb://127.0.0.1:27017')}
        // todo: User authentification
        // authProdiver={authProvider}
        // can be enabled/replaced if we have designed a custom LoginPage
        // loginPage={LoginPage}
        // custom dashboard page
        dashboard={Dashboard}
        // custom theme
        theme={theme}
      >
        <Resource
          // todo: replace the default name: remove 's' on the ending
          name='Exponate'
          list={ExponateList}
          edit={ExponateEdit}
          create={ExponateCreate}
          icon={AccountBalanceIcon}
          options={{ label: 'Exponate' }}
        />
        <Resource
          name='Touren'
          list={TourenList}
          edit={TourenEdit}
          create={TourenCreate}
          icon={NavigationIcon}
          options={{ label: 'Touren' }}
        />
        <Resource
          name='Benutzer'
          list={UserList}
          edit={AccountEdit}
          create={UserCreate}
          icon={SupervisorAccountIcon}
          options={{ label: 'Benutzer' }}
        />
        <Resource
          name='Abzeichen'
          list={AbzeichenList}
          edit={AbzeichenEdit}
          create={AbzeichenCreate}
          icon={PhotoFilterIcon}
          options={{ label: 'Abzeichen' }}
        />
      </Admin>
    </div>
  );
}