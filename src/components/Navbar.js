import React from 'react';
import Show from './Show';

const Navbar = () => {
    return (
        <div className="navbar justify-between px-8 bg-primary text-primary-content">
            <a href='/' className="btn btn-ghost text-base-100 normal-case text-xl">Todo List</a>
            <Show></Show>
        </div>
    );
};

export default Navbar;