import React from 'react';
import {
    Link,
} from "react-router-dom";

export default function Header(props) {
    return (
        <>
            <header id="header">
                <nav id="header__left">
                    <Link to="/" className="header_element neo">Near Earth Asteroids</Link>
                    <Link to="/satellite-visualization" className="header_element sv">Satellite Visualization</Link>
                </nav>
                <nav id="header__right">
                    <form action="search" method="GET" className="d-block w-100">
                        <input type="search" placeholder="Search" name="query" className="searchInp" />
                    </form>
                </nav>
            </header>
        </>
    )
}