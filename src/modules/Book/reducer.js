import {
    LOAD_BOOK_REQUEST,
    LOAD_BOOK_SUCCESS,
    LOAD_BOOK_FAILURE,
  } from './action'
  const initialState = {
    isLoading: false,
    items: [],

  }
  
  export default function (state = initialState, action) {
    switch (action.type) {
      case LOAD_BOOK_REQUEST:
        return { ...state, isLoading: true, items: [], }
      case LOAD_BOOK_SUCCESS:
        return {
          ...state,
          isLoading: false,
          items: action.payload.data,
    
        }
      case LOAD_BOOK_FAILURE:
        return { ...state, isLoading: false,}
  
      default:
        return state
    }
  }
  