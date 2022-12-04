import React, { useContext } from 'react';
import { StoreContext } from '..';

const List = () => {
    const {store, taskCompleted} = useContext(StoreContext);
    // const {tasks} = store.getState();
    const list = store.getState()

    store.dispatch(taskCompleted(4));
    console.log(store.getState());
    console.log(list);
    
    return (
        <div>
            {/* {tasks.length} */}
            
            {list.length}
        </div>
    );
};

export default List;