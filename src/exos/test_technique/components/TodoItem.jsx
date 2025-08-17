import React from 'react'
import { useParams } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';

const TodoItem = () => {
    const { id } = useParams()
    const { todo } = React.useContext(TodoContext)

    const data = todo.find((to) => to.id === Number(id))

    if (!data) {
        return <div>Erreur de l'id</div>
    }
    return (
        <div>
            <p>{data.title}</p>
            <p>{data.completed ? 'Terminée' : 'En cours'}</p>
        </div>
    )
}

export default TodoItem
