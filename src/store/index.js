
import { combineReducers } from 'redux'
import { fork, all } from 'redux-saga/effects'

import { auth } from './auth/reducers'
import { reducer as thunkReducer } from 'redux-saga-thunk'
import * as authSagas from './auth/sagas'

export const rootReducer = combineReducers({
  thunk: thunkReducer,
  auth,
})
  
export function* rootSaga() {
  yield all([
    ...Object.values(authSagas),
  ].map(fork))
}