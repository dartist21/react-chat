import React from 'react';
import { connect } from 'react-redux';

import Button from '@/components/Button/';

import { fetchChats } from '@/redux/data/chats';
import { getChats } from '@/redux';

export class Chats extends React.Component {
  componentDidMount() {
    const { fetchChats } = this.props;
    fetchChats();
  }

  render() {
    const { chats } = this.props;
    return (
      <div>
        Chat list:
        {chats.map(chat => (
          <div key={chat.id}>
            {chat.title} –
            <Button to={`/chat/${chat.id}`}> Chat #{chat.id}</Button>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  chats: getChats(state),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchChats: () => {
    return dispatch(fetchChats());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Chats);
