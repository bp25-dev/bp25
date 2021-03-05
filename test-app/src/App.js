import React, { Component } from 'react';
import { Admin, Resource, Delete, Login} from 'react-admin';
import buildGraphQLProvider from 'ra-data-graphql-simple';
//components
//Exponate
import {ExponateCreate} from './app/components/Exponate/ExponateCreate.js';
import {ExponateEdit} from './app/components/Exponate/ExponateEdit.js';
import {ExponateList} from './app/components/Exponate/ExponateList.js';
//Touren
import {TourenList} from './app/components/Touren/ListTouren.js';
import {TourenCreate} from './app/components/Touren/CreateTouren.js';
import {TourenEdit} from './app/components/Touren/EditTouren.js';
import {FeedbackList, FeedbackEdit} from './app/components/Touren/TourenFeedback.js';
//Benutzer
import {UserList} from './app/components/User/UserList.js';
import {UserCreate} from './app/components/User/UserCreate.js';
import {AccountEdit} from './app/components/User/AccountEdit.js';
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
import Footer from './app/containers/Footer.js';
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



class App extends Component {
  /* constructor() {
      super();
      this.state = { dataProvider: null };
  }

  componentDidMount() {
      buildGraphQLProvider({ clientOptions: { uri: 'localhost:5000/web' }})
          .then(dataProvider => this.setState({ dataProvider }));
  } */

  render() {
    /* const { dataProvider } = this.state;

        if (!dataProvider) {
            return <div>Loading</div>;
        } */
  return (
    <div>
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
      <Footer/>
    </div>
  );
}
}
export default App;