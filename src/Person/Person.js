import React from 'react';
import './Person.css'

const person = (props) => {
    return(
        <div className="person" >
            <h4 onClick={props.click}>Hey, this is {props.name}</h4>
            <p>Trying to learn some react</p>
            <p>I am {props.age} years old</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.change} placeholder={props.name}/>
        </div>
    )
}

export default person

