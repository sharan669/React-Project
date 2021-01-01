import React from 'react'

const UserInput = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changeUserName}/>
        </div>
    );

}

export default UserInput
