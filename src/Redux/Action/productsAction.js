import axios from "axios";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAIL = "FETCH_PRODUCTS_FAIL";

export const productAction = (data) => async (dispatch) => {
    dispatch({type: FETCH_PRODUCTS_REQUEST, payload: data});
    try{
        const products = (await axios.get("https://dummyjson.com/products")).data;
        console.log(products.products);
        dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: products.products});
    }catch(error){
        dispatch({type: FETCH_PRODUCTS_FAIL, payload: error.message});
    }
};
export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
export const FETCH_CART_FAIL = "FETCH_CART_FAIL";

 export const cartAction = (data) => (dispatch)=>{
    dispatch({type: FETCH_CART_REQUEST});
    try{
        console.log("CART", data);
       // const products = (await axios.get("https://dummyjson.com/products")).data;
        dispatch({type: FETCH_CART_SUCCESS, payload: data});
    }catch(error){
        dispatch({type: FETCH_CART_FAIL, payload: error.message});
    }
};
