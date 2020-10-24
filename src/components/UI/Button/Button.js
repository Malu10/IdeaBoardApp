import React from 'react';

const button = (props) => {
    return (
        <button
            onClick = {props.addIdeaHandler}
        >
            {props.value}
        </button>
    )
}

export default button;