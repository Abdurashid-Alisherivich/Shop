import React from 'react';
import './Map.scss'

import {YMaps , Map, Placemark, FullscreenControl, GeolocationControl, TrafficControl, ZoomControl, RouteButton, TypeSelector} from 'react-yandex-maps'


const Maps = () =>{
    return (

        <YMaps>
            <div className="demo">

                <Map 
                    defaultState={{
                        center: [40.385666, 71.786291],
                        zoom: 15,
                        
                    }}
                    // style={{color:'green'}}
                >
                <Placemark geometry={[40.385666,71.786291]} />
                <FullscreenControl options={{ float: 'left'}} />
                <GeolocationControl options={{ float: 'right'}} />
                <TrafficControl options={{float: 'right'}} />
                <ZoomControl options={{float: 'left'}} />
                <RouteButton options={{ float: 'right'}} />
                <TypeSelector options={{float: 'right'}} />
                </Map>

            </div>
        </YMaps>

    )
}

export default Maps