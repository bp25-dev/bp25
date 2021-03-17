import React, { Component } from 'react';
import { Admin, Resource, Login} from 'react-admin';
//components
//Exponate
import {ExponateCreate} from './app/components/Exponate/ExponateCreate.js';
import {ExponateEdit} from './app/components/Exponate/ExponateEdit.js';
import {ExponateList} from './app/components/Exponate/ExponateList.js';
//Touren
import {TourenList} from './app/components/Touren/TourenList.js';
import {TourenCreate} from './app/components/Touren/TourenCreate.js';
import {TourenEdit} from './app/components/Touren/TourenEdit.js';
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
import {ProfilePictureList} from './app/components/Profilbilder/ProfilePictureList.js';
import {ProfilePictureEdit} from './app/components/Profilbilder/ProfilePictureEdit.js';
import {ProfilePictureCreate} from './app/components/Profilbilder/ProfilePictureCreate.js';
//pages
import Dashboard from './app/containers/Dashboard';
import CustomRoutesProfile from './app/containers/CustomRoutes.js';
import MyLayout from './app/containers/Layout/MyLayout.js';
import Footer from './app/containers/Footer.js';
import {MyTheme} from './app/containers/Layout/MyTheme.js';
// custom login page
//import LoginPage from './app/containers/Login/LoginPage.js';
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
  constructor() {
      super();
      this.state = { dataProvider: null };
  }
 /*
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
        permissions === 'admin'
            ?
        <Resource
          name='Benutzer_overview'
          icon={SupervisorAccountIcon}
          options={{ label: 'Benutzer*innen', isMenuParent: true }}
        />
        : null,
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
          edit={permissions === 'admin' ? AbzeichenEdit : null}
          create={permissions === 'admin' ? AbzeichenCreate : null}
          icon={PhotoFilterIcon}
          options={{ label: 'Abzeichen', menuParent: 'Bilder_overview' }}
        />,
        <Resource
          name='ProfilePicture'
          list={ProfilePictureList}
          edit={permissions === 'admin' ? ProfilePictureEdit : null}
          create={permissions === 'admin' ? ProfilePictureCreate : null}
          icon={AddPhotoAlternateIcon}
          options={{ label: 'Profilbilder', menuParent: 'Bilder_overview' }}
        />,
          permissions === 'admin'
          ?
        <Resource
          name='Feedback'
          list={FeedbackList}
          //edit={permissions === 'admin' ? FeedbackEdit : null}
          icon={RateReviewIcon}
          options={{ label: 'Feedback' }}
        />
        :null,
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
