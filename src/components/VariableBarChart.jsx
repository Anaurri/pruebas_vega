import { Fragment } from 'react';
import variableBarChart from '../data/variableBarChart.json';
import { Vega } from 'react-vega';




function VariableBarChart() {


  //El nombre de la clave 'x' e 'y' se define en el json en scales, marks, 
  const barData = {
    table: [
      { x: 'A', y: 28 },
      { x: 'B', y: 55 },
      { x: 'C', y: 43 },
      { x: 'D', y: 91 },
      { x: 'E', y: 81 },
      { x: 'F', y: 53 },
      { x: 'G', y: 19 },
      { x: 'H', y: 87 }
    ],
  };

  return (
    <Fragment >
      <Vega spec={variableBarChart} data={barData} />
    </Fragment>

  )
}

export default VariableBarChart;