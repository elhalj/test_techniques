import { useEffect, useState } from "react";
import { TodoContext } from "./TodoContext";



export const TodoProvider = ({ children }) => {
    const [todo, setTodo] = useState([]);
    const [todoStorage, setTodoStorage] = useState(
        JSON.parse(localStorage.getItem("todoToken") || "[]") || []
    );

    useEffect(() => {
        if (Array.isArray(todoStorage) && todoStorage.length) {
            setTodo(todoStorage);
        }
    }, [todoStorage]);

    const addTodo = (title, completed) => {
        try {
            const newTodo = [...todo, { id: Math.floor(Math.random() * 100000), title, completed }];
            setTodo(newTodo);
            setTodoStorage(
                localStorage.setItem("todoToken", JSON.stringify(newTodo))
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const isCompleted = (id, completed) => {
        try {
            const newTodo = todo.map((t) =>
                t.id === id ? { ...t, completed } : t
            );
            setTodo(newTodo);
            setTodoStorage(
                localStorage.setItem("todoToken", JSON.stringify(newTodo))
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const deleted = (id) => {
        try {
            const newTodo = todo.filter((t) => t.id !== id);
            setTodo(newTodo);
            setTodoStorage(
                localStorage.setItem("todoToken", JSON.stringify(newTodo))
            );
        } catch (error) {
            console.log(error.message);
        }
    };

    const isValue = {
        todo,
        addTodo,
        isCompleted,
        deleted,
    };

    return (
        <TodoContext.Provider value={isValue}>{children}</TodoContext.Provider>
    );
};
