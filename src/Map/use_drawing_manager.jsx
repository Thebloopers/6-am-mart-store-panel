import { useEffect, useState } from "react";
import { useMap, useMapsLibrary } from "@vis.gl/react-google-maps";
import addCurrentLocation from 'google-maps-current-location'

export function useDrawingManager(
  initialValue = null,
  polygon,
  setCurrentLocation,
  points
) {
  const map = useMap();
  const drawing = useMapsLibrary("drawing");
  const places = useMapsLibrary("places"); // Include the places library
  const [drawingManager, setDrawingManager] = useState(initialValue);
  const [polygons, setPolygons] = useState([]);

  useEffect(() => {
    if (!map || !drawing) return;

    const newDrawingManager = new drawing.DrawingManager({
      map,
      drawingControl: true,
      drawingControlOptions: {
        position: google.maps.ControlPosition.TOP_CENTER,
        drawingModes: [
          google.maps.drawing.OverlayType.MARKER,
          polygon && google.maps.drawing.OverlayType.POLYGON,
        ],
      },
      markerOptions: {
        draggable: true,
      },
      polygonOptions: {
        editable: true,
        draggable: true,
      },
      position: google.maps.ControlPosition.BOTTOM_LEFT,
    });

    setDrawingManager(newDrawingManager);

    addCurrentLocation(map);

    // Check if the Places library is available
    if (!places) {
      console.error("Google Maps Places library not loaded.");
      return;
    }

    // Initialize Places Autocomplete
    const autocompleteService =
      new window.google.maps.places.AutocompleteService();
    const placesAutocomplete = new window.google.maps.places.Autocomplete(
      document.getElementById("searchBox")
    );

    // Handle place selection from autocomplete
    placesAutocomplete.addListener("place_changed", () => {
      const place = placesAutocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) return;
      const location = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng(),
      };
      // Update the map's center with the new location
      map.setCenter(location);

      // Update the current location state
      setCurrentLocation(location);
    });

    return () => {
      if (newDrawingManager) {
        newDrawingManager.setMap(null);
      }
    };
  }, [drawing, map, places, polygon, setCurrentLocation]); // Include points as a dependency

  useEffect(() => {
    // Ensure drawingManager is available and points are provided
    if (drawingManager && points) {
      // Remove all existing polygons from the map
      for (const polygon of polygons) {
        polygon.setMap(null);
      }
      setPolygons([]);

      // Render the new shapes
      const newPolygons = points?.map((shape) => {
        // Calculate the center of the shape
        const bounds = new window.google.maps.LatLngBounds();
        bounds.extend({ lat: shape[0], lng: shape[1] }); // Extend bounds directly with the first point
        const center = bounds.getCenter();

        map.setCenter(center);

        // Create the polygon
        const polygon = new window.google.maps.Polygon({
          paths: points?.map((point) => ({ lat: point[0], lng: point[1] })),
          map: map,
          fillColor: "#FF000030",
          fillOpacity: 0.35,
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          clickable: false,
          editable: false,
          draggable: true, // Set draggable to true to make the polygon draggable
          geodesic: false,
        });

        return polygon;
      });

      // Update the list of polygons
      setPolygons(newPolygons);
    }
  }, [drawingManager, points, map]);

  return drawingManager;
}
