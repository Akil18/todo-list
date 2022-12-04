import React, { createContext, useEffect, useState } from 'react';
import store from '../stateManagement/store';
import { taskAdded, taskCompleted, taskRemoved } from '../stateManagement/actions';

export const StoreContext = createContext();

const StoreProvider = ({children}) => {
    const [storeElements, setStoreElements] = useState([]);

    const addTask = (description) => {
        store.dispatch(taskAdded(description));
    };

    const markAsComplete = (id) => {
        store.dispatch(taskCompleted(id));
    };

    const markAsIncomplete = (id) => {
        store.dispatch(taskCompleted(id));
    };

    const removeTask = (id) => {
        store.dispatch(taskRemoved(id));
    };
    
    useEffect(() => {
        store.subscribe(() => {
            setStoreElements(store.getState());
        });
    }, []);

    const storeInfo = {
        storeElements,
        addTask,
        markAsComplete,
        markAsIncomplete,
        removeTask
    };
    
    return (
        <StoreContext.Provider value={storeInfo}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreProvider;