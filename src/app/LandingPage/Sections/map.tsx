"use client";
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const hospitalIcon = new L.Icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  className: 'hospital-icon',
});

const Map = () => {
  const [userLocation, setUserLocation] = useState<[number, number] | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      delete (L.Icon.Default.prototype as any)._getIconUrl;

      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (latitude >= 4 && latitude <= 14 && longitude >= 2 && longitude <= 15) {
            setUserLocation([latitude, longitude]);
          } else {
            console.error('Location is not within Nigeria.');
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  }, []);

  const nearestHospitalLocation: [number, number] = [9.082, 8.6753];

  return (
    <MapContainer center={userLocation || [9.082, 8.6753]} zoom={13} className="w-full h-full">
      <TileLayer
        url={`https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap`}
        attribution='&copy; <a href="https://www.google.com/maps">Google Maps</a> contributors'
      />
      {userLocation && (
        <Marker position={userLocation} icon={hospitalIcon}>
          <Popup>Your current location.</Popup>
        </Marker>
      )}
      <Marker position={nearestHospitalLocation} icon={hospitalIcon}>
        <Popup>
          <span style={{ color: '#65898C' }}>A hospital near you.</span>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
