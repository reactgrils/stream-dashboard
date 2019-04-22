import "./node_modules/normalize.css/normalize.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { 
  fas,
  faEraser, 
  faAlignLeft, 
  faAssistiveListeningSystems,
  faBolt,
  faShareSquare,
  faAmericanSignLanguageInterpreting,
  faMapMarkedAlt
} from '@fortawesome/free-solid-svg-icons';
import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createGlobalStyle } from "styled-components";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { IntlProvider } from "react-intl";
import store from "./src/store";

// if (process.env.NODE_ENV !== 'production') {
//   const { whyDidYouUpdate } = require('why-did-you-update');
//   whyDidYouUpdate(React);
// }

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    outline: none;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
    font-size: 10px;
  }

  input {
    border-style: none;
    background: transparent;
    outline: none;
  }

  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
library.add(
  fab,
  fas,
  faEraser, 
  faAlignLeft, 
  faAssistiveListeningSystems,
  faBolt,
  faShareSquare,
  faAmericanSignLanguageInterpreting,
  faMapMarkedAlt
  );
const LoadableApp = lazy(() => import("./src/containers/App"));
const LoadableLogin = lazy(() => import("./src/containers/Login"));

ReactDOM.render(
  <Provider store={store}>
    <IntlProvider locale="en">
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Suspense fallback={<div />}>
            <Switch>
              <Route exact path="/login" component={LoadableLogin} />
              <Route path="/" component={LoadableApp} />
            </Switch>
          </Suspense>
        </React.Fragment>
      </Router>
    </IntlProvider>
  </Provider>,
  document.getElementById("root")
);
