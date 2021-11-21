import { Fragment } from 'react'
import BarChart from '../components/BarChart'
import VariableBarChart from '../components/VariableBarChart';


function Home() {
    return(
        <Fragment>
            <BarChart></BarChart>
            <VariableBarChart></VariableBarChart>

        </Fragment>
    )
}

export default Home