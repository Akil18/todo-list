import React, { useContext } from 'react';
import { StoreContext } from '../contexts/StoreProvider';

const AddItem = () => {
    const {addTask} = useContext(StoreContext);

    const handleAddTask = (e) => {
        e.preventDefault();
        const form = e.target;
        const description = form.description.value;
        addTask(description);
        form.reset();
    };

    return (
        <section>
            <div className="container my-5">
                <form onSubmit={handleAddTask} className="flex justify-between py-3 px-5 shadow-md rounded-md">
                    <input
                        type="text" 
                        name='description'
                        placeholder='Add a task'
                        className="ml-5 bg-transparent outline-none border-none w-96"
                    />
                    <input type='submit' value='+' className="btn btn-primary text-white text-2xl font-bold" />
                </form>
            </div>
        </section>
    );
};

export default AddItem;