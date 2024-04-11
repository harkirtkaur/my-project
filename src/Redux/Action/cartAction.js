// import axios from "axios";
// export const FETCH_CART_REQUEST = "FETCH_CART_REQUEST";
// export const FETCH_CART_SUCCESS = "FETCH_CART_SUCCESS";
// export const FETCH_CART_FAIL = "FETCH_CART_FAIL";

// const cartAction = (data) => async (dispatch)=>{
//     dispatch({type: FETCH_CART_REQUEST});
//     try{
//         console.log("CART", data);
//         const products = (await axios.get("https://dummyjson.com/products")).data;
//         dispatch({type: FETCH_CART_SUCCESS, payload: data});
//     }catch(error){
//         dispatch({type: FETCH_CART_FAIL, payload: error.message});
//     }
// };
// export default cartAction;