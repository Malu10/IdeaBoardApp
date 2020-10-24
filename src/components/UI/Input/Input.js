import React from 'react';

import './Input.css';

const input = (props) => {
    return (
        <input
            type = "text"
            value = {props.value}
            onChange = {props.inputChangeHandler}
            className = "textField"
        />
    )
}

export default input;