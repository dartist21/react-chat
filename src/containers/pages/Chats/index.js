import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import ChatList from '@/components/ChatList/';

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
        <h1>Chat list</h1>
        <ChatList items={chats} />
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
