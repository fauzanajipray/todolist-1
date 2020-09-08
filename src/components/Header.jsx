import React from 'react'
import PropTypes from 'prop-types'

const Header = ({showAddToggle, showAdd, clearTodo}) => (
    <section className="header">
        <button className="header-btn main-black-color" onClick={showAddToggle}>
            {showAdd ? "Finish" : "Add"}
        </button>
        <h1 className="header-title">todo list</h1>
        <button className="header-btn main-red-color" onClick={clearTodo} >Clear</button> 
    </section>
)

Header.propTypes = {
    showAddToggle: PropTypes.func.isRequired,
    showAdd: PropTypes.bool.isRequired,
    clearTodo: PropTypes.func.isRequired
}

export default Header