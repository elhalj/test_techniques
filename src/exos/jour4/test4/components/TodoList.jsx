import React, { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext';

const TodoList = () => {
    const [list, setList] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [completed, setCompleted] = useState(false);
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all");
    const { addTodo, deleteTodo, todos } = useContext(TodoContext);

    const handleSearch = (e) => {
        const val = e.target.value
        setSearch(val);
    }

    const filter = (e) => {
        const val = e.target.value;
        setFilter(val);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const add = { title, description, completed };
        addTodo(add)
    }

    const filterData = () => {
        todos.filter(t => {
            if ()
        })
            .filter(setFilter())
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label >Title * <input type="text" name='title' value={title} onChange={e => setTitle(e.target.value)} /></label>
                <label >Description * <input type="text" name='description' value={description} onChange={e => setDescription(e.target.value)} /></label>
                <label >Completed * <input type="checkbox" name='completed' value={completed} onChange={e => setTitle(e.target.checked)} /></label>
                <button type='submit'>Sublit</button>
            </form>
            <div>
                <div><input type="text" name='search' value={search} onChange={handleSearch} /></div>
                <ul>
                    {todos.map(todo => (
                        <li key={todo.id}>
                            <div>{todo.title}</div>
                            <div>{todo.completed ? "Completed" : "non completed"}</div>
                            <div>{todo.description}</div>
                            <div><button type='button' onClick={deleteTodo(todo.id)}>Delete</button></div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TodoList

//Corrigé : 
// import React, { useContext, useState, useMemo } from "react";
// import { TodoContext } from "../context/TodoContext";

// const TodoList = () => {
//     const { todos, addTodo, deleteTodo, toggleCompleted } = useContext(TodoContext);
//     const [title, setTitle] = useState("");
//     const [description, setDescription] = useState("");
//     const [completed, setCompleted] = useState(false);
//     const [search, setSearch] = useState("");
//     const [filter, setFilter] = useState("all");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (title.trim().length < 1) return;
//         addTodo({ title, description, completed });
//         setTitle("");
//         setDescription("");
//         setCompleted(false);
//     };

//     const filteredTodos = useMemo(() => {
//         return todos
//             .filter(todo => todo.title.toLowerCase().includes(search.toLowerCase()))
//             .filter(todo => {
//                 if (filter === "completed") return todo.completed;
//                 if (filter === "non-completed") return !todo.completed;
//                 return true;
//             });
//     }, [todos, search, filter]);

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Title"
//                     value={title}
//                     onChange={e => setTitle(e.target.value)}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Description"
//                     value={description}
//                     onChange={e => setDescription(e.target.value)}
//                 />
//                 <label>
//                     Completed
//                     <input
//                         type="checkbox"
//                         checked={completed}
//                         onChange={e => setCompleted(e.target.checked)}
//                     />
//                 </label>
//                 <button type="submit">Add Todo</button>
//             </form>

//             <input
//                 type="text"
//                 placeholder="Search todos..."
//                 value={search}
//                 onChange={e => setSearch(e.target.value)}
//             />

//             <select value={filter} onChange={e => setFilter(e.target.value)}>
//                 <option value="all">All</option>
//                 <option value="completed">Completed</option>
//                 <option value="non-completed">Non-completed</option>
//             </select>

//             <ul>
//                 {filteredTodos.map(todo => (
//                     <li key={todo.id}>
//                         <div>
//                             <strong>{todo.title}</strong> - {todo.description}
//                         </div>
//                         <div>
//                             Status: {todo.completed ? "Completed" : "Non-completed"}
//                             <button onClick={() => toggleCompleted(todo.id)}>Toggle</button>
//                             <button onClick={() => deleteTodo(todo.id)}>Delete</button>
//                         </div>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// };

// export default TodoList;

// Points forts de cette version:

// TodoProvider gère state + localStorage.

//     addTodo, deleteTodo, toggleCompleted → actions claires.

// TodoList gère ajout, recherche, filtre, toggle.

// useMemo optimise le filtrage.

// Code clair et facilement extensible pour des tests techniques.