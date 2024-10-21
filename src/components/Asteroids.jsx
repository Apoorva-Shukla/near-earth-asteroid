import React, { useEffect, useState } from 'react';

export default function Asteroids(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [fullLoaded, setFullLoaded] = useState(false);
    const [preservedResult, setPreservedResult] = useState(null);

    const date = new Date();
    const APIURL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}&end_date=${date.getFullYear()}-${date.getMonth()+1}-${date.getUTCDate()}&api_key=IU3twfK408KpQRQJcSqRZiRUjhePdIX8PZNfM5dK`;
    const LIMIT = 5;

    useEffect(() => {
        if (preservedResult === null) {
            fetch(APIURL)
                .then(res => res.json())
                .then(
                (result) => {
                    if (result.near_earth_objects !== undefined) {
                        let new_results = result.near_earth_objects[`${date.getFullYear()}-${'0' + (date.getMonth()+1).toString()}-${date.getUTCDate()}`];
                        if (items.length !== new_results.length) {
                            setItems(items.concat(new_results.slice(items.length, items.length + LIMIT)));
                        } else {
                            setFullLoaded(true);
                        }
                        setPreservedResult(result);
                        setIsLoaded(true);
                    } else {
                        setError(result.error);
                        setIsLoaded(true);
                    }
                },(error) => {
                    setError(error);
                    setIsLoaded(true);
                }
            )
        } else {
            let new_results = preservedResult.near_earth_objects[`${date.getFullYear()}-${'0' + (date.getMonth()+1).toString()}-${date.getUTCDate()}`];
            if (items.length !== new_results.length) {
                setItems(items.concat(new_results.slice(items.length, items.length + LIMIT)));
            } else {
                setFullLoaded(true);
            }
            setIsLoaded(true);
        }
    }, [isLoaded])

    function renderAsteroids(spinner=false) {
        return <>
            {items.map((elem, index) => (
                <div key={index} className="asteroid_box">
                    <h5 className="mb-2"><span className="user-select-none text-success fw-bold">Name </span>{elem['name']}</h5>
                    <h5 className="mb-2"><span className="user-select-none text-success fw-bold">Close approach to earth </span>{elem['close_approach_data'][0].close_approach_date_full.split(' ')[1]}</h5>
                    <h5 className="mb-2"><span className="user-select-none text-success fw-bold">Miss distance </span>{elem['close_approach_data'][0].miss_distance.kilometers} KM</h5>
                    <h5 className="mb-2"><span className="user-select-none text-success fw-bold">Orbiting body </span>{elem['close_approach_data'][0].orbiting_body}</h5>
                    <div className="mb-2">
                        <h5 className="user-select-none text-success fw-bold mb-0">Relative velocity</h5>
                        <div>
                            <span className="d-block">{elem['close_approach_data'][0].relative_velocity.kilometers_per_hour} KM/HOUR</span>
                            <span className="d-block"></span>
                        </div>
                        <div>
                            <span className="d-block">{elem['close_approach_data'][0].relative_velocity.kilometers_per_second} KM/SECOND</span>
                            <span className="d-block"></span>
                        </div>
                        <div>
                            <span className="d-block">{elem['close_approach_data'][0].relative_velocity.miles_per_hour} MILES/HOUR</span>
                            <span className="d-block"></span>
                        </div>
                    </div>
                    <h5 className="mb-2"><span className="user-select-none text-success fw-bold">Is potential threat </span>{elem['is_potentially_hazardous_asteroid'] === true ? 'Yes' : 'No'}</h5>
                    <h5 className="mb-2"><span className="user-select-none text-success fw-bold">Estimated diameter (max.) </span>{elem.estimated_diameter.kilometers.estimated_diameter_max} KM</h5>
                    <h5 className="mb-0"><span className="user-select-none text-success fw-bold">Estimated diameter (min.) </span>{elem.estimated_diameter.kilometers.estimated_diameter_min} KM</h5>
                </div>
            ))}
            {spinner === true && <div className="text-center"><div className="spinner-border my-auto" role="status" aria-hidden="true"></div></div>}
        </>;
    }

    useEffect(() => {
        function handleScroll() {
            let scrollPosition = window.pageYOffset;
            let windowSize     = window.innerHeight;
            let bodyHeight     = document.body.offsetHeight;

            if (Math.max(bodyHeight - (scrollPosition + windowSize), 0) < 300) {
                if (!fullLoaded) {
                    setIsLoaded(false)
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    if (error) {
        return <span>Error: {error.message}</span>;
    } else if (!isLoaded && !fullLoaded) {
        return renderAsteroids(true);
    } else if (items !== undefined) {
        return renderAsteroids();
    } else {
        return <></>;
    }
}
