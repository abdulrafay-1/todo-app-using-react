import { createRoot } from "react-dom/client";
import TodoItem from "./TodoItem";
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

const InputForm = () => {

    return (
        <form className='input-form'>
            <input type='text' id='todo-input' placeholder='Enter text...'></input>
            <button className='submit-btn' >Submit</button>
        </form>
    )
}

export default InputForm;