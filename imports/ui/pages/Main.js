// TODO add 404 page

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
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
  shouldComponentUpdate({ user, path }) {
    const { user: oldUser, path: oldPath } = this.props;
    return !(isEqual(user, oldUser) && path === oldPath);
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
        {/*
        <DashboardRoute user={user} exact path="/exchange" component={Exchange} />
        <RegistrationRoute user={user} path="/signup" component={Signup} />
        */}
        <Sample path="/" />
      </Layout>
    );
  }
}

Main.propTypes = {
  user: PropTypes.shape({
    _id: PropTypes.string.isRequired,
  }),
  isLoggingIn: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
};

Main.defaultProps = {
  user: null,
};

const meteorWrappedComponent = withTracker(() => ({
  user: Meteor.user(),
  isLoggingIn: Meteor.loggingIn(),
}))(Main);

export default meteorWrappedComponent;
