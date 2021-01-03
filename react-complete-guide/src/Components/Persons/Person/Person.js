import React from 'react'
import classes from './Person.css'

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    // const rnd = Math.random();
    //
    // if(rnd>0.7){
    //     throw new Error('Something went wrong');
    // }

    return (
        <div className={classes.Person}>
        <p onClick={props.click}>I'm a person!! I am {props.name} and my age is {props.age}</p>
        < p> {props.children}
        </p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </div>
)
}

export default person;


