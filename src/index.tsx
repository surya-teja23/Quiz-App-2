import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Browser } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store";
import ThemeProvider from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Browser>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </Browser>
    </Provider>
  </React.StrictMode>
);
