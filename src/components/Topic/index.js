import React, { Component } from 'react'
import AddTopic from '../../containers/AddTopic'
import FilterTopics from '../../containers/FilterTopics'
import TopicFilterLink from '../../containers/TopicFilterLink'

export default class Index extends Component {

  topics = []

  render() {
    return (
      <div>
        <h1>Topic Index</h1>

        <AddTopic />
        
        <ul>
          <li><TopicFilterLink filter="SHOW_ALL">All</TopicFilterLink></li>
          <li><TopicFilterLink filter="SHOW_CLOSED">Closed</TopicFilterLink></li>
        </ul>

        <FilterTopics />
      </div>);
  }
}