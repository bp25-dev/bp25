import React from "react";
import MiniDrawer from "./app/containers/Drawer";
import { Admin, Resource } from 'react-admin';
import fakeDataProvider from 'ra-data-fakerest';
import {
  ExponateList,
  ExponateEdit,
  ExponateCreate,
} from './app/components/Exponate.js';
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
  Rundgang: [
    {
      id: '#1',
      name: 'Museum erkunden',
      Title: 'Ein Blick in die Geschichte',
      description: '',
      status: 'featured'
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
        </Admin>     
    </div>
    

)}