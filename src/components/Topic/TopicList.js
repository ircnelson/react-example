import React, { Component } from 'react';
import { observer, PropTypes } from 'mobx-react';
import TopicListItem from './TopicListItem';
import TopicStore from './TopicStore';

@observer
class TopicList extends Component {
  
  static propTypes = {
    store: PropTypes.observableArrayOf(typeof(TopicStore)).isRequired
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