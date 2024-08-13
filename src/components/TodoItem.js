import { useEffect, useState } from "react";

const TodoItem = (props) => {
    const [todoItemArr, todoSetter] = useState([])
    const [inputValue, setInputValue] = useState('')
    useEffect(() => {
        const todoItemsFromLocal = JSON.parse(localStorage.getItem("todoItems")) || [];
        console.log(todoItemsFromLocal);
        if (todoItemsFromLocal.length) {
            todoSetter([...todoItemsFromLocal]);
        }
    }, [])

    const addTodo = (e) => {
        e.preventDefault()
        var todoId = todoItemArr.length > 0 ? (todoItemArr[0].todoId + 1) : 51;
        let createdAt = new Date().toLocaleString();
        if (!inputValue.trim()) {
            alert("Please Enter a todo")
        } else {
            const todoItem = {
                todoId,
                inputValue,
                createdAt
            }
            todoSetter([todoItem, ...todoItemArr])
            localStorage.setItem("todoItems", JSON.stringify(todoItemArr))
            setInputValue('')
        }
    }
    const toggleDarkMode = () => {
            if (props.dark === true) {
                return ' dark-mode'
            }
            return "";
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

    useEffect(() => {
        localStorage.setItem("todoItems", JSON.stringify(todoItemArr));
    }, [todoItemArr]);

    return (
        <>
            <form className='input-form'>
                <input type='text' id='todo-input' className={`${toggleDarkMode()}`} placeholder='Enter text...' value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
                <button className='submit-btn' type="submit" onClick={addTodo}>Submit</button>
            </form>
            {
                todoItemArr.map((todo) => {
                    return (
                        <div className={`todo ${toggleDarkMode()}`} key={todo.todoId}>
                            <div>
                                <div className="todo-text">
                                    <h4 className="title">{todo.inputValue}</h4>
                                    <p>{todo.createdAt}</p>
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