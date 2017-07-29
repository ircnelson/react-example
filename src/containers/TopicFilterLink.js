import { connect } from 'react-redux'
import { topicFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.topicFilter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(topicFilter(ownProps.filter))
  }
})

const TopicFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Link)

export default TopicFilterLink;