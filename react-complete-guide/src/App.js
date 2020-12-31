import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {

    state = {
        persons: [
            {name: "Shreya", age: 30},
            {name: "Sharada", age: 55},
            {name: "Sharan", age: 25}
        ]
    }

    switchNameHandler = () => {
        this.setState({
                          persons: [
                              {name: "Shreya Surendra", age: 30},
                              {name: "Sharada Surendra", age: 55},
                              {name: "Sharan Surendra", age: 25}
                          ]
                      })
    }

    render() {
        return (
            <div className="App">
                <h1>Hi, I am a react app</h1>
                <button onClick={this.switchNameHandler}>Switch names</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> Hey
                    there. Nice to meet you! </Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
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
