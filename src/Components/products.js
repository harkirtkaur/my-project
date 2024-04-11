import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartAction, productAction } from "../Redux/Action/productsAction";
import { Toaster, toast } from "sonner";
//import Cart from "./cart";
const Products=()=>
{
    const dispatch = useDispatch();

    const prd=useSelector((state) => state.myproducts.products);
    const success = useSelector((state) => state.myproducts.success);
    const error = useSelector((state) => state.myproducts.error);
    const loading = useSelector((state) => state.myproducts.isloading);
    const cart = useSelector((state) => state.myproducts.cart);
    console.log("PRD",prd);
    console.log("ERRoR",error);
    console.log("LOADING",loading);
    console.log("SUCCESS",success);

    console.log(cart);
    
    useEffect(()=>{
        dispatch(productAction());
    },[dispatch]);
    
    useEffect(() => {
        if(success){
            toast.success(success);
        } else if(error){
            toast.error(error);
        }
    }, [success,error]);

    // function AddtoCart(e){
    //     console.log("Added");
    //     console.log(e);
    //     dispatch(cartAction(e))
    // }
    return(
        <>
        <h1>Products</h1>
         <Toaster richColors></Toaster>
        { loading ? (
            <h1>Loading...</h1>
        ):(
            <>


            {prd.map((e)=> (
                 <div className="card" style={{width: '18rem'}} key={e._id}>
                     <img className="card-img-top" src={e.thumbnail} alt="..." />
                         <div className="card-body">
                           <h5 className="card-title">{e.title}</h5>
                           <p className="card-text">{e.description}</p>
                           <a href="/" className="btn btn-primary">{e.price}</a>
                           <button className="btn btn-danger" onClick={()=>dispatch(cartAction(e))}>Add to Cart</button>
                          </div>
                </div>
 
            ))}
            </>
        )} 
        </>
    );
};
export default Products;
