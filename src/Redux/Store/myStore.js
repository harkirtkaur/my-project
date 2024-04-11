import { configureStore } from "@reduxjs/toolkit";
import {countReducer} from "../Reducer/countReducer";
import { productReducer } from "../Reducer/productReducer";
const myStore = new configureStore({
    reducer: {
        counter: countReducer,
        myproducts: productReducer
    }
})
export default myStore;