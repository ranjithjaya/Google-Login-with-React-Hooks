import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { GoogleAuthProvider } from "./googleAuth";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <GoogleAuthProvider>
    <App />
  </GoogleAuthProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
