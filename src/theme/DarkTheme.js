import { createTheme } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark", // This sets the theme to dark mode
    primary: {
      main: "#FF5722", // Bright orange for primary color
      contrastText: "#ffffff", // White for text on primary background
    },
    secondary: {
      main: "#2196F3", // Bright blue for secondary color
      contrastText: "#ffffff", // White for text on secondary background
    },
    black: {
      main: "#000000", // Dark gray for black
    },
    background: {
      main: "#50C878", // Green background
      default: "#50C878", // Set default background
      paper: "#2E8B57", // Darker gray for card backgrounds
    },
    text: {
      primary: "#000000", // White for primary text
      secondary: "#ffffff", // Light gray for secondary text
    },
    common: {
      black: "#000000", // Black color
      orange: "#FF9800", // Bright orange for accent
      blue: "#2196F3", // Bright blue for accent
    },
    error: {
      main: "#f44336", // Red for error messages
    },
    success: {
      main: "#4caf50", // Green for success messages
    },
    warning: {
      main: "#ff9800", // Orange for warnings
    },
    info: {
      main: "#2196f3", // Blue for informational messages
    },
  },
});

export default darkTheme;
