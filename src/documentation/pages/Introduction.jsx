import React from 'react';
import {
    Link,
} from "react-router-dom";

const index = require('../docs.json');

export default function Introduction(props) {
    const next = index[props.index]['next'];
    const prev = index[props.index]['prev'];
    const nextRoute = index[props.index]['nextRoute'];
    const prevRoute = index[props.index]['prevRoute'];

    return (
        <>
            <div>
                <h4 className="text-decoration-underline">ATL SPACE CHALLENGE PROJECT UNDER <a href="http://aimapp2.aim.gov.in/atlspace/" rel="noreferrer" target="_blank">EXPLORATION</a> CRITERION</h4>
                <small className="d-block mt-4 mb-4">
                    This is the documentation of this website with all the resources present as links. Click on the links to go to its wikipedia page whenever necessary to you.
                    There is also an index with the list of all the documentation pages.
                </small>
                <div>
                    <span>There are two pages in this website</span>
                    <ul>
                        <li><Link to="/">Satellites Visualization</Link></li>
                        <li><Link to="/near-earth-asteroids">Near Earth Asteroids</Link></li>
                    </ul>
                </div>
                <div className="mt-4">
                    <span>The website uses NASA's APIs to gather data. </span>
                    <a href="https://en.wikipedia.org/wiki/API" target="_blank" rel="noreferrer">Learn about APIs here</a>
                </div>
                <div className="mt-4">
                    <span>
                        This is a static website with no server side, instead, it uses a
                        <a href="https://en.wikipedia.org/wiki/User_interface" target="_blank" rel="noreferrer"> UI (User Interface)</a> library called
                        <a href="https://en.wikipedia.org/wiki/React_(JavaScript_library)" target="_blank" rel="noreferrer"> React.js</a>
                    </span>
                </div>
                <div className="mt-4">
                    <h4>Contributors</h4>
                    <div>
                        Apoorva Kumar Shukla
                        <ul>
                            <li><a href="https://github.com/Apoorva-Shukla" target="_blank" rel="noreferrer"> Github Profile</a></li>
                            <li>Email<a href="mailto:apoorva210907@gmail.com" target="_blank" rel="noreferrer"> apoorva210907@gmail.com</a></li>
                        </ul>
                    </div>
                </div>
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