import React from 'react';

const Chat = ({ match }) => {
  return <div>chat #{match.params.id}</div>;
};

export default Chat;
