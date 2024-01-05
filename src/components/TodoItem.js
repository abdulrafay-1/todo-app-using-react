import 'https://kit.fontawesome.com/1700d76244.js'

const TodoItem = (props) => {

    return (
        <div className="todo">
            <div>
                <input type="checkbox" className="checkbox"></input>
                <div className="todo-text">
                    <h4>{props.title}</h4>
                    <p>4:20 AM ,01/08/2023</p>
                </div>
            </div>
            <div className='icons-container'>
                <i class="fa-solid fa-trash"></i>
                <i class="fa-solid fa-pen"></i>
            </div>
        </div>
    )
}



export default TodoItem;