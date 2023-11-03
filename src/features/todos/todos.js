import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: ['bunny', 'rohit', 'gautam']
};

const todosSlice = createSlice({
    name: 'todosSlice',
    initialState,
    reducers: {
        addTodo: (state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo: (state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
});

export const {addTodo, deleteTodo} = todosSlice.actions;
const todoReducer = todosSlice.reducer;
export default todoReducer;
