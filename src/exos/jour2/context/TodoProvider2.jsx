import { useState } from "react"
import { TodoContex2 } from "./TodoContext2"


export const TodoProvider = ({ children }) => {
    const [todos2, setTodos2] = useState([])

    const deleteTodo2 = (id) => {
        const deleted = setTodos2(t => t.filter(to => to.id !== id))
        setTodos2(deleted)
    }

    return (
        <TodoContex2.Provider value={{ todos2, deleteTodo2 }} >{children}</TodoContex2.Provider>
    )
}