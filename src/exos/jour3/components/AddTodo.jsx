import { useContext, useState } from "react";

export const AddTodo = () => {
    const { dispatch } = useContext(TodoContext3);
    const [inputValue, setInputValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== "") {
            dispatch({ type: "ADD", payload: { id: Date.now(), title: inputValue, completed: false } });
            setInputValue("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button type="submit">Ajouter</button>
        </form>
    );
};