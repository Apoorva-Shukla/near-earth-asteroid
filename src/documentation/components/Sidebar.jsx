import React from 'react';
import SidebarIcon from './SidebarIcon';
import MapIcon from '@material-ui/icons/Map';
import SatelliteIcon from '@material-ui/icons/Satellite';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

export default function Sidebar(props) {
    return (
        <>
            <aside id="aside">
                <div id="aside__fluid" className="border px-2 py-2" style={{borderRadius:'7px',}}>
                    <span className="sidebar__link mb-2 d-block bg-white">Index</span>
                    {props.index === 1 ?
                        <SidebarIcon label={'Introduction'} route={'/introduction'} icon={<InfoOutlinedIcon />} highlight={true} />
                        :
                        <SidebarIcon label={'Introduction'} route={'/introduction'} icon={<InfoOutlinedIcon />} />
                    }
                    {props.index === 2 ?
                        <SidebarIcon label={'Satellite Visualization'} route={'/sv'} icon={<MapIcon />} highlight={true} />
                        :
                        <SidebarIcon label={'Satellite Visualization'} route={'/sv'} icon={<MapIcon />} />
                    }
                    {props.index === 3 ?
                        <SidebarIcon label={'Near Earth Asteroids'} route={'/neo'} icon={<SatelliteIcon />} highlight={true} />
                        :
                        <SidebarIcon label={'Near Earth Asteroids'} route={'/neo'} icon={<SatelliteIcon />} />
                    }
                </div>
            </aside>
        </>
    )
}