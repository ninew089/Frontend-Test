import axios from 'axios'

const LOAD_BOOK_REQUEST = 'hostel_management/src/login/LOAD_LOGIN_REQUEST'
const LOAD_BOOK_SUCCESS = 'hostel_management/src/login/LOAD_LOGIN_SUCCESS'
const LOAD_BOOK_FAILURE = 'hostel_management/src/login/LOAD_LOGIN_REQUEST'



function loadBook(id) {
  return async (dispatch) => {
    dispatch({ type: LOAD_BOOK_REQUEST })
    try {
      const { data } = await axios.post(`/hostel?id=${id}`)
      dispatch({
        type: LOAD_BOOK_SUCCESS,
        payload: {
         data:data,
        },
      })

    } catch (err) {
      dispatch({ type: LOAD_BOOK_FAILURE })
    }
  }
}


export {
    LOAD_BOOK_REQUEST,
    LOAD_BOOK_SUCCESS,
    LOAD_BOOK_FAILURE,

    loadBook,

}
