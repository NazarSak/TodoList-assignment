import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { MantineProvider, createTheme } from "@mantine/core";
import App from "./Components/App/App.jsx";

import '@mantine/core/styles.css';

const theme = createTheme({
  //
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <MantineProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </MantineProvider>
);
