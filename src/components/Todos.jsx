import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const Todos = ({todos}) => {

    return (
        <section class="todos">
            {todos.map(todo => (
                <Todo text={todo.text}/>
            ))}
        </section>
    )
}

Todos.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string
    }))
}

export default Todos