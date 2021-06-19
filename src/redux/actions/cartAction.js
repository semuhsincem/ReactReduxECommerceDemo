import * as actionTypes from "./actionTypes";

export function addCart(productItem) {
  return {
    type: actionTypes.ADD_PRODUCT_INTO_CART,
    payload: productItem,
  };
}

export function removeFromCart(productItem) {
  return {
    type: actionTypes.REMOVE_PRODUCT_FROM_CART,
    payload: productItem,
  };
}
