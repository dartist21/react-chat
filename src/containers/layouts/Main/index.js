import React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from '../../blocks/Header';
import Footer from '../../blocks/Footer';

const Main = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Header />

          <Layout.Content>
            <Component {...matchProps} />
          </Layout.Content>

          <Footer />
        </Layout>
      )}
    />
  );
};

export default Main;
