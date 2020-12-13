import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
// import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
// import ProfilePage from "views/ProfilePage/ProfilePage.js";
// import LoginPage from "views/LoginPage/LoginPage.js";
import UseTerm from "views/30BPM/UseTerm.js";
import PrivacyPolicy from "views/30BPM/PrivacyPolicy.js";


var hist = createBrowserHistory();

ReactDOM.render(
  <BrowserRouter history={hist} basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route path="/use-terms" component={UseTerm} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
