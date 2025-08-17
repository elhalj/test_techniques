import { useContext, useState } from "react";

export const TodoList = () => {
    const { state, dispatch } = useContext(TodoContext3);
    const [searchValue, setSearchValue] = useState("");
    const [completedValue, setCompletedValue] = useState("");

    const filteredTodos = state.todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchValue.toLowerCase()) &&
        (completedValue === "" || todo.completed.toString() === completedValue)
    );

    return (
        <div>
            <input
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                placeholder="Rechercher"
            />
            <select value={completedValue} onChange={(e) => setCompletedValue(e.target.value)}>
                <option value="">Tous</option>
                <option value="true">Terminées</option>
                <option value="false">Non terminées</option>
            </select>
            <ul>
                {filteredTodos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} onChange={() => dispatch({ type: "TOGGLE", payload: todo.id })} />
                        {todo.title}
                        <button onClick={() => dispatch({ type: "DELETE", payload: todo.id })}>Supprimer</button>
                    </li>
                ))}
            </ul>
            <AddTodo />
        </div>
    );
};