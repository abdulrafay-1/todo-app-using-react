import { useState } from "react";

const TodoItem = () => {

    var [todoItemArr, todoSetter] = useState([])
    const [inputValue, setInputValue] = useState('')
    const addTodo = (e) => {
        e.preventDefault()
        var todoId = todoItemArr.length ? todoItemArr[todoItemArr.length - 1].todoId + 1 : 51;
        let createdAt = Date.now()
        if (!inputValue.trim()) {
            alert("Please Enter a todo")
        } else {
            setInputValue('')
            const todoItem = {
                todoId,
                inputValue,
                createdAt
            }
            todoSetter([...todoItemArr, todoItem])
        }

    }

    const deleteTodo = (id) => {
        const updatedTodoItemArr = todoItemArr.filter((todo) => todo.todoId !== id);
        todoSetter(updatedTodoItemArr);
    }
    const updateTodo = (id) => {
        const findTodo = todoItemArr.find((todo) => todo.todoId === id);
        const editPrompt = prompt("Edit Todo", findTodo.inputValue)
        if (!editPrompt || !editPrompt.trim()) {
            alert("Enter valid todo")
        } else {
            findTodo.inputValue = editPrompt
            todoSetter([...todoItemArr])
        }
    }

    return (
        <>
            <form className='input-form'>
                <input type='text' id='todo-input' placeholder='Enter text...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button className='submit-btn' onClick={addTodo}>Submit</button>
            </form>
            {
                todoItemArr.map((todo) => {
                    return (
                        <div className="todo">
                            <div>
                                <div className="todo-text">
                                    <h4 className="title">{todo.inputValue}</h4>
                                    <p>{new Date(todo.createdAt).toLocaleString()}</p>
                                </div>
                            </div>
                            <div className='icons-container'>
                                <i className="fa-solid fa-trash" onClick={() => deleteTodo(todo.todoId)}></i>
                                <i className="fa-solid fa-pen" onClick={() => updateTodo(todo.todoId)}></i>
                            </div>
                        </div>

                    )
                })
            }
        </>
    )
}



export default TodoItem;