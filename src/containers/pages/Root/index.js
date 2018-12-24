import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';

const StyledRoot = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
`;

const Root = () => (
  <StyledRoot>
    <Button to="/chat" type="primary">
      Join chats
    </Button>
  </StyledRoot>
);

export default Root;
