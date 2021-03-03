// In theme.js
import { defaultTheme } from "react-admin";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import merge from "lodash/merge";

export const MyTheme = createMuiTheme(
  merge({}, defaultTheme, {
    palette: {  
      secondary: {
        main: "#003473", // official colour code blue from hlmd
      },
    }
  })
);