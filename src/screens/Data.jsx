import { Fragment, useContext } from "react";
import DataComponent from '../components/data/DataComponent';

function Data() {
  return (
    <Fragment>
      <div className="container pt-4 pb-5 bg-transparent border-warning  rounded" >
            <DataComponent ProfileView="false" />
      </div>
    </Fragment >
  );
}

export default Data;

