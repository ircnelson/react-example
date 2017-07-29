import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TopicListItem from './TopicListItem';

class TopicList extends Component {
  
  static propTypes = {
    topics: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string
    }).isRequired).isRequired
  }

  render() {
    const topics = this.props.topics;

    return (
    <ul>
      {topics.map((item, index) => <TopicListItem key={index} topic={item} />)}
    </ul>);
  }
}

export default TopicList;