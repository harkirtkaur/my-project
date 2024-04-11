import React from "react";
//import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//import cartAction from "../Redux/Action/cartAction";
const Cart=()=>
{
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.myproducts.cart);
    let total=0;
    cart.map((p)=>{
        total=total+p.price
    })
    // useEffect(()=>{
    //    dispatch(cartAction())  
    //  },[dispatch])
    return(
        <>
        <h1>Cart products</h1>
        <h3>Total items added to cart:{cart.length}</h3>
        <h3>Total price: {total}</h3>
        {cart.map((prd) => (
            <h5>{prd.title} Price:{prd.price}</h5>
        ))}
        </>
    );
};
export default Cart;