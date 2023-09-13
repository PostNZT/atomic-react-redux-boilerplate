export const AUTHENTICATE_REQUEST = 'AUTHENTICATE_REQUEST'
export const AUTHENTICATE_SUCCESS = 'AUTHENTICATE_SUCCESS'
export const AUTHENTICATE_FAILURE = 'AUTHENTICATE_FAILURE'

export const authenticateRequest = (username, password) => ({
  type: AUTHENTICATE_REQUEST,
  payload: { username, password},
  meta: {
    thunk: true,
  }
})

export const authenticateSuccess = (response, meta) => ({
  type: AUTHENTICATE_SUCCESS,
  payload: response,
  meta,
})

export const authenticateFailure = (response, meta) => ({
  type: AUTHENTICATE_FAILURE,
  payload: response,
  meta,
})

export const GET_SAVED_USER_REQUEST = 'GET_SAVED_USER_REQUEST'
export const GET_SAVED_USER_SUCCESS = 'GET_SAVED_USER_SUCCESS'

export const getSavedUserRequest = () => ({
  type: GET_SAVED_USER_REQUEST,
  meta: {
    thunk: true
  }
})

export const getSavedUserSuccess = (response, meta) => ({
  type: GET_SAVED_USER_SUCCESS,
  payload: response,
  meta
})

export const SIGNOUT_USER_REQUEST = 'SIGNOUT_USER_REQUEST'
export const SIGNOUT_USER_SUCCESS = 'SIGNOUT_USER_SUCCESS'

export const signoutUserRequest = () => ({
  type: SIGNOUT_USER_REQUEST,
  meta: {
    thunk: true
  }
})

export const signoutUserSuccess = (response, meta) => ({
  type: SIGNOUT_USER_SUCCESS,
  payload: response,
  meta
})