import React from 'react'
import Todo from '../Todo/Todo'
import PropTypes from 'prop-types'
import styles from './todos.module.css';

const Todos = ({todos, completeTodo}) => {

    return (
        <section className={styles.todos}>
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
                 <div className={styles.todoPlaceholderText}>
                     Add todo by clicking{" "}
                     <span className={styles.addButtonPlaceholderText}>Add</span>{" "}
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