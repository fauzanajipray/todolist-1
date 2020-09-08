import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button/Button'

const Header = ({showAddToggle, showAdd, clearTodo}) => (
    <section className="header">
        <Button  onClick={showAddToggle} text={showAdd ? "FInish" : "Add"} color="black"  align="left" />
        <h1 className="header-title">todo list</h1>
        <Button onClick={clearTodo} text="clear" color="red" align="right" />
    </section>
)

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header