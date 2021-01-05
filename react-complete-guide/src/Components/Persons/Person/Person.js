import React,{Component} from 'react'
import classes from './Person.css'
import Auxillary from '../../../hoc/Auxillary'

class Person extends Component {

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

    render() {
        console.log('[Person.js] render', this.props);
        return (
            <React.Fragment>
                <p key="i1" onClick={this.props.click}>I'm a person!! I am {this.props.name} and my age
                    is {this.props.age}</p>,
                <p key="i2"> {this.props.children}
                </p>,
                <input key="i3" type="text" onChange={this.props.changed} value={this.props.name}/>
            </React.Fragment>
        )
    }
}

export default Person;


