import TodoItem from './TodoItem'
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';



const TodoContainer = () => {

    return (
        <>
            <div className="todo-container">
                <div className="todo-list-con" id='todo-con'>
                    < TodoItem />
                </div>
            </div>
        </>
    )
}

export default TodoContainer;