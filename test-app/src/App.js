import React from "react";
import MiniDrawer from "./app/containers/Drawer";
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
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
  PasswordEdit,
  UserCreate,
  CodeCreate,
} from './app/components/Admin.js';

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
      Status: 'featured'
    }
  ],
  User: [
    {
      Email: 'abc@gmail.com',
      Passwort: 'abc123',
      Code: 'x74jss53'
    }
  ]
});

export default function App() {
  
  return(
   
    <div>
      <MiniDrawer></MiniDrawer> 
      <Admin dataProvider={dataProvider} >
        <Resource
            name='Exponate'
            list={ExponateList}
            edit={ExponateEdit}
            create={ExponateCreate}
          />
          <Resource
            name='Touren'
            list={TourenList}
            edit={TourenEdit}
            create={TourenCreate}
          />
          <Resource
            name='User'
            list={UserList}
            edit={PasswordEdit}
            create={UserCreate}
          />
        </Admin>     
    </div>
    

)}