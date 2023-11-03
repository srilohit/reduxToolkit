import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counterSlice";

const Counter = ()=>{

    const {count} = useSelector( state => state.c);
    const dispatch = useDispatch(); 

    return(
        <div className="border border-dark p-4 m-1">
            <h2>Counter: {count}</h2>
            <div>
                <button onClick={()=>{dispatch(increment())}}>increment</button> &nbsp;
                <button onClick={()=>{dispatch(decrement())}}>decrement</button>
            </div>
        </div>
    )
};

export default Counter;