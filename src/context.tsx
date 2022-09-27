import initialTodosData from './data/todos';

import { createContext, ReactNode } from 'react';
import { useTodos } from './hooks/useTodos';

const AppContext = createContext<any>(undefined);

type AppProviderProps = {
    children: ReactNode,
}

const AppProvider = ({ children }: AppProviderProps) => {

    const todosContext = useTodos(initialTodosData);

    return (
        <AppContext.Provider value={{ todosContext }}>{ children }</AppContext.Provider>
    );
};

export { AppProvider, AppContext };