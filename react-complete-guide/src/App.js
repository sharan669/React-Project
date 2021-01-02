import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'
import styled from 'styled-components'
import UserOutput from "./UserOutput/UserOutput";
import UserInput from "./UserInput/UserInput";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponent from "./CharComponent/CharComponent";

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'blue'};
            color: white;
            font: inherit;
            border: 1px solid blue;
            padding: 8px;
            cursor: pointer;
            
            &:hover {
                background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
                color: black;
            }   

`;

class App extends Component {

    state = {
        persons: [
            {id: 'adsad', name: "Shreya", age: 30},
            {id: 'fdgdfg', name: "Sharada", age: 55},
            {id: 'lslda', name: "Sharan", age: 25}
        ],
        username: 'Sharan',
        showPersons: false,
        leng: 0,
        inputForLength: ''
    }

    switchNameHandler = (newName) => {
        this.setState({
                          persons: [
                              {name: newName, age: 30},
                              {name: "Sharada Surendra", age: 55},
                              {name: "Sharan Surendra", age: 25}
                          ]
                      })
    }

    nameChangedHandler = (event, id) => {

        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        })

        const person = {...this.state.persons[personIndex]};

        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person

        this.setState({
                          persons: persons
                      })
    }

    userNameChangeHandler = (event) => {
        this.setState({
                          username: event.target.value
                      })
    }

    togglePersonHandler = () => {
        this.setState({
                          showPersons: !this.state.showPersons
                      })
    }

    deletePersonsHandler = (personIndex) => {
        const currPersons = this.state.persons;
        currPersons.splice(personIndex, 1);
        this.setState({persons: currPersons});
    }

    inputForLength = (event) => {
        this.setState({
                          leng: event.target.value.length,
                          inputForLength: event.target.value
                      })
    }

    removeLetterForInputLength = (index) => {
        const chars = this.state.inputForLength.split("");
        chars.splice(index, 1)

        this.setState({
                          inputForLength: chars.join('')
                      })
    }

    render() {

        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            ':hover': {
                backgroundColor: 'lightgreen',
                color: 'black'
            }
        }

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            name={person.name}
                            age={person.age}
                            click={() => this.deletePersonsHandler(index)}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}
                        />
                    })}
                    {/*<Person*/}
                    {/*    name={this.state.persons[0].name}*/}
                    {/*    age={this.state.persons[0].age}*/}
                    {/*    click={this.switchNameHandler.bind(this,*/}
                    {/*                                       'Sharan Surendra from paragraph click!')}*/}
                    {/*/>*/}
                    {/*<Person*/}
                    {/*    name={this.state.persons[1].name}*/}
                    {/*    age={this.state.persons[1].age}*/}
                    {/*    changed={this.nameChangedHandler}*/}
                    {/*> Hey there. Nice to meet you! </Person>*/}
                    {/*<Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>*/}
                </div>
            );
            style.backgroundColor = 'red'
            style[":hover"] = {
                backgroundColor: 'salmon',
                color: 'black'
            }
        }

        const classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (
            <div className="App">
                <h1>Hi, I am a react app</h1>
                <p className={classes.join(' ')}>This is actually working</p>
                <StyledButton alt={this.state.showPersons} onClick={this.togglePersonHandler}>Switch namess</StyledButton>
                {persons}
                {/*<UserInput changeUserName={this.userNameChangeHandler}/>*/}
                {/*<UserOutput name={this.state.username}/>*/}
                <input type="text" onChange={(event) => this.inputForLength(event)}
                       value={this.state.inputForLength}/>
                {this.state.leng}
                <ValidationComponent leng={this.state.leng}/>
                {this.state.inputForLength.split("").map((letter, index) => {
                                                             return <CharComponent
                                                                 letter={letter}
                                                                 clicked={() => this.removeLetterForInputLength(index)}
                                                                 key={index}
                                                             />
                                                         }
                )}
                <CharComponent/>
            </div>
        );
    }
}

export default App;

//using React hooks
// const app = props => {
//     const [personsState, setPersonsState] = useState({
//                                                          persons: [
//                                                              {name: "Shreya", age: 30},
//                                                              {name: "Sharada", age: 55},
//                                                              {name: "Sharan", age: 25}
//                                                          ],
//                                                          otherState: 'SomeValue'
//                                                      });
//
//     const [otherState, setOtherState] = useState('Some other value');
//
//
//     console.log(personsState,otherState)
//
//     const switchNameHandler = () => {
//         setPersonsState({
//                             persons: [
//                                 {name: "Shreya Surendra", age: 30},
//                                 {name: "Sharada Surendra", age: 55},
//                                 {name: "Sharan Surendra", age: 25}
//                             ]
//                         })
//     }
//
//     return (
//         <div className="App">
//             <h1>Hi, I am a react app</h1>
//             <button onClick={switchNameHandler}>Switch names</button>
//             <Person
//                 name={personsState.persons[0].name}
//                 age={personsState.persons[0].age}
//                 click = {}
//             />
//             <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> Hey
//                 there. Nice to meet you! </Person>
//             <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
//         </div>
//
//     );
//
// }
