/*
import ProfileEdit from './ProfileEdit';

export default {
    edit: ProfileEdit
};
*/

import React, {
    createContext,
    useState,
    useCallback,
    useMemo,
    useContext
  } from "react";
  import {
    TextInput,
    ImageInput,
    ImageField,
    PasswordInput,
    SimpleForm,
    required,
    useDataProvider,
    useNotify,
    SaveContextProvider,
    useGetIdentity
  } from "react-admin";
  
  const ProfileContext = createContext();
  
  export const ProfileProvider = ({ children }) => {
    const [profileVersion, setProfileVersion] = useState(0);
    const context = useMemo(
      () => ({
        profileVersion,
        refreshProfile: () =>
          setProfileVersion((currentVersion) => currentVersion + 1)
      }),
      [profileVersion]
    );
  
    return (
      <ProfileContext.Provider value={context}>
        {children}
      </ProfileContext.Provider>
    );
  };
  
  export const useProfile = () => useContext(ProfileContext);
  
  export const ProfileEdit = ({ staticContext, ...props }) => {
    console.log("ProfileEdit");
    const dataProvider = useDataProvider();
    const notify = useNotify();
    const [saving, setSaving] = useState();
    const { refreshProfile } = useProfile();
  
    const { loaded, identity } = useGetIdentity();
  
    const handleSave = useCallback(
      (values) => {
        setSaving(true);
        dataProvider.updateUserProfile(
          { data: values },
          {
            onSuccess: ({ data }) => {
              setSaving(false);
              notify("Dein Profil wurde aktualisiert", "info", {
                _: "Dein Profil wurde aktualisiert"
              });
              refreshProfile();
            },
            onFailure: () => {
              setSaving(false);
              notify(
                "Ein technischer Fehler ist während der Aktualisierung deines Profils aufgetreten. Bitte probiere es später erneut.",
                "Warnung",
                {
                  _:
                    "Ein technischer Fehler ist während der Aktualisierung deines Profils aufgetreten. Bitte probiere es später erneut"
                }
              );
            }
          }
        );
      },
      [dataProvider, notify, refreshProfile]
    );
  
    const saveContext = useMemo(
      () => ({
        save: handleSave,
        saving
      }),
      [saving, handleSave]
    );
  
    if (!loaded) {
      return null;
    }
  
    return (
      <SaveContextProvider value={saveContext}>
        <SimpleForm save={handleSave} record={identity ? identity : {}} >
          <TextInput source="Benutzername" validate={required()} fullWidth/>
          <PasswordInput source="altes Passwort" validate={required()} label="altes Passwort" fullWidth/>
          <PasswordInput source="neues Passwort" validate={required()} label="neues Passwort" fullWidth/>
          <PasswordInput source="neues Passwort" validate={required()} label="neues Passwort wiederholen" fullWidth/>
        </SimpleForm>
      </SaveContextProvider>
    );
  };
