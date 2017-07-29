const topics = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOPIC':
      return [...state, { 
        title: action.title
      }]

    default:
      return state;
  }
}

export default topics;