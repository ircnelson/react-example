import React, { Component } from 'react';
import TopicStore from './ObservableTopicStore';
import TopicForm from './TopicForm';
import TopicList from './TopicList';

export default class Index extends Component {

  store = new TopicStore();

  save = (e) => {
    this.store.addTopic(e);
  }

  render() {
    return (
      <div>
        <h1>Topic Index</h1>

        <TopicForm onSubmit={this.save} />
        <TopicList store={this.store} />
      </div>);
  }
}
