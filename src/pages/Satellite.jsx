import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { getLatLngObj } from "tle.js";
import L from "leaflet";

const icon = L.icon({
    iconUrl: process.env.PUBLIC_URL + "/logo192.png",
    iconRetinaUrl: process.env.PUBLIC_URL + "/logo192.png",
    iconAnchor: [5, 55],
    popupAnchor: [10, -44],
    iconSize: [35, 35],
});

export default function Satellite(props) {
    useEffect(() => {
        document.title = "Satellite Visualization";
    }, []);

    const [error, setError] = useState(null);
    const [preservedResult, setPreservedResult] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [apiURL, setApiURL] = useState(
        "https://tle.ivanstanojevic.me/api/tle/"
    );

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
                            setPreservedResult(
                                preservedResult.concat(result.member)
                            );
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
        return (
            <div className="container mt-3">
                <span>Error: {error.message}</span>
            </div>
        );
    } else if (preservedResult === null) {
        return (
            <>
                <div className="text-center">
                    <div
                        className="spinner-border my-auto"
                        role="status"
                        aria-hidden="true"
                    ></div>
                </div>
            </>
        );
    } else if (preservedResult !== null) {
        return (
            <>
                <div className="container mt-3">
                    <button className="my-btn" onClick={loadMoreSatellite}>
                        Load more satellite data
                    </button>
                    <small
                        style={{ fontSize: "0.83em" }}
                        className="user-select-none mx-2"
                    >
                        <i className="fw-bold">Pro tip</i> Click on a satellite
                        to know about it
                    </small>
                </div>
                <MapContainer
                    center={[0, 0]}
                    zoom={3}
                    minZoom={3}
                    doubleClickZoom={false}
                    scrollWheelZoom={true}
                    worldCopyJump={true}
                    className="mt-3"
                    maxBoundsViscosity={10.0}
                    maxBounds={[L.latLng(-180, -180), L.latLng(180, 180)]}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://api.mapbox.com/styles/v1/apoorva2107/cktmh18m1116m1arv4nyd92nj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYXBvb3J2YTIxMDciLCJhIjoiY2t0bWg2aWY3MGJ4eTJuczhkM3RhNG9iMSJ9.BkZZ4x_Xy5ZBMb3a46uvHw"
                    />
                    {preservedResult.map((elem, index) => (
                        <Marker
                            position={[
                                getLatLngObj(
                                    elem.line1 + "\n" + preservedResult[0].line2
                                ).lat,
                                getLatLngObj(
                                    preservedResult[0].line1 + "\n" + elem.line2
                                ).lng,
                            ]}
                            icon={icon}
                            key={index}
                        >
                            <Popup>
                                <span className="d-block">
                                    <span className="text-primary">Name </span>
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
                                                elem.line1 + "\n" + elem.line2
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
                                                elem.line1 + "\n" + elem.line2
                                            ).lng
                                        }
                                    </span>
                                </span>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </>
        );
    } else {
        return <></>;
    }
}
