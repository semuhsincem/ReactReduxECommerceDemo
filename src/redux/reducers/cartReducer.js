import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function cartReducer(state = initialState.cart, action) {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT_INTO_CART:
      var addedItem = state.find((x) => x.product.id === action.payload.product.id);
      if (addedItem) {
        let newState = state.map((cartItem) => {
          if (cartItem.product.id === action.payload.product.id) {
            return Object.assign({}, addedItem, {quantity: addedItem.quantity + 1});
          }
          return cartItem;
        });
        return newState;
      }else{
        return [...state, { ...action.payload }]
      }
      case  actionTypes.REMOVE_PRODUCT_FROM_CART:
        var letNewstate = state;
        letNewstate = state.filter(x=>x.product.id !== action.payload.id);
        return letNewstate;
    default:
      return state;
  }
}
