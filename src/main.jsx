import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./store/index.js";
import { BrowserRouter } from "react-router-dom";

export default function Main() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
