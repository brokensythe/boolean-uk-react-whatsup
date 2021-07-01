// - Use this starter template => https://codesandbox.io/s/whatsup-react-starter-template-8zjgj
// - Make sure you start your json-server using node db/server.js
// -  You'll have to restart the server manually if you make changes to db.json
// - Make sure you read the API endpoints section

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./styles/reset.css";
import "./styles/index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
