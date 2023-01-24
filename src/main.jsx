import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import { store } from "./redux/store";

const theme = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#e0a419',
      dark: '#e0a419',
    },
    secondary: {
      main: '#e0a419',
      dark: '#000000',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
    h2: {
      fontSize: 35,
      fontWeight: 400,
    },
    h3: {
      fontSize: 25,
    },
    h4: {
      fontSize: 22,
    },
    h5: {
      fontSize: 20,
    },
    body1: {
      fontSize: 18,
    },
    body2: {
      fontSize: 16,
    },
  },
  shape: {
    borderRadius: 5,
  },
  props: {
    MuiAppBar: {
      color: 'default',
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        contained: {
          '&:hover': {
            color: '#fff',
            backgroundColor: '#FFB100',
            boxShadow: '0px 0px 20px #FFB100',
          },
          '&:active': {
            color: '#fff',
            backgroundColor: '#FFB100',
            boxShadow: 'none',
          },
        },
        outlined: {
          color: '#000',
          '&:hover': {
            color: '#fff',
            backgroundColor: '#FFB100',
            boxShadow: '0px 0px 20px #FFB100',
            borderColor: "#FFB100"
          },
          '&:active': {
            color: '#fff',
            backgroundColor: '#FFB100',
            boxShadow: 'none',
          },
        },
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
