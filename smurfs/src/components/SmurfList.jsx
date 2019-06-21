import React from 'react';

const Smurf = (props) => {
    return ( 
        <div>
          {props.smurfs.map(smurf => {
            return (
              <div>
                <Smurf key={smurf.id} smurf={smurf} />
              </div>
            )
          })}
        </div>
     );
}
 
export default Smurf;