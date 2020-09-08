import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const Todos = ({todos, completeTodo}) => {

    return (
        <section className="todos">
            {todos.length > 0 && (
                todos.map((todo,index) => (
                    <Todo 
                        text={todo.text} 
                        key={index} 
                        completeTodo={completeTodo} 
                        index={index} 
                        isCompleted={todo.isCompleted}
                    />
                ))
             ) }
             {todos.length === 0 && (
                 <div className="todo-placeholder-text">
                     Add todo by clicking{" "}
                     <span className="add-button-placeholder-text">Add</span>{" "}
                     button on the middle top left corner
                 </div>
             )}
        </section>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
    })),
    completeTodo: PropTypes.func.isRequired
}

export default Todos