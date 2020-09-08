import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const Todos = ({todos, completeTodo}) => {

    return (
        <section className="todos">
            {todos.map((todo,index) => (
                <Todo 
                    text={todo.text} 
                    key={index} 
                    completeTodo={completeTodo} 
                    index={index} 
                    isCompleted={todo.isCompleted}
                />
            ))}
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