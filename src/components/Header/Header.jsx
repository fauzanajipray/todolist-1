import React from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import styles from './header.module.css'


const Header = ({showAddToggle, showAdd, clearTodo}) => (
    <section className={styles.header}>
        <Button  onClick={showAddToggle} text={showAdd ? "FInish" : "Add"} color="black"  align="left" />
        <h1 className={styles.headerTitle}>todo list</h1>
        <Button onClick={clearTodo} text="clear" color="red" align="right" />
    </section>
)

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header