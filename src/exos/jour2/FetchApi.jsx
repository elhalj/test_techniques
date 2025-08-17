import React, { useCallback, useEffect, useMemo, useState } from "react";
import { TodoContex2 } from "./context/TodoContext2";

const FetchApi = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState("all");

    const fetchData = useCallback(async () => {
        setLoading(true);
        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/todos");

            if (!res.ok) {
                throw new Error("Erreur de récupération");
            }
            const response = await res.json();
            setTodos(response);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const handleSearch = useCallback((e) => {
        const value = e.target.value;
        setSearch(value);
    }, []);

    const filterTodo = useMemo(() => {
        if (search) {
            return todos.filter((todo) =>
                todo.title.toLowerCase().includes(search.toLowerCase())
            );
        }
        if (filter === "completed") {
            return todos.filter((todo) => todo.completed);
        } else if (filter === "non-completed") {
            return todos.filter((todo) => !todo.completed);
        }

        return todos;
    }, [search, todos, filter]);

    const Table = React.memo(() => (
        <div>
            {filterTodo.map((todo) => (
                <div key={todo.id}>
                    <p>{todo.title}</p>
                    <p>{todo.userId}</p>
                    <button type="button" >Delete</button>
                </div>
            ))}
        </div>
    ));

    if (loading) {
        return <div>Chargement...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <input type="text" value={search} onChange={handleSearch} />
            <select
                name="filter"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            >
                <option value="complete">Complete</option>
                <option value="non-completed">Non-completed</option>
                <option value="all">All</option>
            </select>
            <Table />
        </div>
    );
};

export default FetchApi;
