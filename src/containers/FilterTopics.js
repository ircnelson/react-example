import { connect } from 'react-redux';
import TopicList from '../components/Topic/TopicList';

const getFilterTopics = (topics, filter) => {

  switch (filter) {
    case 'SHOW_ALL':
      return topics
    case 'SHOW_CLOSED':
      return topics.filter(t => t.closed)
    default:
      throw new Error('Unknown filter: ' + filter)
  }
}

const mapStateToProps = (state) => ({
  topics: getFilterTopics(state.topics, state.topicFilter)
})

const mapDispatchToProps = { }

const FilterTopics = connect(
  mapStateToProps, 
  mapDispatchToProps
)(TopicList)

export default FilterTopics;