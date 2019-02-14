import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import promise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

// Importing styled-component theme
import theme from './styles/theme';
// Importing styled-component global style
import GlobalStyle from './styles/global';
// Importing reducers
import reducers from './reducers';
// importing main page
import Main from './pages/Main';

// Initializing Sentry for client-side error logging
const { sentryUrl } = Meteor.settings.public;
if (sentryUrl) {
  // eslint-disable-next-line no-undef
  Sentry.init({ dsn: sentryUrl });
}

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const App = () => (
  <Provider store={createStoreWithMiddleware(reducers)}>
    <ThemeProvider theme={theme}>
      <>
        <Router>
          <Switch>
            <Route path="/" component={Main} />
          </Switch>
        </Router>
        <GlobalStyle />
      </>
    </ThemeProvider>
  </Provider>
);

Meteor.startup(() => render(<App />, document.getElementById('react-target')));
