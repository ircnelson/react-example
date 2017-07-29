import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicListItem from './TopicListItem';
import TopicStore from './TopicStore';

class TopicList extends Component {
  
  static propTypes = {
    store: PropTypes.oneOfType(typeof(TopicStore)).isRequired
  }

  render() {
    const topics = this.props.store.topics;

    return (
    <ul>
      {topics.map((item, index) => <TopicListItem key={index} topic={item} />)}
    </ul>);
  }
}

export default TopicList;