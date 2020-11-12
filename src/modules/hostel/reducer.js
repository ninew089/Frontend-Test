import { ADD_TO_CART, REMOVE_FROM_CART,CLEAR_HOSTEL } from './action'


const initialState = {
  price: 0,
  productIds: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      const { productId } = action.payload
      if (state.productIds.includes(productId)) return state
      return {
        ...state, productIds: [...state.productIds, productId],
      }
    }
    case REMOVE_FROM_CART:
      return {
        ...state,
        productIds: state.productIds.filter(
          (id) => +id !== action.payload.productId
        ),
      }
  
      case CLEAR_HOSTEL:
        return { ...state, productIds: [] }
    default:
      return state
  }
}

  