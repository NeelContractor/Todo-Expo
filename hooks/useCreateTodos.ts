import { useState } from "react";

export interface Todo {
    title: string,
    timestamp: string,
    completed: boolean,
}

export function useCreateTodos() {
    const [todos, setTodos] = useState<Todo[]>([]);

    function addTodo(title: string) {
        const newTodo: Todo = {
            title,
            timestamp: new Date().toISOString(),
            completed: false,
        };
        setTodos((prev) => [...prev, newTodo]);
    }

    // toggle complete
    function toggleTodo(index: number) {
        setTodos((prev) => prev.map((todo, i) => i === index ? { ...todo, completed: !todo.completed } : todo))
    }

    // delete todo
    function deleteTodo(index: number) {
        setTodos((prev) => prev.filter((_, i) => i !== index))
    }

    return {
        todos,
        addTodo,
        toggleTodo,
        deleteTodo
    }
} 