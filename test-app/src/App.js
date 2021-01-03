import React from 'react';
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import {theme} from './app/components/Style/Theme.js';
// site components
import {
  ExponateList,
  ExponateEdit,
  ExponateCreate,
} from './app/containers/Exponate.js';
import {
  TourenList,
  TourenEdit,
  TourenCreate,
} from './app/containers/Touren.js';
import {
  UserList,
  PasswordEdit,
  UserCreate,
  CodeCreate,
} from './app/containers/Admins.js';
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


// fake data base for testing 
const dataProvider = fakeDataProvider({
  Exponate: [
    {
      ObjektID: 0,
      Kategorie: 'Art',
      Subkategorie: 'Paintings',
      Titel: 'Mona Lisa',
      Jahr: '1503-1506',
      Bild: 'Mona Lisa',
      Kunsttyp: 'portrait',
      Ersteller: 'Leonardo da Vinci',
      Material: 'Oil on poplar panel',
      Größe: '77 x 53cm',
      Ort: 'Louvre, Paris',
      Beschreibung: '',
      Interdisziplinärkontext: '',
    },
  ],
  Touren: [
    {
      ID: '#1',
      Name: 'Museum erkunden',
      Titel: 'Ein Blick in die Geschichte',
      Beschreibung: '',
      Status: 'featured',
    },
  ],
  User: [
    {
      Email: 'abc@gmail.com',
      Passwort: 'abc123',
      Code: 'x74jss53',
    },
  ],
  Abzeichen: [
    {
      AbzeichenID: '#1' /* 
      Url: '/app/components/Media/1.png', */,
      Url: 'https://blog.qwant.com/wp-content/uploads/sites/3/2016/01/test.jpg',
      Beschreibung: 'test',
    },
  ],
});



export default function App() {
  return (
    <div>
      <Admin
        //can be replaced with the real data provider 
        dataProvider={dataProvider}
        // todo: User authentification 
        // authProdiver={authProvider}
        // can be enabled/replaced if we have designed a custom LoginPage 
        // loginPage={LoginPage}
        // custom dashboard page  
        dashboard = {Dashboard}
        // custom theme 
        theme = {theme}
        // if enabled, the routes are enbedded in the design we actually want to override 
        // customRoutes={customRoutes}
        // if enabled, old layout is shown (attention: not compatible with react admin)
        // layout = {MiniDrawer}
      >
        <Resource
        // todo: replace the default name: remove 's' on the ending 
          name='Exponate'
          list={ExponateList}
          edit={ExponateEdit}
          create={ExponateCreate}
          icon={AccountBalanceIcon}
        />
        <Resource
          name='Touren'
          list={TourenList}
          edit={TourenEdit}
          create={TourenCreate}
          icon={NavigationIcon}
        />
        <Resource
          name='User'
          list={UserList}
          edit={PasswordEdit}
          create={UserCreate}
          create_code={CodeCreate}
          icon={SupervisorAccountIcon}
        />
        <Resource
          name='Abzeichen'
          list={AbzeichenList}
          edit={AbzeichenEdit}
          create={AbzeichenCreate}
          icon={PhotoFilterIcon}
        />
      </Admin>
    </div>
  );
}
