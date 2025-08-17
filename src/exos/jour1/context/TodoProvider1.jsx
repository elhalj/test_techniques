import { useState } from "react"
import { TodoContext1 } from "./TodoContext1";


export const TodoProvider1 = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const addTodo = (title, description) => {
        const newTodo = { id: Math.floor(Math.random() * 500), title, description };
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    }

    const updateTodo = (id, title, description) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(todo =>
                todo.id === id ? { ...todo, title, description } : todo
            );
            return updatedTodos;
        });
    }

    const values = {
        todos,
        addTodo,
        deleteTodo,
        updateTodo
    }

    return (
        <TodoContext1.Provider value={values}>{children}</TodoContext1.Provider>
    )
}