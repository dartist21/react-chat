import React from 'react';
import { Route } from 'react-router-dom';

const Main = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <>
          <header>header</header>
          <main>
            <Component {...matchProps} />
          </main>
          <footer>footer</footer>
        </>
      )}
    />
  );
};

export default Main;
