import React from 'react';
import { Admin, Resource, AppBar, Layout } from 'react-admin';
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
  AccountEdit,
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
//import TreeMenu from '@bb-tech/ra-treemenu';

//todo: import login page
//import LoginPage from 'path'; 


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
      Beschreibung: '...',
      Interdisziplinärkontext: '...',
      Bildverknüpfung: 'vorhanden',
    },
  ],
  Touren: [
    {
      ID: '0',
      Name: 'Museum erkunden',
      Titel: 'Ein Blick in die Geschichte',
      Beschreibung: '...',
      Status: 'freigegeben',
      Fragen: [
        {Frage: 'Frage 1', Option_1: 'true', Option_2: 'false', Option_3:'true'},
        {Frage: 'Frage 2', Option_1: 'false', Option_2: 'true', Option_3:'false'},
      ]
    },
  ],
  Benutzer: [
    {
      Name: 'Jane Doe',
      Email: 'abc@gmail.com',
      Passwort: 'abc123',
      Code: 'x74jss53',
      Adminrechte: 'true',
    },
    {
      Name: 'Max Mustermann',
      Email: 'hallowelt@gmail.com',
      Passwort: 'einszweidrei',
      Code: 'xfd34d',
      Adminrechte: 'false',
    },
  ],

  Abzeichen: [
    {
      AbzeichenID: '#1' /* 
      Url: '/app/components/Media/1.png', */,
      Bild:
        'https://blog.qwant.com/wp-content/uploads/sites/3/2016/01/test.jpg',
      Beschreibung: 'test',
    },
  ],
});

export default function App() {
  return (
    <div>
      <Admin
        title='Hessisches Landesmuseum'
        //can be replaced with the real data provider
        dataProvider={dataProvider}
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
          //name='Admins'
          name='User'
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
