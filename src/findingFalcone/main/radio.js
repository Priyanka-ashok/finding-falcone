import React from "react";

export const RadioInput = ({ destinationProps, onChange }) => {
  console.log("sdsads")
  return (
    <div>
      {destinationProps.availableVehicles.map(item => (
        <React.Fragment>
          <input
            type="radio"
            name={destinationProps.name}
            value={item.name}
            onChange={onChange}
          />
          <label>{item.name} (
        )</label>
        </React.Fragment>
      ))}
    </div>
  );
};

export default RadioInput;
