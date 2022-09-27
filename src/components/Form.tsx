import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

type FormProps = {
    actions: {
        addTodo: Function,
    },
}

export const Form = ({ actions }: FormProps) => {

    const { addTodo } = actions;

    const [inputValue, setInputValue] = useState<string>('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        if (inputValue) {
            addTodo(inputValue.trim())
            setInputValue('');
        }
    };

    const handleChange = (e: any) => {
        setInputValue(e.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="input-group">
                <input
                    id="newItem"
                    className="form-control"
                    placeholder="New todo item..."
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                />
                <button type="submit" className="btn btn-primary" disabled={!inputValue}><FontAwesomeIcon icon={faPlus}/><span className="ms-2 d-none d-md-inline">Add Todo</span></button>
            </div>
        </form>
    );
}