import { useContext } from 'react';
import { AppContext } from '../context';

export const Modal = () => {

    const { todosContext: { showModal, actions } } = useContext(AppContext);

    return showModal ? (
        <div className="modal-backdrop show">
            <div className="modal d-block">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content shadow">
                        <div className="modal-body p-4">
                            <h5 className="text-center mb-4">Are you sure you want to delete all todos?</h5>
                            <div className="text-center">
                                <button type="button" className="btn btn-white" onClick={() => actions.setShowModal(false)}>
                                    Cancel
                                </button>
                                <button type="button" className="btn btn-outline-danger ms-2" onClick={() => actions.clearAllTodos()}>
                                    Continue
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : <></>;
}