import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Button } from 'office-ui-fabric-react/lib/Button';

export default class TopicForm extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }

  state = {
    title: ''
  }

  onTitleChange = (e) => {
    this.setState({ title: e })
  }

  handleSubmit = (e) => {
    this.setState({ title: '' })
    this.props.onSubmit(this.state);
  }

  render() {
    return (
      <div>
        <TextField value={this.state.title} onChanged={this.onTitleChange} label="Title" />
        <Button onClick={this.handleSubmit}>Save</Button>
      </div>
    );
  }
}