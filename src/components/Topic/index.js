import React, { Component } from 'react';

import TopicForm from './TopicForm';
import TopicListView from './TopicListView';
import TopicListItem from './TopicListItem';

const topics = [];

export default class Index extends Component {

  state = { topics }

  save = (e) => {
    
    topics.push(e)

    this.setState(topics);
  }

  render() {
    return (
      <div>
        <h1>Topic Index</h1>

        <TopicForm onSubmit={this.save} />
        <TopicListView>
          {this.state.topics.map((topic, index) => <TopicListItem key={index} topic={topic} />)}
        </TopicListView>
      </div>);
  }
}
