import React,{Component} from 'react';

import Person from './Person/Person'
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Persons extends Component {

    render() {
        console.log('[Persons.js] render', this.props);
        return  this.props.persons.map((person, index) => {

            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                key={person.id}
            />
        })

    } 

    };

export default Persons
