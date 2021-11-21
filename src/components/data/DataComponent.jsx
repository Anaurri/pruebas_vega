import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import DataItem from './DataItem';
import data from '../../data/data.json'

function DataComponent(){




    return (
    <Fragment >
    <div className="row row-cols-5">
              {data.map(data => (
                  <div key={data.id} className="col mb-4 bg-white border-warning" >
                  <DataItem data={data}></DataItem></div>
              ))}
    </div>
    </Fragment>

  )
}

export default DataComponent;



