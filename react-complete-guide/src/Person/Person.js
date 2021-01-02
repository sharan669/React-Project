import React from 'react'
//import './Person.css'
import styled from 'styled-components'

const person = (props) => {

    // const style = {
    //     '@media (min-width: 500px)': {
    //         width: '450px'
    //     }
    // }

    const StyledDiv =
        styled.div`width: 50%;
    margin: auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;
    
      '@media (min-width: 500px)': {
            width: '450px'
        }
    `;

    return (
        <StyledDiv>
        <p onClick={props.click}>I'm a person!! I am {props.name} and my age is {props.age}</p>
        < p> {props.children}
        </p>
        <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
)
}

export default person;


