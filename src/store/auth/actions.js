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