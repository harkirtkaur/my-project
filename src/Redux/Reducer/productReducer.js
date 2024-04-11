//import { toast } from "sonner";
import {
  FETCH_PRODUCTS_FAIL,
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_CART_FAIL,
  FETCH_CART_REQUEST,
  FETCH_CART_SUCCESS,
} from "../Action/productsAction";

const initialProductState = {
  products: [],
  isloading: "",
  error: "",
  success: "",
  cart: [],
};
export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return { ...state, isloading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        isloading: false,
        error: "No error",
        success: "Products fetched successfully",
        products: [...action.payload]
      };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, isloading: false, error: action.payload };
    case FETCH_CART_REQUEST:
      return { ...state, isloading: true };
    case FETCH_CART_SUCCESS:
    //   console.log("Action", action.payload);
    //toast.success("Product added to cart")
      return {
        ...state,
        isloading: false,
        error: "No error",
        success: "added to cart successfully",
        cart: [...state.cart,action.payload],
      };
    case FETCH_CART_FAIL:
      return { ...state, isloading: false, error: action.payload };
    default:
      return state;
  }
};
