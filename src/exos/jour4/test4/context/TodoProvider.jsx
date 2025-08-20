import { useEffect, useState } from "react"


export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState(localStorage.getItem("todoToken", []));

    useEffect(() => {
        setTodos(prev => JSON.parse(localStorage.getItem('todoToken', prev)))
    }, [])

    const addTodo = (title, description, completed) => {
        const added = [...todos, { id: Math.floor(Math.random() * 500), title, description, completed }]
        setTodos(added)
        JSON.stringify(localStorage.setItem("todoToken", added))
    }

    const deleteTodo = (id) => {
        return todos.filter(prev => prev.id ? prev.id !== id : prev)
    }

    const values = {
        todos,
        addTodo,
        deleteTodo,
    }

    return (
        <TodoContext.provider value={values}>{children}</TodoContext.provider>
    )
}

//Corrigé : 
// import { createContext, useState, useEffect } from "react";

// export const TodoContext = createContext();

// export const TodoProvider = ({ children }) => {
//     const [todos, setTodos] = useState(() => {
//         return JSON.parse(localStorage.getItem("todoToken")) || [];
//     });

//     // Mettre à jour localStorage à chaque changement
//     useEffect(() => {
//         localStorage.setItem("todoToken", JSON.stringify(todos));
//     }, [todos]);

//     const addTodo = (todo) => {
//         const newTodo = { id: Math.floor(Math.random() * 100000), ...todo };
//         setTodos([...todos, newTodo]);
//     };

//     const deleteTodo = (id) => {
//         setTodos(todos.filter(todo => todo.id !== id));
//     };

//     const toggleCompleted = (id) => {
//         setTodos(
//             todos.map(todo =>
//                 todo.id === id ? { ...todo, completed: !todo.completed } : todo
//             )
//         );
//     };

//     return (
//         <TodoContext.Provider value={{ todos, addTodo, deleteTodo, toggleCompleted }}>
//             {children}
//         </TodoContext.Provider>
//     );
// };
