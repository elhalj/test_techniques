import React from "react";
import { Counter } from "./components/Counter";
import { TodoList } from "./components/TodoList";
import { UserList } from "./components/UserList";
import { TodoProvider } from "./context/TodoProvider";


const Main3 = () => (
    <TodoProvider>
        <Counter />
        <TodoList />
        <UserList />
    </TodoProvider>
);

export default Main3;
