import {
    LOAD_LOGIN_REQUEST,
    LOAD_LOGIN_SUCCESS,
    LOAD_LOGIN_FAILURE,
    SET_LOGIN,
  } from './action'
  const initialState = {
    isLoading: false,
    users: [],
    Login: false,
  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_LOGIN_REQUEST:
        return { ...state, isLoading: true, users: [], Login: false }
      case LOAD_LOGIN_SUCCESS:
        return {
          ...state,
          isLoading: false,
          users: action.payload.user,
          Login: true,
        }
      case LOAD_LOGIN_FAILURE:
        return { ...state, isLoading: false, Login: false }
      case SET_LOGIN:
        return { ...state, Login: action.payload.login }
      default:
        return state
    }
  }
  