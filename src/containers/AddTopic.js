import { connect } from 'react-redux';
import { addTopic } from '../actions';
import TopicForm from '../components/Topic/TopicForm';

const mapStateToProps = (state) => state;

const mapDispatchToProps = {
  onSubmit: addTopic
}

const AddTopic = connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicForm)

export default AddTopic;