"use client";

import { GoogleMap, Marker, InfoWindow, useLoadScript } from "@react-google-maps/api";
import Papa from "papaparse";
import { useEffect, useState } from "react";

const containerStyle = {
  width: "100%",
  height: "700px",
};

const center = {
  lat: 22.9734,
  lng: 78.6569,
};

export default function IndiaMap() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  const [jnvLocations, setJnvLocations] = useState([]);
  const [selectedJnv, setSelectedJnv] = useState(null);

  const csvFile = "/extracted_schools (3) (2).csv";

  const geoJsonFiles = [
    { file: "/geoBoundaries-IND-ADM1.geojson", color: "black" }
  ];

  // Load CSV for markers
  useEffect(() => {
    Papa.parse(csvFile, {
      download: true,
      header: true,
      skipEmptyLines: true,
      transformHeader: (h) => h.trim(),
      complete: (result) => {
        const data = result.data
          .map((row, index) => {
            const lat = parseFloat(row.latitude?.trim());
            const lng = parseFloat(row.longitude?.trim());
            if (!isNaN(lat) && !isNaN(lng)) {
              return {
                id: index,
                schoolName: row.schoolName?.trim(),
                state: row.State?.trim(),
                Url1: row.Url1?.trim(),
                lat,
                lng,
              };
            }
            return null;
          })
          .filter(Boolean);

        setJnvLocations(data);
      },
    });
  }, []);

  if (!isLoaded) return <p>Loading Map...</p>;

  const dotIcon = {
    url:
      "data:image/svg+xml;charset=UTF-8," +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
          <circle cx="6" cy="6" r="3" fill="red" />
        </svg>`
      ),
    scaledSize: new window.google.maps.Size(12, 12),
    anchor: new window.google.maps.Point(6, 6),
  };

  const onLoad = (map) => {
    // Load each GeoJSON in a separate layer
    geoJsonFiles.forEach(({ file, color }) => {
      const layer = new window.google.maps.Data({ map: map });
      layer.loadGeoJson(file);
      layer.setStyle({
        strokeColor: color,
        strokeWeight: 1,
        fillColor: "transparent",
      });
    });
  };

  return (
    <div style={{ position: "relative" }}>
      

      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        options={{
          styles: [
            {
              featureType: "administrative",
              elementType: "geometry",
              stylers: [{ visibility: "off" }],
            },
          ],
        }}
      >
        {jnvLocations.map((jnv) => (
          <Marker
            key={jnv.id}
            position={{ lat: jnv.lat, lng: jnv.lng }}
            onClick={() => setSelectedJnv(jnv)}
            icon={dotIcon}
          />
        ))}

       {selectedJnv && (
  <InfoWindow
    position={{ lat: selectedJnv.lat, lng: selectedJnv.lng }}
    onCloseClick={() => setSelectedJnv(null)}
  >
    <div
  style={{
    background: "rgba(30, 58, 138, 0.95)", // deep blue with subtle transparency
    color: "#FFFFFF", // white text
    padding: "12px 18px",
    borderRadius: "12px",
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
    minWidth: "200px",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)", // soft shadow
    backdropFilter: "blur(6px)", // subtle blur for a modern feel
    border: "1px solid rgba(255, 255, 255, 0.2)", // thin border for definition
  }}
>
  <h2
    style={{
      fontSize: "17px",
      fontWeight: 600,
      marginBottom: "6px",
      color: "#E0E7FF", // slightly lighter heading color
    }}
  >
    {selectedJnv.schoolName}
  </h2>
  <p
    style={{
      margin: "2px 0 8px 0",
      fontSize: "14px",
      color: "#CBD5E1", // soft gray text for contrast
    }}
  >
    {selectedJnv.state}
  </p>
  <a
    href={selectedJnv.Url1}
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-block",
      background: "#3B82F6",
      color: "#FFFFFF",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: 500,
      padding: "6px 10px",
      borderRadius: "6px",
      transition: "background 0.2s ease",
    }}
    onMouseOver={(e) => (e.target.style.background = "#2563EB")}
    onMouseOut={(e) => (e.target.style.background = "#3B82F6")}
  >
    🔗 View Details
  </a>
</div>

  </InfoWindow>
)}
      </GoogleMap>
    </div>
  );
}
