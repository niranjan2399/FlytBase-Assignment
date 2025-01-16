import React, { useEffect, useState } from "react";
import DroneImg from "../assets/images/camera-drone.png";
import {
  GoogleMap,
  LoadScript,
  Marker,
  Polyline,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "600px",
};

const center = {
  lat: 20.5937,
  lng: 78.9629,
};

const customIcon = {
  url: DroneImg,
  scaledSize: { width: 40, height: 40 },
  origin: { x: 0, y: 0 },
  anchor: { x: 20, y: 20 },
};

const MapComponent = ({ data = [] }) => {
  const [index, setIndex] = useState(0);
  const [activeDataset, setActiveDataset] = useState([]);
  const [startSimulation, setStartSimulation] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [seekValue, setSeekValue] = useState(0);

  const handleSimulate = () => {
    if (!data?.length) {
      window.alert("No simulation data found!");
      return;
    }

    setIndex(0);
    setActiveDataset(data);
    setStartSimulation(true);
  };

  const handleSeekChange = (event) => {
    const newIndex = parseInt(event.target.value, 10);
    setIndex(newIndex);
    setSeekValue(newIndex);
  };

  useEffect(() => {
    if (activeDataset.length && !isPaused) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev < activeDataset.length - 1 ? prev + 1 : prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [activeDataset, isPaused]);

  useEffect(() => {
    if (activeDataset?.length - 1 === index) {
      setStartSimulation(false);
    }
  }, [index, activeDataset]);

  return (
    <div className="mapComp">
      <div className="mapComp-actions">
        {!startSimulation ? (
          <button onClick={() => handleSimulate()}>Simulate</button>
        ) : (
          <button onClick={() => setIsPaused(!isPaused)}>
            {isPaused ? "Resume" : "Pause"}
          </button>
        )}
        <input
          type="range"
          min="0"
          max={activeDataset.length - 1}
          value={seekValue}
          onChange={handleSeekChange}
        />
      </div>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={activeDataset?.[0] || center}
          zoom={4}
        >
          {activeDataset.length && <Polyline path={activeDataset} />}
          {activeDataset[index] && (
            <Marker position={activeDataset[index]} icon={customIcon} />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
