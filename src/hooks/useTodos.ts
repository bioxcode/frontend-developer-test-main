import { useState } from 'react';
import { Todo } from '../types/Todo';

export const useTodos = (initialData: Todo[]) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>(initialData);

    const addTodo = (text: string) => setTodos([...todos, {
        text,
        isCompleted: false,
    }]);

    const completeTodo = (isCompleted: boolean, index: number) => setTodos(todos.map((t: Todo, i: number) => i === index ? {
        ...t,
        isCompleted,
    }: t));

    const removeTodo = (index: number) => setTodos(todos.filter((t: Todo, i: number) => i !== index));

    const clearAllTodos = () => {
        setTodos([]);
        setShowModal(false);
    };

    return {
        todos: todos,
        todosCount: todos.length,
        isCompletedCount: todos.filter((todo: Todo) => todo.isCompleted).length,
        showModal,
        actions: {
            addTodo,
            completeTodo,
            removeTodo,
            clearAllTodos,
            setShowModal,
        },
    }
}