import React,{Component} from 'react'
import classes from './Person.css'

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
            <div className={classes.Person}>
                <p onClick={this.props.click}>I'm a person!! I am {this.props.name} and my age
                    is {this.props.age}</p>
                < p> {this.props.children}
                </p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;


