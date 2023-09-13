import {AUTHENTICATE_SUCCESS } from './actions'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  user: {},
})

export const auth = (state = defaultState, { type, payload }) => {
  switch (type) {
    case AUTHENTICATE_SUCCESS:
      return state.set('user', payload)
    default:
      return state
  }
}