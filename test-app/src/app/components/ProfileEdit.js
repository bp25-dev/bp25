/* 
import React from 'react';
import { Edit, SelectInput, SimpleForm, required } from 'react-admin';

const Languages = [{ id: 'en', name: 'English' }, { id: 'fr', name: 'French' }];

const ProfileEdit = ({ staticContext, ...props }) => {
    return (
        <Edit
            
            id="my-profile"
            
            resource="profile"
            basePath="/my-profile"
            redirect={false}
            title="Mein Profil"
            {...props}
        >
            <SimpleForm>
                <SelectInput
                    source=""
                    choices={Languages}
                    validate={required()}
                />
            </SimpleForm>
        </Edit>
    );
};

export default ProfileEdit;

*/

