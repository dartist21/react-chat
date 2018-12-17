import React from 'react';
import { Button } from 'antd';

const AppButton = ({ children, ...rest }) => {
  return <Button {...rest}>{children}</Button>;
};

export default AppButton;
