import React from "react";
import App from "./app/App";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/Store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
