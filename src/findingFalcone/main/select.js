import React, { Component } from "react";

export class Select extends Component {
  render() {
    const { destination, name, planets, onChange } = this.props;
    return (
      <div className="destination">
        <h4 className="destination-title">{name}</h4>
        <select
          value={destination.initialValue}
          name={name}
          onChange={onChange}
        >
          <option>{destination.initialValue}</option>
          {planets.map((choosePlanet, id) => {
            return <option key={id}>{choosePlanet.name}</option>;
          })}
        </select>
      </div>
    );
  }
}

export default Select;
