import React, { useState, useEffect, useRef } from "react";
import { ControlPosition, Map, MapControl } from "@vis.gl/react-google-maps";
import { UndoRedoControl } from "./undo_redo_control";
import { useDrawingManager } from "./use_drawing_manager";

const GoogleMap = ({ polygon, points, setPoints, reset, marker }) => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const drawingManager = useDrawingManager(
    null,
    polygon,
    setCurrentLocation,
    points
  );
  const [drawnShapes, setDrawnShapes] = useState([]);
  const mapRef = useRef(null);

  useEffect(() => {
    // Get current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation({ lat: latitude, lng: longitude });
        },
        (error) => {
          console.error("Error getting current location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  useEffect(() => {
    // Add drawing event listeners
    if (drawingManager) {
      const handleOverlayComplete = (event) => {
        const shape = event.overlay;
        const points = [];

        // Extract latitude and longitude of points based on overlay type
        if (event.type === "polygon") {
          const path = shape.getPath();
          const numPoints = path.getLength();

          // Add each point to the points array
          for (let i = 0; i < numPoints; i++) {
            const point = path.getAt(i);
            points.push([point.lat(), point.lng()]);
          }

          // Ensure the polygon is closed by adding the first point to the end
          const firstPoint = path.getAt(0);
          points.push([firstPoint.lat(), firstPoint.lng()]);

          // Set the points state
          setPoints(points);
        } else if (event.type === "polyline") {
          shape.getPath().forEach((point) => {
            points.push([point.lat(), point.lng()]);
          });
          setPoints(points);
        }

        // Store drawn shape and its points
        setDrawnShapes(() => [{ type: event.type, points }]);
      };

      drawingManager.addListener("overlaycomplete", handleOverlayComplete);

      return () => {
        // drawingManager.removeListener("overlaycomplete", handleOverlayComplete);
      };
    }
  }, [drawingManager, setDrawnShapes]);

  useEffect(() => {
    // Add marker selection event listener
    if (marker && mapRef.current) {
      const markerClickListener = (event) => {
        const { latLng } = event;
        const lat = latLng.lat();
        const lng = latLng.lng();
        // Set points state with the selected marker's location
        console.log(lat, lng, "here");
        setPoints([currentLocation]);
      };
      // Attach the event listener to the map
      mapRef.current.addListener("click", markerClickListener);

      // Clean up by removing the event listener when unmounting
      return () => {
        mapRef.current.removeListener("click", markerClickListener);
      };
    }
  }, [marker, mapRef.current]);

  useEffect(() => {
    if (reset && mapRef.current && currentLocation) {
      // Reset map to its original state when reset prop changes
      mapRef.current.setCenter(currentLocation);
    }
  }, [reset, currentLocation]);

  return (
    <>
      <h1 className="font-semibold mb-1">Map(Add Place)</h1>
      <input
        className="border rounded px-3 py-1 text-[1.8vh] h-10 w-full"
        placeholder="Search a place ..."
        type="text"
        id="searchBox"
      />
      {currentLocation && (
        <Map
          ref={mapRef}
          defaultZoom={12}
          defaultCenter={currentLocation}
          gestureHandling="greedy"
          disableDefaultUI={true}
          zoomControl={true} // Enable zoom control icons
          mapTypeControl={true} // Disable map type control          
        />
        
      )}

      <MapControl position={ControlPosition.TOP_CENTER}>
        <UndoRedoControl drawingManager={drawingManager} />
      </MapControl>
    </>
  );
};

export default GoogleMap;
