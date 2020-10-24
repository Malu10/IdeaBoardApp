import React from 'react';

import Input from '../../UI/Input/Input';

import './Idea.css';

const idea = (props) => {
    console.log(props);
    return  (
        <li>
            <Input
                value = {props.items.title}
                inputChangeHandler = {(event) => props.inputChangeHandler(event, props.items.id)}
            /> 
            
        </li>
    )
}

export default idea;