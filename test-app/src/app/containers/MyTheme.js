// In theme.js
import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";

export const MyTheme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {
      // adding a dark type theme 
      // type: 'dark',
      // Write the following code to have an blue navigation bar      
      secondary: {
        main: "#003473", // official colour code blue from hlmd
      },
    }
  })
);