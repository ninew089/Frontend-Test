import axios from 'axios'

const LOAD_LOGIN_REQUEST = 'hostel_management/src/login/LOAD_LOGIN_REQUEST'
const LOAD_LOGIN_SUCCESS = 'hostel_management/src/login/LOAD_LOGIN_SUCCESS'
const LOAD_LOGIN_FAILURE = 'hostel_management/src/login/LOAD_LOGIN_REQUEST'
const LOGIN_CHECK = 'hostel_management/src/login/LOGIN_CHECK'
const SET_LOGIN = 'hostel_management/src/login/SET_LOGIN'

function loadLogin(loginInfo) {
  return async (dispatch) => {
    dispatch({ type: LOAD_LOGIN_REQUEST })
    try {
      const { data } = await axios.post(`/book/${loginInfo.email}&&${loginInfo.password}`)
      dispatch({
        type: LOAD_LOGIN_SUCCESS,
        payload: {
          token: data,
        },
      })

    } catch (err) {
      dispatch({ type: LOAD_LOGIN_FAILURE })
    }
  }
}



function setLogin(login) {
  return {
    type: SET_LOGIN,
    payload: {
      login,
    },
  }
}

export {
  LOAD_LOGIN_REQUEST,
  LOAD_LOGIN_SUCCESS,
  LOAD_LOGIN_FAILURE,
  LOGIN_CHECK,
  SET_LOGIN,
  loadLogin,
  setLogin,
}
