import React from 'react';
import { Route } from "react-router";
import { Admin, Resource, Layout } from 'react-admin';
import { theme } from './app/components/Style/Theme.js';
// site components
//Exponate
import {ExponateCreate} from './app/components/Exponate/ExponateCreate.js';
import {ExponateEdit} from './app/components/Exponate/ExponateEdit.js';
import {ExponateList} from './app/components/Exponate/ExponateList.js';
//Touren
import {TourenList} from './app/components/Touren/ListTouren.js';
import {TourenCreate} from './app/components/Touren/CreateTouren.js';
import {TourenEdit} from './app/components/Touren/EditTouren.js';
import { FeedbackList} from './app/components/Touren/Tour_Feedback.js';
//Benutzer
import {UserList} from './app/components/User/UserList.js';
import {AccountEdit} from './app/components/User/AccountEdit.js';
import {UserCreate} from './app/components/User/UserCreate.js';
import {CodeList} from './app/components/User/Code/CodeList.js';
import {CodeCreate} from './app/components/User/Code/CodeCreate.js';
//Bildverknüpfungen-Abzeichen
import {AbzeichenList} from './app/components/Abzeichen/AbzeichenList.js';
import {AbzeichenEdit} from './app/components/Abzeichen/AbzeichenEdit.js';
import {AbzeichenCreate} from './app/components/Abzeichen/AbzeichenCreate.js';
//Bildverknüpfungen-Profilbilder
import {PictureList} from './app/components/Profilbilder/PictureList.js';
import {PictureEdit} from './app/components/Profilbilder/PictureEdit.js';
import {PictureCreate} from './app/components/Profilbilder/PictureCreate.js';
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
//import MyAppBar from './app/components/MyAppBar.js';
import LoginPage from './app/containers/LoginPage.js';
import dataProvider from './app/containers/dataProvider.js';
import customRoutes from './app/components/CustomRoutes';
import MyLayout from './app/components/MyLayout.js';



export default function App() {
  return (
    <div>
      <Admin
        title='Hessisches Landesmuseumgit '

        //can be replaced with the real data provider
        dataProvider={dataProvider}
        // todo: User authentification
        // authProdiver={authProvider}
        customRoutes={customRoutes}
        
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
          options={{ label: 'Benutzer*innen', isMenuParent: true }}
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
