import { AuthProvider } from 'react-admin';

const authProvider = {
  // authentication
  login: ({ username, password }) => {
    /* ... */
  },

  checkError: (error) => {
    /* ... */
  },

  checkAuth: () => {
    /* ... */
  },

  logout: () => {
    /* ... */
  },

  getIdentity: () => {
    /* ... */
  },

  // authorization
  getPermissions: (params) => {
    /* ... */
  },
};
