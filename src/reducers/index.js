import { combineReducers } from 'redux';
import topicFilter from './topicFilter'
import topics from './topics';

const topicsApp = combineReducers({
  topicFilter,
  topics
})

export default topicsApp;