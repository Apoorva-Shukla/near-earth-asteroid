import React, { useEffect } from 'react';
import Asteroids from '../components/Asteroids';

export default function Neo(props) {
    useEffect(() => {
        document.title = 'Near Earth Asteroids';
    }, []);

    const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const dateObj = new Date();
    const date = `${months[dateObj.getMonth()]} ${dateObj.getUTCDate()}`;

    return (
        <>
            <h2 className="user-select-none">Asteroids near Earth on {date}</h2>
            <div style={{marginTop:'20px',}}>
                <Asteroids />
            </div>
        </>
    )
}