export function TodoReducer(state, action) {
    switch (action.type) {
        case "ADD":
            return {
                ...state,
                todos: [...state.todos, action.payload],
            };
        case "DELETE":
            return {
                ...state,
                todos: state.todos.filter((todo) => todo.id !== action.payload),
            };
        case "TOGGLE":
            return {
                ...state,
                todos: state.todos.map((todo) =>
                    todo.id === action.payload
                        ? { ...todo, completed: !todo.completed }
                        : todo
                ),
            };
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1,
            };
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1,
            };
        default:
            return state;
    }
}
