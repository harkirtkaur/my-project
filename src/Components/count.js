import React from "react";
//import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { decrement,increment } from "../Redux/Action/countAction";

const Count = () =>{
    const dispatch = useDispatch();
    const myvalue = useSelector((state) => state.counter.count);
    console.log(myvalue);
    
    function add(){
        dispatch(increment(1));
    }
    return(
        <>
            <h1>{myvalue}</h1>
            <button onClick={add}>Add</button>
            <button onClick={()=> dispatch(decrement(1))}>Subtract</button>
        </>
    )
}
export default Count;