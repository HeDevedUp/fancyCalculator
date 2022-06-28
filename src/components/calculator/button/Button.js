import React from 'react'
import './Button.css'

function Button({ className, value, OnClick }) {
    return (
        <button className={className} onClick={OnClick}>
            {value}
        </button>
    )
}

export default Button