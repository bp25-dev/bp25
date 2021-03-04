
import React from 'react';
<<<<<<< HEAD
import { Route } from "react-router";
import { Admin, Resource, Layout } from 'react-admin';
import { theme } from './app/components/Style/Theme.js';
// site components
<<<<<<< HEAD
=======
// site components
>>>>>>> anna_dev
=======
import { Admin, Resource, Login} from 'react-admin';
//components
>>>>>>> fenja_dev
//Exponate
import {ExponateCreate} from './app/components/Exponate/ExponateCreate.js';
import {ExponateEdit} from './app/components/Exponate/ExponateEdit.js';
import {ExponateList} from './app/components/Exponate/ExponateList.js';
//Touren
import {TourenList} from './app/components/Touren/ListTouren.js';
import {TourenCreate} from './app/components/Touren/CreateTouren.js';
import {TourenEdit} from './app/components/Touren/EditTouren.js';
<<<<<<< HEAD
<<<<<<< HEAD
import { FeedbackList} from './app/components/Touren/Tour_Feedback.js';
=======
import {FeedbackList, FeedbackEdit} from './app/components/Touren/Tour_Feedback.js';
>>>>>>> anna_dev
=======
import {FeedbackList, FeedbackEdit} from './app/components/Touren/TourenFeedback.js';
>>>>>>> fenja_dev
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
//pages
import Dashboard from './app/containers/Dashboard';
import CustomRoutesProfile from './app/containers/CustomRoutes.js';
import MyLayout from './app/containers/MyLayout.js';
import {MyTheme} from './app/containers/MyTheme.js';
import LoginPage from './app/containers/Login/LoginPage.js';
import authProvider from './app/containers/Login/authProvider.js';
import dataProvider from './app/data/fakeDataProvider.js';
import initialState from './app/containers/Login/initialState.js';

//icons
import NavigationIcon from '@material-ui/icons/Navigation';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import PhotoFilterIcon from '@material-ui/icons/PhotoFilter';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import ListIcon from '@material-ui/icons/List';
import CreateIcon from '@material-ui/icons/Create';
import RateReviewIcon from '@material-ui/icons/RateReview';
import HelpIcon from '@material-ui/icons/Help';

const MyLoginPage = () => (
  <Login
      backgroundImage="https://www.hlmd.de/fileadmin/user_upload/haupthalle_enthuellung.jpg"
      style={{
        backgroundPosition: 'center',
      }
      }
  />
); 

<<<<<<< HEAD
<<<<<<< HEAD
import TreeMenu from '@bb-tech/ra-treemenu';
//todo: import login page
//import MyAppBar from './app/components/MyAppBar.js';
import LoginPage from './app/components/Login/LoginPage.js';
import dataProvider from './app/containers/dataProvider.js';
import customRoutes from './app/components/CustomRoutes';
import MyLayout from './app/components/MyProfile/MyLayout.js';



=======
>>>>>>> anna_dev
=======
const App = () => (
  <Admin 
          initial={initialState}
          authProvider={authProvider}
          dataProvider={dataProvider}
          loginPage={MyLoginPage}
          dashboard={Dashboard}
          theme={MyTheme} 
          layout={MyLayout}
          customRoutes={CustomRoutesProfile}
      >
         {permissions => [
          <Resource
          name='Exponate'
          list={ExponateList}
          edit={ExponateEdit}
          create={ExponateCreate}
          icon={AccountBalanceIcon}
          options={{ label: 'Exponate' }}
        />,
        <Resource
          name='Touren'
          list={TourenList}
          edit={TourenEdit}
          create={TourenCreate}
          icon={NavigationIcon}
          options={{ label: 'Touren' }}
        />,
        <Resource
          name='Benutzer_overview'
          icon={SupervisorAccountIcon}
          options={{ label: 'Benutzer*innen', isMenuParent: true }}
        />,
        permissions === 'admin'
            ?
        <Resource
          name='Benutzer'
          list={UserList}
          edit={AccountEdit}
          create={UserCreate}
          icon={ListIcon}
          options={{ label: 'Übersicht', menuParent: 'Benutzer_overview' }}
        />
        : null,
        permissions === 'admin'
            ?
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
        : null,
        <Resource
          name='Bilder_overview'
          icon={AddPhotoAlternateIcon}
          options={{ label: 'Bildverknüpfungen', isMenuParent: true }}
        />,
        <Resource
          name='Abzeichen'
          list={AbzeichenList}
          edit={AbzeichenEdit}
          create={AbzeichenCreate}
          icon={PhotoFilterIcon}
          options={{ label: 'Abzeichen', menuParent: 'Bilder_overview' }}
        />,
        <Resource
          name='ProfilePicture'
          list={PictureList}
          edit={PictureEdit}
          create={PictureCreate}
          icon={AddPhotoAlternateIcon}
          options={{ label: 'Profilbilder', menuParent: 'Bilder_overview' }}
        />,
        <Resource
          name='Feedback'
          list={FeedbackList}
          edit={FeedbackEdit}
          icon={RateReviewIcon}
          options={{ label: 'Feedback' }}
        />,
         <Resource
          name='faq'
          list={FeedbackList}
          icon={HelpIcon}
          options={{ label: 'FAQ' }}
        />
      ]}
  </Admin>
);  
export default App;


/**
>>>>>>> fenja_dev
export default function App() {
  return (
    <div>
      <Admin
<<<<<<< HEAD
        title='Hessisches Landesmuseumgit '

        //can be replaced with the real data provider
        dataProvider={dataProvider}
=======
       // title='Hessisches Landesmuseum'
>>>>>>> fenja_dev
        // todo: User authentification
<<<<<<< HEAD
        // authProdiver={authProvider}
        customRoutes={customRoutes}
        
        // can be enabled/replaced if we have designed a custom LoginPage
        loginPage={LoginPage}

        // custom dashboard page
=======
        authProdiver={authProvider}
<<<<<<< HEAD
        loginPage={LoginPage}
>>>>>>> anna_dev
        dashboard={Dashboard}
        theme={theme} 
<<<<<<< HEAD
        // TODO: add a tree menu to show all resources
        // Layout auslagern?
        layout={MyLayout}
=======
        layout={MyLayout}
        customRoutes={customRoutes}
>>>>>>> anna_dev
=======
        //can be replaced with the real data provider
        dataProvider={dataProvider}
        //loginPage={LoginPage}
        dashboard={Dashboard}
        theme={MyTheme} 
        layout={MyLayout}
        customRoutes={CustomRoutesProfile}
        initial={initialState}
>>>>>>> fenja_dev
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
          edit={FeedbackEdit}
          icon={RateReviewIcon}
          options={{ label: 'Feedback' }}
        />
         <Resource
          name='faq'
          list={FeedbackList}
          icon={HelpIcon}
          options={{ label: 'FAQ' }}
        />
      </Admin>
    </div>
  );
}
*/