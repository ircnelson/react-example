export const addTopic = (topic) => ({
  type: 'ADD_TOPIC',
  title: topic.title,
  closed: false
})

export const topicFilter = (filter) => ({
  type: 'FILTER_TOPICS',
  filter
})