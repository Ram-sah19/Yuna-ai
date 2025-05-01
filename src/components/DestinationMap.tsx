
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

interface DestinationMapProps {
  coordinates: {
    lat: number;
    lng: number;
  };
  name: string;
}

const DestinationMap = ({ coordinates, name }: DestinationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapToken, setMapToken] = useState<string>('');
  const [mapError, setMapError] = useState<string | null>(null);
  
  useEffect(() => {
    // Only initialize map if we have a mapbox token
    if (!mapContainer.current || !mapToken || mapToken.length < 10) return;
    
    // Initialize the map
    try {
      mapboxgl.accessToken = mapToken;
      
      if (map.current) return; // Don't initialize map more than once
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [coordinates.lng, coordinates.lat],
        zoom: 12,
        attributionControl: true,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );
      
      // Add a marker for the destination
      const marker = new mapboxgl.Marker({ color: '#e25822' })
        .setLngLat([coordinates.lng, coordinates.lat])
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>${name}</h3>`))
        .addTo(map.current);
      
      // Open popup by default
      marker.togglePopup();
      
      map.current.on('load', () => {
        setMapLoaded(true);
        setMapError(null);
      });
      
      map.current.on('error', (e) => {
        console.error('Mapbox error:', e);
        setMapError('Failed to load map. Please check your token and try again.');
      });
    } catch (error) {
      console.error('Error initializing map:', error);
      setMapError('Failed to initialize map. Please check your token and try again.');
    }
    
    // Cleanup
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [coordinates.lat, coordinates.lng, name, mapToken]);

  return (
    <Card className="overflow-hidden">
      {!mapToken ? (
        <div className="p-6">
          <p className="text-muted-foreground mb-2">Enter your Mapbox public token to view the map:</p>
          <input 
            type="text" 
            className="w-full p-2 border border-border rounded-md"
            placeholder="Enter Mapbox public token"
            onChange={(e) => setMapToken(e.target.value)}
          />
          <p className="text-xs text-muted-foreground mt-2">
            You can get a token from <a href="https://www.mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-tamil-terracotta hover:underline">mapbox.com</a> 
            by creating an account and going to the tokens section in your dashboard.
          </p>
        </div>
      ) : mapError ? (
        <div className="p-6 text-center">
          <p className="text-destructive mb-2">{mapError}</p>
          <p className="text-muted-foreground">
            Location coordinates: {coordinates.lat}, {coordinates.lng}
          </p>
          <button 
            className="mt-4 px-4 py-2 bg-tamil-terracotta text-white rounded-md hover:bg-tamil-brown"
            onClick={() => setMapToken('')}
          >
            Try different token
          </button>
        </div>
      ) : (
        <div className="h-[300px]">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
              <div className="text-center">
                <Skeleton className="h-8 w-32 mx-auto mb-2" />
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
          <div ref={mapContainer} className="w-full h-full" />
        </div>
      )}
    </Card>
  );
};

export default DestinationMap;
