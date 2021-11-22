import { Fragment } from 'react';
import airportConnections from '../vega/airportConnections.json';
import { Vega } from 'react-vega';


/*us-10m.json contiene los límites de USA. Es el mapa en sí de USA*/
import us10m from 'https://vega.github.io/vega/data/us-10m.json';
import airports from '../data/airports.csv'
import flightsAriport from '../data/flights-airport.csv'




function AirportConnections() {

 function handleHover(...args){
   console.log(args);
}

 const signalListeners = { hover: handleHover };

  return (
    <Fragment >
         <Vega spec={airportConnections}  signalListeners={signalListeners} />
    </Fragment>

  )
}

export default AirportConnections;