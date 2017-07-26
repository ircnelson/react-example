import React, { Component } from 'react';

export default class TopicListView extends Component {
  render() {
    return (
    <ul>
      {this.props.children}
    </ul>);
  }
}