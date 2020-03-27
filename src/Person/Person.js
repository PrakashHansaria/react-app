import React from 'react';

const person = (props) => {
    return(
        <div>
            <h4>Hey, this is {props.name}</h4>
            <p>Trying to learn some react</p>
            <p>I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person

