
const ADD_TO_CART = 'src/hostel/ADD_TO_CART'
const REMOVE_FROM_CART = 'src/hostel/REMOVE_FROM_CART'
const CLEAR_HOSTEL = 'src/hostel/CLEAR_HOSTEL'

function addToCart(productId) {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId,
      },
    })
  }
}


function removeFromCart(productId) {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: {
        productId,
      },
    })
  }
}
function clearHostel() {
  return {
    type: CLEAR_HOSTEL,
  }
}


export {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_HOSTEL,
  addToCart,
  removeFromCart,
  clearHostel,

}
