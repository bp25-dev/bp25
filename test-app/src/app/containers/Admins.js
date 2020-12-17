import React from 'react'
import MiniDrawer from './Drawer'
import AddAdmin from '../components/Admin/AddAdmin'
import CreateCode from '../components/Admin/CreateCode'

export default class Admins extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    Admin-Seite
                </h1>
              <CreateCode></CreateCode>
              <AddAdmin></AddAdmin>
            </div>
        )    
    }
}

