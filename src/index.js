import React from "react";
import ReactDOM from "react-dom";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import store, { persistor } from "./redux/store";
import App from "./App/App";
import "./index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <SnackbarProvider autoHideDuration={3000} maxSnack={3} hideIconVariant={false} preventDuplicate>
          <App />
        </SnackbarProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
