import { Todo } from '../types/Todo';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type TodoItemProps = {
    index: number,
    todo: Todo,
    actions: {
        completeTodo: Function,
        removeTodo: Function,
    },
}

export const TodoItem = ({ index, todo, actions }: TodoItemProps) => {

    const { text, isCompleted } = todo;
    const { completeTodo, removeTodo } = actions;

    const handleChange = (e: any) => {
        completeTodo(e.target.checked, index);
    }

    return (
        <div className="list-group-item d-flex p-3" style={{textDecoration: isCompleted ? "line-through" : ""}}>
            <div>
                <input
                    name="isGoing"
                    className="form-check-input fs-4"
                    type="checkbox"
                    checked={isCompleted}
                    onChange={handleChange}/>
            </div>
            <div className="flex-fill px-3 pt-1">
                <span>{text}</span>
            </div>
            <div>
                <button className="btn btn-white text-danger" onClick={() =>  removeTodo(index)}>
                    <FontAwesomeIcon icon={faClose} className="d-block" />
                </button>
            </div>
        </div>
    );
}
