import { createMuiTheme } from "@material-ui/core";

export const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    primary: {
      main: "#52057b",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000"
    }
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#892cdc",
    },
    secondary: {
      main: "#000000",
    },
    text: {
      primary: "#ffffff"
    }
  },
});
