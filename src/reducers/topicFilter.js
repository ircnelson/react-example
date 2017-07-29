const topicFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case 'FILTER_TOPICS':
      return action.filter
    default:
      return state
  }
}

export default topicFilter