import { Fragment } from 'react'
import BarChart from '../components/BarChart'
import VariableBarChart from '../components/VariableBarChart';
import AirportConnections from '../components/AirportConnections';

function Home() {
    return(
        <Fragment>
            <BarChart></BarChart>
            <VariableBarChart></VariableBarChart>
            <AirportConnections></AirportConnections>
        </Fragment>
    )
}

export default Home;