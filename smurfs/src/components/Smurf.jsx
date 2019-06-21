import React from 'react';

const Smurf = (props) => {
    console.log("props", props)
    const {smurf} = props
    return ( 
        <div>
            <h2>{smurf.name}</h2>
            <h2>{smurf.age}</h2>
            <h2>{smurf.height}</h2>
        </div>
     );
}
 
export default Smurf;