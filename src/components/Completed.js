import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreProvider';
import CompletedItems from './CompletedItems';

const Completed = () => {
    const {storeElements, markAsIncomplete, removeTask} = useContext(StoreContext);

    const handleSetIncomplete = (id) => {
        markAsIncomplete(id);
    }

    const handleRemove = (id) => {
        removeTask(id);
    }

    return (
        <div className='px-8'>
            {
                storeElements.map( item => <CompletedItems
                    key={item.id}
                    handleSetIncomplete={handleSetIncomplete}
                    handleRemove={handleRemove}
                    item={item}
                ></CompletedItems>) 
            }
        </div>
    );
};

export default Completed;