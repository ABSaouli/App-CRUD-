import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Route, Switch } from "react-router-dom";

let Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/app" component={App} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(<Routes />, document.getElementById("root"));
