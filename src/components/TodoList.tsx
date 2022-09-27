import { useContext } from 'react';

import { Todo } from '../types/Todo';

import { Form } from './Form';
import { TodoItem } from './TodoItem';

import { AppContext } from '../context';

export const TodoList = () => {

    const { todosContext: { todos, actions } } = useContext(AppContext);

    return (
        <div className="container py-4">
            <div className="card shadow mb-5">
                { todos.length ? (
                    <div className="list-group list-group-flush">
                        { todos.map((todo: Todo, index: number) => (
                            <TodoItem
                                key={index}
                                index={index}
                                todo={todo}
                                actions={{
                                    completeTodo: actions.completeTodo,
                                    removeTodo: actions.removeTodo,
                                }}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="text-center p-3">
                        <p className="mb-0 text-muted">No To do items</p>
                    </div>
                )}
                <div className="card-footer py-3">
                    <Form actions={{
                        addTodo: actions.addTodo,
                    }}/>
                </div>
            </div>
        </div>
    );
}
