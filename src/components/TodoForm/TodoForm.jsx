import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './todoForm.module.css';
import cx from 'classnames'

const TodoForm = ({addTodo, showAdd}) => {

    const [value, setValue] = useState("")

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if(!value) {
            alert("No blank todo!")
            return
        }
        if(value.length > 35){
            alert("Please Create a shorter todo text")
            return
        }

        addTodo(value)
        setValue("")
    }
    
    if (showAdd) {
        return (
            <section className={styles.add}>
                <form action="" className={styles.addForm} onSubmit={handleFormSubmit}>
                    <input type="text" className={styles.addInput} value={value} onChange={e => setValue(e.target.value)} />
                    <button className={cx(styles.addBtn,styles.mainBlackColor)}>Add</button>
                </form>
            </section>
        )
    } else {
        return null
    }
    
}

TodoForm.propTypes = {
    addTodo: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired
}

export default TodoForm