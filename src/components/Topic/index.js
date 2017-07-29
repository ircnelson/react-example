import React, { Component } from 'react';
import AddTopic from '../../containers/AddTopic';
import FilterTopics from '../../containers/FilterTopics';

export default class Index extends Component {

  topics = []

  render() {
    return (
      <div>
        <h1>Topic Index</h1>

        <AddTopic />
        <FilterTopics />
      </div>);
  }
}