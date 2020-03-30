import { combineEpics } from 'redux-observable'
import { fetchPostsEpic } from './common'

const rootEpic = combineEpics(
  fetchPostsEpic
)

export default rootEpic