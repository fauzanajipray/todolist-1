import React from 'react'
import PropTypes from 'prop-types'
import styles from './button.module.css'
import cx from 'classnames'

const Button = ({ text, onClick, color, align }) =>{

    // const classNames = [
    //     'header-btn',
    //     color === "black" ? "main-black-color" : "main-red-color",
    //     align === "left" ? "align-left" : "align-right"
    // ].join(" ")
    const classNames = cx(styles.headerBtn, {
        [styles.mainBlackColor]: color === 'black',
        [styles.mainRedColor]: color === 'red',
        [styles.alignLeft]: align === 'left',
        [styles.alignRight]: align === 'right'
    })
    
    Button.defaultProps = {
        text: "Button",
        color: "black",
        align: "left"
    }

    return (
        <button onClick={onClick} className={classNames} >
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black","red"]),
    align: PropTypes.oneOf(["left","right"])
}

export default Button;