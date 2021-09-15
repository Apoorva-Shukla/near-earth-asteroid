import React from 'react';
import {
    Link,
} from "react-router-dom";

const index = require('../docs.json');

export default function SatelliteDoc(props) {
    const next = index[props.index]['next'];
    const prev = index[props.index]['prev'];
    const nextRoute = index[props.index]['nextRoute'];
    const prevRoute = index[props.index]['prevRoute'];

    return (
        <>
            <div>
                <h4 className="text-decoration-underline">Near Earth Asteroids</h4>
                
            </div>
            <div className="d-flex mt-5">
                {prev !== null ?
                    <Link to={prevRoute} className="border py-2 btn btn-success" style={{borderRadius:'5px',flex:1,marginRight: '10px',}}>Previous - {prev}</Link>
                    :
                    <button className="border py-2 btn btn-success" style={{borderRadius:'5px',flex:1,marginRight: '10px',}} disabled>Previous</button>
                }
                {next !== null ?
                    <Link to={nextRoute} className="border py-2 btn btn-success" style={{borderRadius:'5px',flex:1,marginLeft: '10px',}}>Next - {next}</Link>
                    :
                    <button className="border py-2 btn btn-success" style={{borderRadius:'5px',flex:1,marginLeft: '10px',}} disabled>Next</button>
                }
            </div>
        </>
    )
}