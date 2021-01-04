import React,{Component} from 'react';

import Person from './Person/Person'
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";

class Persons extends Component {

    static getDerivedStateFromProps(props,state){
        console.log('[Persons.js] getDerivedStateFromProps')
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js] shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message:'Snapshot!'}
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('[Persons.js] componentDidUpdate')
        console.log(snapshot)
    }

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
