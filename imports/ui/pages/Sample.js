import React from 'react';
import { Header, Image, Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const StyledSample = styled.div`
  padding-top: 250px;
  .header.huge {
    font-size: 40px;
  }
`;

const Sample = () => (
  <StyledSample>
    <Header size="huge" as="h1" icon textAlign="center">
      <Image src="/images/alienlab.svg" />
      <Divider hidden />
      alienlab
      <Header.Subheader>Meteor / React boilerplate</Header.Subheader>
    </Header>
  </StyledSample>
);

export default Sample;
