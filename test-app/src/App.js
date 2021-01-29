import React from 'react';
import { Route } from "react-router";
import { Admin, Resource, Layout } from 'react-admin';
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
  FeedbackList
} from './app/components/Tour_Feedback.js';
import { UserList, AccountEdit, UserCreate } from './app/components/User.js';
import { CodeList, CodeCreate } from './app/components/Codes.js';
import {
  AbzeichenList,
  AbzeichenEdit,
  AbzeichenCreate,
} from './app/components/Abzeichen.js';
import {
  PictureList,
  PictureEdit,
  PictureCreate,
} from './app/components/ProfilePicutre.js';
import Dashboard from './app/containers/Dashboard';

//icons
import NavigationIcon from '@material-ui/icons/Navigation';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';
import RateReviewIcon from '@material-ui/icons/RateReview';

import TreeMenu from '@bb-tech/ra-treemenu';
//todo: import login page
import MyAppBar from './app/components/MyAppBar.js';
import {ProfileEdit, ProfileProvider } from './app/components/profile.js';
import profile from './app/components/profile.js';
import LoginPage from './app/containers/LoginPage.js';
import dataProvider from './app/containers/dataProvider.js';
import MyLayout from './app/components/MyLayout.js';

export default function App() {
  return (
    <div>
      <Admin
        title='Hessisches Landesmuseum'

        //can be replaced with the real data provider
        dataProvider={dataProvider}

        // todo: User authentification
        // authProdiver={authProvider}

        customRoutes={[
          <Route
            key="my-profile"
            path="/my-profile"
            render={() => <ProfileEdit />}
          />
        ]}


        // can be enabled/replaced if we have designed a custom LoginPage
        loginPage={LoginPage}

        // custom dashboard page
        dashboard={Dashboard}
        // custom theme
        theme={theme} 
        // TODO: add a tree menu to show all resources
        // Layout auslagern?
        layout={MyLayout}
      >
        <Resource
          name='Exponate'
          options= {{label: 'Exponate'}}
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
          name='Benutzer_overview'
          icon={SupervisorAccountIcon}
          options={{ label: 'Benutzer', isMenuParent: true }}
        />
        <Resource
          name='Benutzer'
          list={UserList}
          edit={AccountEdit}
          create={UserCreate}
          icon={ListIcon}
          options={{ label: 'Übersicht', menuParent: 'Benutzer_overview' }}
        />
        <Resource
          name='Codes'
          list={CodeList}
          create={CodeCreate}
          icon={CreateIcon}
          options={{
            label: 'Code Erstellen',
            menuParent: 'Benutzer_overview',
          }}
        />
        <Resource
          name='Bilder_overview'
          icon={AddPhotoAlternateIcon}
          options={{ label: 'Bildverknüpfungen', isMenuParent: true }}
        />
        <Resource
          name='Abzeichen'
          list={AbzeichenList}
          edit={AbzeichenEdit}
          create={AbzeichenCreate}
          icon={PhotoFilterIcon}
          options={{ label: 'Abzeichen', menuParent: 'Bilder_overview' }}
        />
        <Resource
          name='ProfilePicture'
          list={PictureList}
          edit={PictureEdit}
          create={PictureCreate}
          icon={AddPhotoAlternateIcon}
          options={{ label: 'Profilbilder', menuParent: 'Bilder_overview' }}
        />
        <Resource
          name='Feedback'
          list={FeedbackList}
          icon={RateReviewIcon}
          options={{ label: 'Feedback' }}
        />
      </Admin>
    </div>
  );
}
