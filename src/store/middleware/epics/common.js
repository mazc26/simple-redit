import { from } from 'rxjs'
import { ofType } from 'redux-observable'
import { mergeMap } from 'rxjs/operators'
import {
  fetchPosts,
  fetchPostsSuccess,
  fetchPostsError,
} from '../../reducers/common'
import { apiParser } from '../../../api/apiParser';

export const fetchPostsEpic = action$ => action$.pipe(
  ofType(fetchPosts.type),
  mergeMap(action =>
    from(
        apiParser("news/top.json", "GET", action.payload)
        .then(fetchPostsSuccess)
        .catch(fetchPostsError)
    )
  )
)
