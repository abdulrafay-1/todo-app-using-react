import TodoItem from './TodoItem'
import InputForm from './InputForm'
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';



const TodoContainer = () => {
    useEffect(() => {
        document.querySelector(".input-form").addEventListener("submit", (e) => e.preventDefault());
        let todoInput = document.getElementById("todo-input");
        let submitBtn = document.querySelector(".submit-btn");
        var todoCon = ReactDOM.createRoot(document.getElementById('todo-con'));
      
        function addTodo() {
          todoCon.render(<TodoItem title={todoInput.value} />);
        }
      
        submitBtn.addEventListener("click", addTodo);
      
        // Clean up event listener on component unmount
        return () => {
          submitBtn.removeEventListener("click", addTodo);
        };
      }, []);

    return (
        <>
            <div className="todo-container">
                {/* <div>
                    <button className="add-task">Add Task</button>
                    <select>
                        <option>All</option>
                    </select>
                </div> */}
                <InputForm />
                <div className="todo-list-con" id='todo-con'>

                    <TodoItem title="Create a react Project" />
                    <TodoItem title="First React Project" />
                    <TodoItem title="Hello Woo" />
                </div>
            </div>
        </>
    )
}

export default TodoContainer;