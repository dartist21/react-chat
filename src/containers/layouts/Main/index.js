import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import styled from 'styled-components';

import Header from '../../blocks/Header';
import Footer from '../../blocks/Footer';

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const Main = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <StyledLayout>
          <Header />

          <Layout.Content>
            <Component {...matchProps} />
          </Layout.Content>

          <Footer />
        </StyledLayout>
      )}
    />
  );
};

export default Main;
