import React from "react";

export const SelectContainer = ({ destinationProps, name, planets, onChange })=> {
  return (
    <div className="destination">
      <h4 className="destination-title">{name}</h4>
      <select name={name} onChange={onChange} >
        <option>{destinationProps.defaultOption}</option>
        {planets.map((opt, id) => {
          return <option key={id}>{opt.name}</option>;
        })}
      </select>
    </div>
  );
};

export default SelectContainer;

