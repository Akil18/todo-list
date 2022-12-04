import React, { useContext} from 'react';
import { StoreContext } from '../contexts/StoreProvider';
import ListItem from './ListItem';


const List = () => {
    const {storeElements, markAsComplete, removeTask} = useContext(StoreContext);

    const handleComplete = (id) => {
        markAsComplete(id);
    };

    const handleRemove = (id) => {
        removeTask(id);
    }
    
    return (
        <div className='border-r-2 px-8'>
            {
                storeElements.map( item => <ListItem
                        key={item.id}
                        handleComplete={handleComplete}
                        handleRemove={handleRemove}
                        item={item}
                    ></ListItem>
                )
            }
        </div>
    );
};

export default List;