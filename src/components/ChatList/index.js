import React from 'react';
import styled from 'styled-components';

import Button from '@/components/Button';

const StyledList = styled.ul`
  padding: 0;
`;

const StyledItem = styled.li`
  margin-bottom: 8px;
  list-style: none;
`;

const ChatList = ({ items }) => (
  <StyledList>
    {items.map(chat => (
      <StyledItem key={chat.id}>
        {chat.title} – <Button to={`/chat/${chat.id}`}> Chat #{chat.id}</Button>
      </StyledItem>
    ))}
  </StyledList>
);

export default ChatList;
