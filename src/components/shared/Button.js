import React from 'react'

const Button = props => {
    return (
        <button className="ui button">
            {props.text}
        </button>
    );
}

export default Button;