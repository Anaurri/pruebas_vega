import { Fragment } from 'react';
import mapOfUSA from '../vega/airportConnections/mapOfUSA.json';
import { Vega } from 'react-vega';


import airports from '../data/airports.csv'
import flightsAriport from '../data/flights-airport.csv'




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