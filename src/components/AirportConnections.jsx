import { Fragment } from 'react';
import mapOfUSA from '../vega/airportConnections/mapOfUSA.json';
import { Vega } from 'react-vega';

function AirportConnections() {

 function handleHover(...args){
   console.log(args);
}

 const signalListeners = { hover: handleHover };

  return (
    <Fragment >
         <Vega spec={mapOfUSA}  signalListeners={signalListeners} />
    </Fragment>

  )
}

export default AirportConnections;