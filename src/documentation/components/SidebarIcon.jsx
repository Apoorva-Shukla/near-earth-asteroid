import React from 'react';
import {
    Link,
} from "react-router-dom";

export default function SidebarIcon(props) {
    return (
        <>
            {props.highlight === true ?
            <Link className="d-flex text-decoration-none text-dark sidebar__link sidebar__link_highlight" to={props.route}>
                <div style={{width:'50px',}}>{props.icon}</div>
                <div><span style={{flex:1,width:'100%',display:'block',textOverflow:'ellipsis',}}>{props.label}</span></div>
            </Link>
            :
            <Link className="d-flex text-decoration-none text-dark sidebar__link" to={props.route}>
                <div style={{width:'50px',}}>{props.icon}</div>
                <div><span style={{flex:1,width:'100%',display:'block',textOverflow:'ellipsis',}}>{props.label}</span></div>
            </Link>
            }
        </>
    )
}