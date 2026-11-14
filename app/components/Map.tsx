"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const TOKEN = process.env.NEXT_PUBLIC_MAPBOX_TOKEN ?? "";

// Prim Caffe koordinater — Xhon Kenedi 9A-1/001, Skopje
const LNG = 21.4316;
const LAT = 41.9981;

export default function Map() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<mapboxgl.Map | null>(null);

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    mapboxgl.accessToken = TOKEN;

    const map = new mapboxgl.Map({
      container: containerRef.current,
      style: "mapbox://styles/mapbox/dark-v11",
      center: [LNG, LAT],
      zoom: 15.5,
      pitch: 40,
      bearing: -20,
      interactive: true,
    });

    mapRef.current = map;

    map.on("load", () => {
      // Färgsätt byggnader mörkbruna
      map.setPaintProperty("building", "fill-color", "#2a2420");
      map.setPaintProperty("building", "fill-opacity", 0.9);

      // Guldmarkör
      const el = document.createElement("div");
      el.style.cssText = `
        width: 14px;
        height: 14px;
        background: #c8a96e;
        border-radius: 50%;
        border: 2px solid #e4dbd0;
        box-shadow: 0 0 0 0 rgba(200,169,110,0.5);
        animation: pulse-ring 2.5s infinite;
      `;

      new mapboxgl.Marker({ element: el })
        .setLngLat([LNG, LAT])
        .addTo(map);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex-1 min-h-[420px]"
      style={{ borderRadius: 0 }}
    />
  );
}
