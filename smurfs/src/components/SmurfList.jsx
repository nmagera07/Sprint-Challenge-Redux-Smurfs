import React from 'react';
import Smurf from './Smurf'

const SmurfList = (props) => {
  console.log(props)
    return ( 
        <div>
          {props.smurfs.map(smurf => {
            return (
              <div>
                 <Smurf
                  key={smurf.id}
                  smurf={smurf}
              />
              </div>
            )
          })}
        </div>
     );
}
 
export default SmurfList;