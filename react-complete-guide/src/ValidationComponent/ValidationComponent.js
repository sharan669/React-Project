import React from 'react'

const ValidationComponent = (props) => {

    let result = (props.leng <=5 ? "Text too short": "Text long enough");

    return(
        <div>
            {result}
        </div>
    );

}

export default ValidationComponent;
