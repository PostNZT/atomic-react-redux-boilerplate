import { call, put, takeEvery } from 'redux-saga/effects'
import {
  AUTHENTICATE_REQUEST,
  GET_SAVED_USER_REQUEST,
  SIGNOUT_USER_REQUEST,
  authenticateFailure,
  authenticateSuccess,
  getSavedUserSuccess,
  signoutUserSuccess,
} from './actions'
import { checkLoginCredentials } from '../../services/helper'

function* authRequest(payload, meta) {
  const {username, password} = payload;
  let user = { username, password, isAuthenticated: false };

  try {
    const result = checkLoginCredentials(username, password);

    if (result) {
      user.isAuthenticated = true
      yield call([localStorage, localStorage.clear]);
      yield call([localStorage, localStorage.setItem], "user", JSON.stringify(user));
      yield put(authenticateSuccess(user, meta));
    }
  } catch(error){
    yield put(authenticateFailure(user, meta));
  }
}

function* getSavedUser(meta) {
  let user = { username: "", isAuthenticated: false}
  let account = yield call([localStorage, localStorage.getItem], "user")

  account = JSON.parse(account)

  if (account !== null) {
    user = account
  }
  yield put(getSavedUserSuccess(user, meta))
}


function* signoutUser(meta) {
  let user = { username: "", isAuthenticated: false}
  yield call([localStorage, localStorage.clear])
  yield put(signoutUserSuccess(user, meta))
}

function* watchSignoutUser({ meta }) {
  yield call(signoutUser, meta)
}

function* watchGetSavedUser({ meta }) {
  yield call(getSavedUser, meta)
}

function* watchAuthRequest({payload, meta}) {
  yield call(authRequest, payload, meta)
}

export default function* sagas() {
  yield takeEvery(AUTHENTICATE_REQUEST, watchAuthRequest)
  yield takeEvery(GET_SAVED_USER_REQUEST, watchGetSavedUser)
  yield takeEvery(SIGNOUT_USER_REQUEST, watchSignoutUser)
}