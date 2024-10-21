import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", 
    primary: {
      main: "#FF5722", 
      contrastText: "#ffffff", 
    },
    secondary: {
      main: "#2196F3", 
      contrastText: "#ffffff", 
    },
    black: {
      main: "#000000", 
    },
    background: {
      main: "#50C878", 
      default: "#50C878", 
      paper: "#2E8B57", 
    },
    text: {
      primary: "#000000", 
      secondary: "#ffffff", 
    },
    common: {
      black: "#000000", 
      orange: "#FF9800", 
      blue: "#2196F3",
    },
    error: {
      main: "#f44336", 
    },
    success: {
      main: "#4caf50", 
    },
    warning: {
      main: "#ff9800", 
    },
    info: {
      main: "#2196f3", 
    },
  },
});

export default darkTheme;
