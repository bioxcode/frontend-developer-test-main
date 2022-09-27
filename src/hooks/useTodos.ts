import { useState } from 'react';
import { Todo } from '../types/Todo';

export const useTodos = (initialData: Todo[]) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [todos, setTodos] = useState<Todo[]>(initialData);

    const addTodo = (text: string) => setTodos([...todos, {
        text,
        isCompleted: false,
    }]);

    const completeTodo = (isCompleted: boolean, todoIndex: number) => setTodos(todos.map((todo: Todo, index: number) => index === todoIndex ? {
        ...todo,
        isCompleted,
    }: todo));

    const removeTodo = (todoIndex: number) => setTodos(todos.filter((todo: Todo, index: number) => index !== todoIndex));

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