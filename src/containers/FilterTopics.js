import { connect } from 'react-redux';
import TopicList from '../components/Topic/TopicList';

const getFilterTopics = (topics) => {
  return topics
}

const mapStateToProps = (state) => ({
  topics: getFilterTopics(state.topics)
})

const mapDispatchToProps = { }

const FilterTopics = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TopicList)

export default FilterTopics;