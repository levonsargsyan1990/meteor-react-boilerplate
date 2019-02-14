// TODO add 404 page

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import {
  withRouter, Route, Switch,
} from 'react-router-dom';
import ReactRouterPropTypes from 'react-router-prop-types';
import { Loader, Dimmer } from 'semantic-ui-react';
import isEqual from 'lodash/isEqual';
import Layout from '../layouts/Layout';
import Sample from './Sample';

/* //Route wrapper

const DashboardRoute = ({ component: Content, user, ...rest }) => {
  if (!user || !Roles.userIsInRole(user._id, ['client'])) {
    const { location: { search } } = rest;
    return (
      <Redirect to={{
        pathname: '/login',
        search,
      }}
      />
    );
  }
  return (
    <Route
      {...rest}
      render={matchProps => (
        <DashboardLayout>
          <Content {...matchProps} />
        </DashboardLayout>
      )}
    />
  );
};

const RegistrationRoute = ({ component: Content, user, ...rest }) => {
  if (user) {
    if (Roles.userIsInRole(user._id, ['client'])) {
      const { location: { search } } = rest;
      return (
        <Redirect to={{
          pathname: '/exchange',
          search,
        }}
        />
      );
    }
  }
  return (
    <Route
      {...rest}
      render={matchProps => (
        <RegistrationLayout>
          <Content {...matchProps} />
        </RegistrationLayout>
      )}
    />
  );
};

*/

class Main extends Component {
  shouldComponentUpdate({ user, location: { pathname } }) {
    const { user: oldUser, location: { pathname: oldPathname } } = this.props;
    return !(isEqual(user, oldUser) && pathname === oldPathname);
  }

  render() {
    const { isLoggingIn } = this.props;
    if (isLoggingIn) {
      return (
        <Dimmer active inverted>
          <Loader size="huge" />
        </Dimmer>
      );
    }
    return (
      <Layout>
        <Switch>
          {/*
          <DashboardRoute user={user} exact path="/exchange" component={Exchange} />
          <RegistrationRoute user={user} path="/signup" component={Signup} />
          */}
          <Route path="/" component={Sample} />
        </Switch>
      </Layout>
    );
  }
}

Main.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  isLoggingIn: PropTypes.bool.isRequired,
  location: ReactRouterPropTypes.location.isRequired,
};

Main.defaultProps = {
  user: null,
};

const meteorWrappedComponent = withTracker(() => ({
  user: Meteor.user(),
  isLoggingIn: Meteor.loggingIn(),
}))(Main);

export default withRouter(meteorWrappedComponent);
