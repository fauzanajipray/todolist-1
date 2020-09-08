import React from 'react'
import Todo from './Todo'
import PropTypes from 'prop-types'

const Todos = ({todos}) => {

    return (
        <section className="todos">
            {todos.map((todo,index) => (
                <Todo text={todo.text} key={index}/>
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