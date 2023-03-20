'use client'
import { useState } from 'react';
import { MapContainer, TileLayer,Marker } from 'react-leaflet';
import L from "leaflet";
import 'leaflet/dist/leaflet.css';

export default function MapLeaflet({ latitude, longitude }) {
    const [geoData, setGeoData] = useState({ lat: latitude, lng: longitude });
    const center = [geoData.lat, geoData.lng];
    const fillBlueOptions = { fillColor: '#0F51FA', color: '#0F51FA' }

    let greenIcon = L.icon({
        iconUrl:
            "/images/logos/Logotype.svg",
        shadowUrl:
            "/images/logos/Logotype.svg",
        iconSize: [30, 30],
        // iconAnchor: [22, 94],
        // popupAnchor: [-3, -76],
        shadowSize: [30, 30],
        // shadowAnchor: [22, 94],
    });


    return (
        <MapContainer center={center} zoom={17} className="z-0 h-40 lg:h-96 w-full rounded-2xl">
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={center} icon={greenIcon}>
            </Marker>
        </MapContainer>
    );
}