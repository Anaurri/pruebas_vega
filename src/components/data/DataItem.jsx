
import {Fragment} from 'react';

function DataItem ({data}){
    return(
        <Fragment >
            
        <div className="container bg-warning pt-2">
        <div className="row">
            <div>
                <div className="card-sl "style={{ fontSize: '12' }}>
                    <div className="card-image" style={{  alignItems: "center"}}>
                        <img style={{ width: '100%'}}
                            src={data.picture} />
                    </div>
                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
                    <div className="card-heading">
                        {data.name}
                    </div>
                    <div className="card-heading">
                        {data.shortDescription}
                    </div>
                    <div className="card-text">
                        {data.largeDescription}
                    </div>
                    <div className="card-text">
                        {data.price}€
                    </div>
                    <a href="#" className="card-button"> Purchase</a>
                </div>
            </div>
        </div>  
        </div>  

        </Fragment>
    )

}
export default DataItem;

