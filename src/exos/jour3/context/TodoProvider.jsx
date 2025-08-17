import { useEffect, useReducer } from "react";
import { TodoReducer } from "../lib/TodoReccer";

export const TodoProvider = ({ children }) => {
    const initialState = {
        todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(state.todos));
    }, [state.todos]);

    return (
        <TodoContext3.Provider value={{ state, dispatch }}>
            {children}
        </TodoContext3.Provider>
    );
};