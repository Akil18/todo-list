import React, { useContext, useEffect, useState } from 'react';
import { StoreContext } from '../contexts/StoreProvider';

const Show = () => {
    const {storeElements} = useContext(StoreContext);
    const [completed, setCompleted] = useState(0);

    useEffect(() => {
        const completedTasks = storeElements.filter(item => item.completed === true);
        setCompleted(completedTasks.length);
    }, [storeElements]);

    return (
        <div>
            <span className='pr-8'>Tasks: {storeElements.length}</span>
            <span>Completed Tasks: {completed}</span>
        </div>
    );
};

export default Show;