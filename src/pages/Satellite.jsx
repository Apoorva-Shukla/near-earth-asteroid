import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getLatLngObj } from "tle.js";
import L from "leaflet";

const icon = L.icon({
    iconUrl:
        process.env.PUBLIC_URL + '/logo192.png',
    iconRetinaUrl:
        process.env.PUBLIC_URL + '/logo192.png',
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 35],
});

export default function Satellite(props) {
    useEffect(() => {
        document.title = 'Satellite Visualization';
    }, []);

    const [error, setError] = useState(null);
    const [preservedResult, setPreservedResult] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [apiURL, setApiURL] = useState("https://tle.ivanstanojevic.me/api/tle/");

    function loadMoreSatellite() {
        setLoaded(false);
    }

    useEffect(() => {
        if (preservedResult === null || loaded === false) {
            fetch(apiURL)
                .then((res) => res.json())
                .then(
                    (result) => {
                        if (preservedResult === null) {
                            setPreservedResult(result.member);
                        } else {
                            setPreservedResult(preservedResult.concat(result.member));
                        }
                        setApiURL(result.view.next);
                        setLoaded(true);
                    },
                    (error) => {
                        setError(error);
                    }
                );
        }
    }, [loaded]);

    if (error) {
        return <span>Error: {error.message}</span>;
    } else if (preservedResult === null) {
        return <>
            <div className="text-center"><div className="spinner-border my-auto" role="status" aria-hidden="true"></div></div>
        </>;
    } else if (preservedResult !== null) {
        return (
            <>
                <button
                    className="my-btn"
                    onClick={loadMoreSatellite}
                >
                    Load more satellite data
                </button>
                <small style={{fontSize:'0.83em',}} className="user-select-none mx-2"><i className="fw-bold">Pro tip</i> Click on a satellite to know about it</small>
                <MapContainer
                    center={[0, 0]}
                    zoom={2}
                    scrollWheelZoom={true}
                    worldCopyJump={true}
                    className="mb-3 mt-3"
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {preservedResult.map((elem, index) => (
                        <div key={index}>
                            <Marker
                                position={[
                                    getLatLngObj(
                                        elem.line1 +
                                            "\n" +
                                            preservedResult[0].line2
                                    ).lat,
                                    getLatLngObj(
                                        preservedResult[0].line1 +
                                            "\n" +
                                            elem.line2
                                    ).lng,
                                ]}
                                icon={icon}
                            >
                                <Popup>
                                    <span className="d-block">
                                        <span className="text-primary">
                                            Name{" "}
                                        </span>
                                        <span>{elem.name}</span>
                                    </span>
                                    <span className="d-block">
                                        <span className="text-primary">
                                            Satellite ID{" "}
                                        </span>
                                        <span>{elem.satelliteId}</span>
                                    </span>
                                    <span className="d-block">
                                        <span className="text-primary">
                                            Latitude{" "}
                                        </span>
                                        <span>
                                            {
                                                getLatLngObj(
                                                    elem.line1 +
                                                        "\n" +
                                                        elem.line2
                                                ).lat
                                            }
                                        </span>
                                    </span>
                                    <span className="d-block">
                                        <span className="text-primary">
                                            Longitude{" "}
                                        </span>
                                        <span>
                                            {
                                                getLatLngObj(
                                                    elem.line1 +
                                                        "\n" +
                                                        elem.line2
                                                ).lng
                                            }
                                        </span>
                                    </span>
                                </Popup>
                            </Marker>
                        </div>
                    ))}
                </MapContainer>
            </>
        );
    } else {
        return <></>;
    }
}
