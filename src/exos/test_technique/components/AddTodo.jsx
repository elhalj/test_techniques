import React, { useMemo, useCallback, useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { Link } from "react-router-dom";

const AddTodo = () => {
    const { addTodo, todo } = useContext(TodoContext);
    const [title, setTitle] = useState("");
    const [completed, setCompleted] = useState(false);
    const [search, setSearch] = useState("")
    const [filter, setFilter] = useState("all")



    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (title.trim().length < 3) {
                console.log("Le titre doit etre d'aumoins 3 caractere ou plus");
                return;
            }

            addTodo(title, completed);
            setTitle("");
            setCompleted(false);
        },
        [addTodo, title, completed]
    );

    const todoFilterd = useMemo(() => {
        return todo
            .filter(t => t.title.toLowerCase().includes(search.toLowerCase()))
            .filter(t => {
                if (filter === "completed") return t.completed
                if (filter === "non-completed") return t.completed === false
                return true
            })

    }, [todo, filter, search])

    return (
        <div>
            <input type="text" value={search} name="search" onChange={(e) => setSearch(e.target.value)} />
            <form onSubmit={handleSubmit}>
                <label>
                    Title *
                    <input
                        type="text"
                        value={title}
                        name="title"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </label>
                <label>
                    Completed *
                    <input
                        type="checkbox"
                        name="completed"
                        checked={completed}
                        onChange={(e) => setCompleted(e.target.checked)}
                    />
                </label>
                <select value={filter} onChange={e => setFilter(e.target.value)}>
                    <option value="completed">completed</option>
                    <option value="non-completed">non-completed</option>
                    <option value="all">all</option>
                </select>
                <button>add</button>
            </form>
            <ul>{todoFilterd.map(t => (
                <li key={t.id}>{t.title}, {t.completed}</li>
            ))}</ul>
        </div>
    );
};

export default AddTodo;
