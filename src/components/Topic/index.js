import React, { Component } from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';

const TopicForm = () => (
  <div>
    <TextField label="Title" />
    <Button>Save</Button>
  </div>
);

export default class Index extends Component {
  render() {
    return (
    <div>
      <h1>Topic Index</h1>

      <TopicForm />
    </div>);
  }
}
