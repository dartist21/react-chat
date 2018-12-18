import React from 'react';
import { Link } from 'react-router-dom';

import { Button } from 'antd';

const AppButton = ({ children, to, ...rest }) => {
  return to ? (
    <Link className="ant-btn ant-btn-primary" to={to}>
      {children}
    </Link>
  ) : (
    <Button {...rest}>{children}</Button>
  );
};

export default AppButton;
