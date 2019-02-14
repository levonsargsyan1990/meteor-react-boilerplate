import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLayout = styled.div`
  background-color: ${props => props.theme.backgroundGrey};
  min-height: 100vh;
`;

const Layout = ({ children }) => <StyledLayout>{children}</StyledLayout>;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
