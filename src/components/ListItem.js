import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';

const ListItem = ({item, handleComplete, handleRemove}) => {
    return (
        <>
            {
                !item.completed &&
                <div className="flex justify-between py-3 px-5 mt-3 shadow  rounded-md">
                    <div className="flex items-center">
                        <input onClick={() => handleComplete(item.id)} type="checkbox"  className="checkbox checkbox-info checkbox-sm" />
                        <h3 className="ml-5">{item.description}</h3>
                    </div>
                    <AiOutlineDelete onClick={() => handleRemove(item.id)} className="text-3xl cursor-pointer text-red-500" />
                </div>
            }
        </>
    );
};

export default ListItem;