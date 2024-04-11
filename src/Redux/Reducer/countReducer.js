import {  INCREMENT, DECREMENT } from "../Action/countAction";
const initialCountState = {
    count: 0,
    name: "Mia"
};
export const countReducer = (state = initialCountState, action) =>{
    switch(action.type)
    {
        case INCREMENT:
            return{
                ...state,
                count: state.count + action.payload 
            };
        case DECREMENT:
            return{
                ...state,
                count: state.count - action.payload
            };
        
        default:
            return state;
    }
};
