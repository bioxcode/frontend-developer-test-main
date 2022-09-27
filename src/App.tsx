import { AppProvider } from './context';

import { Header } from './components/Header';
import { TodoList } from './components/TodoList';
import { Modal } from './components/Modal';

const AppView = () => (
    <AppProvider>
        <Header/>
        <TodoList/>
        <Modal/>
    </AppProvider>
);
export default AppView;
