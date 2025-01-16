import moment from "moment";
import React, { useState } from "react";

const PathInput = ({ data, setData }) => {
  const [input, setInput] = useState({ lat: "", lng: "", time: "" });

  const handleChange = (field, value) => {
    console.log(field, value);
    if (field !== "time") {
      value = parseFloat(value);
    }
    setInput((input) => ({ ...input, [field]: value }));
  };

  const handleAddInput = (e) => {
    e.preventDefault();
    const newData = [...data, input].sort(
      (a, b) => moment(a.time) - moment(b.time)
    );
    setData(newData);
    setInput({ lat: "", lng: "", time: "" });
  };

  return (
    <div className="pathInput">
      <div className="pathInput-add">
        <form className="inputs" onSubmit={handleAddInput}>
          <input
            type="number"
            placeholder="Latitude"
            required
            value={input.lat}
            onChange={(e) => handleChange("lat", e.target.value)}
          />
          <input
            type="number"
            placeholder="Longitude"
            required
            value={input.lng}
            onChange={(e) => handleChange("lng", e.target.value)}
          />
          <input
            type="datetime-local"
            placeholder="Time"
            required
            value={input.time}
            onChange={(e) => handleChange("time", e.target.value)}
          />
          <button>Add</button>
        </form>
      </div>
    </div>
  );
};

export default PathInput;
