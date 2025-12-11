'use client';

import { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

interface MapLeafletProps {
  latitude: number;
  longitude: number;
  zoom?: number;
  title?: string;
}

const MapLeaflet = ({ latitude, longitude, zoom = 15, title = 'Localisation' }: MapLeafletProps) => {
  const mapRef = useRef<any>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !mapContainerRef.current || mapRef.current) return;

    // Charger Leaflet dynamiquement côté client
    import('leaflet').then((L) => {
      // Fix pour les icônes Leaflet avec Next.js
      delete (L.default.Icon.Default.prototype as any)._getIconUrl;
      L.default.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
        iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
      });

      // Initialiser la carte
      const map = L.default.map(mapContainerRef.current!, {
        center: [latitude, longitude],
        zoom: zoom,
        zoomControl: true,
        scrollWheelZoom: true,
      });

      // Ajouter les tuiles OpenStreetMap
      L.default.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Ajouter un marqueur
      L.default.marker([latitude, longitude])
        .addTo(map)
        .bindPopup(title)
        .openPopup();

      mapRef.current = map;

      // Ajuster la vue pour s'assurer que le marqueur est visible
      map.fitBounds([[latitude - 0.01, longitude - 0.01], [latitude + 0.01, longitude + 0.01]], {
        padding: [20, 20],
      });
    });

    // Cleanup
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, [isMounted, latitude, longitude, zoom, title]);

  if (!isMounted) {
    return (
      <div className="w-full h-[450px] rounded-2xl overflow-hidden bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
        <div className="text-gray-500 dark:text-gray-400">Chargement de la carte...</div>
      </div>
    );
  }

  return (
    <div 
      ref={mapContainerRef} 
      className="w-full h-[450px] rounded-2xl overflow-hidden"
      style={{ zIndex: 0 }}
    />
  );
};

export default MapLeaflet;

