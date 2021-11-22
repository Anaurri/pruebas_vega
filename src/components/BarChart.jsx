import { Fragment } from 'react';
import barChart from '../vega/barChart.json';
import { Vega } from 'react-vega';




function BarChart() {

 function handleHover(...args){
   console.log(args);
}

 const signalListeners = { hover: handleHover };

  return (
    <Fragment >
         <Vega spec={barChart}  signalListeners={signalListeners} />
    </Fragment>

  )
}

export default BarChart;