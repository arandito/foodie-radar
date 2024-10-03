'use client';

import React from 'react';
import { GoogleMap, Marker, Circle } from "@react-google-maps/api";

const defaultMapContainerStyle = {
    width: '100%',
    height: '332px',
    borderRadius: '15px',
};

const defaultMapZoom = 13;
const defaultMapOptions = {
    zoomControl: true,
    tilt: 0,
    gestureHandling: 'cooperative',
};

interface MapProps {
    center: { lat: number; lng: number };
    radius: number;
}

const Map: React.FC<MapProps> = ({ center, radius }) => {
    const radiusInMeters = radius * 1000;

    return (
        <div className="w-full">
            <GoogleMap
                mapContainerStyle={defaultMapContainerStyle}
                center={center}
                zoom={defaultMapZoom}
                options={defaultMapOptions}
            >
                <Marker position={center} />
                <Circle
                    center={center}
                    radius={radiusInMeters}
                    options={{
                        fillColor: 'rgba(255, 0, 0, 0.15)',
                        fillOpacity: 0.9,
                        strokeColor: 'rgba(255, 0, 0, 0.8)',
                        strokeOpacity: 0.8,
                        strokeWeight: 4,
                    }}
                />
            </GoogleMap>
        </div>
    )
};

export default Map;