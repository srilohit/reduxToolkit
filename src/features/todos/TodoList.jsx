import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todos";

const TodoList = ()=>{
     
    const {todos} = useSelector( state => state.t);
    const [nt, setNt] = useState('');
    const dispatch = useDispatch();
    
    const handleNt = (e)=>{
        setNt(e.target.value);
    }

    return(
        <div className="border border-dark p-4 m-1">
            <h3>Todolist</h3>
            <input type="text" onChange={(e)=>{handleNt(e)}}/> &nbsp;
            <button onClick={()=>{dispatch(addTodo(nt))}}>add todo</button>
            <ul>
                {
                    todos.map((tl,i)=>{
                        return(
                            <li key={i} className="m-1">
                                {tl} &nbsp;
                                <button className="btn btn-danger btn-sm" onClick={()=>{dispatch(deleteTodo(i))}}>delete</button>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
};

export default TodoList;