import * as actionTypes from "./actionTypes";

export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}


//Change Category List  -- START 
export function getCategoriesSuccess(categories){
    return {
        type : actionTypes.GET_CATEGORIES_SUCCESS,
        payload : categories
    }
}
export function getCategories() {
    return function(dispatch){
        return fetch("http://localhost:3000/categories")
        .then(response=>response.json())
        .then(result=>dispatch(getCategoriesSuccess(result)))
        .catch(err=>(
          console.warn(err)
        ));
    }
}

//Change Category List -End 

