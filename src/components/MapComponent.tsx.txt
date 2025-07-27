"use client";

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Initialiser GSAP avec ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Configuration Mapbox
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1Ijoia3JvaG5kIiwiYSI6ImNtNmRpejk3czBvMnQycXM2MzRydnVndTkifQ.VvKH6-IrVA5Gd5-RyRMZTg';
const MAPBOX_SATELLITE_STYLE = 'mapbox/satellite-v9';
const MAPBOX_URL = `https://api.mapbox.com/styles/v1/${MAPBOX_SATELLITE_STYLE}/tiles/{z}/{x}/{y}?access_token=${MAPBOX_ACCESS_TOKEN}`;

// Icône personnalisée
const createCustomIcon = (iconUrl: string, iconSize: [number, number]) => {
  return L.icon({
    iconUrl,
    iconSize,
    iconAnchor: [iconSize[0] / 2, iconSize[1]],
    popupAnchor: [0, -iconSize[1] / 2],
    className: 'custom-marker-icon'
  });
};

const defaultIcon = createCustomIcon(
  '/images/marker-icon.png',
  [25, 41]
);

const customIcon = createCustomIcon(
  '/images/icone.jpg',
  [32, 32]
);

L.Marker.prototype.options.icon = defaultIcon;

export default function MapComponent() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markerRef = useRef<L.Marker | null>(null);
  const animationRef = useRef<gsap.core.Timeline | null>(null);

  // Coordonnées initiales
  const initialPosition: L.LatLngExpression = [3.139, 101.6869];

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Initialisation de la carte
    mapRef.current = L.map(mapContainerRef.current, {
      center: initialPosition,
      zoom: 13,
      zoomControl: false,
      preferCanvas: true
    });

    // Couche Mapbox Satellite
    L.tileLayer(MAPBOX_URL, {
      attribution:
        '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a>',
      tileSize: 512,
      zoomOffset: -1
    }).addTo(mapRef.current);

    // Marqueur avec animation
    markerRef.current = L.marker(initialPosition, {
      icon: customIcon,
      autoPanOnFocus: false
    })
      .addTo(mapRef.current)
      .bindPopup('Notre emplacement')
      .openPopup();

    // Animation 3D avec GSAP
    animationRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: mapContainerRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1,
        toggleActions: "play none none none"
      }
    });

    animationRef.current
      .fromTo(
        mapContainerRef.current,
        { perspective: 1000, rotationX: 45, opacity: 0 },
        { rotationX: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
      )
      .fromTo(
        markerRef.current.getElement(),
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "elastic.out(1, 0.5)" },
        0.2
      );

    // Ajustement de la carte lors du redimensionnement
    const handleResize = () => {
      mapRef.current?.invalidateSize();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      animationRef.current?.kill();
      window.removeEventListener('resize', handleResize);
      mapRef.current?.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden rounded-xl shadow-xl mx-4 lg:mx-16 my-8 lg:my-16">
      <div
        ref={mapContainerRef}
        className="h-[400px] sm:h-[500px] md:h-[600px] w-full transform-gpu will-change-transform"
      />
      <style jsx global>{`
        .custom-marker-icon {
          filter: drop-shadow(0 0 8px rgba(0, 0, 0, 0.3));
          transition: transform 0.3s ease;
        }
        .custom-marker-icon:hover {
          transform: scale(1.1) translateY(-5px);
        }
        .leaflet-popup-content {
          font-family: 'Inter', sans-serif;
          padding: 0.5rem;
          margin: 0;
          font-size: 0.9rem;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 8px;
        }
        .leaflet-container {
          background-color: #f8f9fa;
        }
      `}</style>
    </div>
  );
}