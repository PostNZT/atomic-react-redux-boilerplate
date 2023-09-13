import { call, put, takeEvery } from 'redux-saga/effects'
import {
  AUTHENTICATE_REQUEST,
  authenticateSuccess,
} from './actions'

function* authRequest(payload, meta){
  const {username, password} = payload
  console.log("🚀 ~ file: sagas.js:9 ~ function*authRequest ~ password:", password)
  console.log("🚀 ~ file: sagas.js:9 ~ function*authRequest ~ username:", username)

  

  yield put(authenticateSuccess({username}, meta))
}

function* watchAuthRequest({payload, meta}) {
  yield call(authRequest, payload, meta)
}

export default function* sagas() {
  yield takeEvery(AUTHENTICATE_REQUEST, watchAuthRequest)
}