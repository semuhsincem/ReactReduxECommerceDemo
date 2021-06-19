import * as actionTypes from "../actions/actionTypes";

export function getProductSuccess(products) {
  console.log("***********");
  console.log(products);
  console.log("***********");
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: products,
  };
}

export function getProducts(categoryId) {
  return function (dispatch) {
    var url = "http://localhost:3000/products";
    if (categoryId !== undefined && categoryId !== 0)
      url += "?categoryId=" + categoryId;
    fetch(url)
      .then(response => response.json())
      .then(result => dispatch(getProductSuccess(result)))
      .catch((err) => console.warn(err));
  };
}
