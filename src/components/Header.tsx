import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { AppContext } from '../context';

export const Header = () => {

    const { todosContext: { todosCount, isCompletedCount, actions } } = useContext(AppContext);

    return (
        <header>
            <div className="bg-purple pb-5 mb-n5">
                <div className="container text-center py-5 text-white">
                    <FontAwesomeIcon className="mb-4 mt-5" icon={faCheck} size="2x"/>
                    <h1 className="mb-0">Todo App</h1>
                </div>
            </div>
            <div className="container">
                <div className="card shadow">
                    <div className="card-body d-flex align-items-center">
                        <div className="flex-fill">
                            <span className="fs-5">
                                <FontAwesomeIcon className="me-2 text-success" icon={faCheck}/>
                                <b>{isCompletedCount}</b>
                                <span className="text-muted">/</span>
                                <b>{todosCount}</b>
                                <small className="text-muted"> completed</small>
                            </span>
                        </div>
                        <div>
                            <button className="btn btn-outline-danger" disabled={!todosCount} onClick={() => actions.setShowModal(true)}>
                                <FontAwesomeIcon icon={faTrash}/><span className="ms-2 d-none d-md-inline">Clear All</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}