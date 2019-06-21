import React from 'react';

const Smurf = (props) => {
    return ( 
        <div>
            <h2>{props.smurf.name}</h2>
            <h2>{props.smurf.age}</h2>
            <h2>{props.smurf.height}</h2>
        </div>
     );
}
 
export default Smurf;