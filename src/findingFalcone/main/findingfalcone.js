import React, { Component } from "react";
import Select from "./select";
import "./findingfalcone.scss";
import { Button, ButtonComponent } from "./button";

export class Findingfalcone extends Component {
  state = {
    vehicles: [],
    planets: [],
    initialData: [
      {
        id: 1,
        name: "Destination-1",
        initialValue: "Select Planet",
        vehicle: ""
      },
      {
        id: 2,
        name: "Destination-2",
        initialValue: "Select Planet",
        vehicle: ""
      },
      {
        id: 3,
        name: "Destination-3",
        initialValue: "Select Planet",
        vehicle: ""
      },
      {
        id: 4,
        name: "Destination-4",
        initialValue: "Select Planet",
        vehicle: ""
      }
    ]
  };

  getPlanets = () => {
    fetch("https://findfalcone.herokuapp.com/planets")
      .then(res => res.json())
      .then(planets => {
        const planetList = [];
        this.setState({ planets });
        planetList.push(planets);
      })
      .catch(e => {
        setTimeout(this.getPlanets, 5000);
      });
  };

  getVehicles = () => {
    fetch("https://findfalcone.herokuapp.com/vehicles")
      .then(res => res.json())
      .then(vehicles => {
        const vehiclesList = [];
        this.setState({
          vehicles
        });
        vehiclesList.push(vehicles);
      })
      .catch(e => {
        setTimeout(this.getPlanets, 5000);
      });
  };

  componentDidMount() {
    this.getPlanets();
    this.getVehicles();
  }

  handlePlanetChange = () => {
   
  };

  render() {
    const { initialData, planets } = this.state;
    return (
      <div className="Wrapper">
        <ButtonComponent />
        <div className="container">
          {initialData.map((selectedPlanet, index) => {
            return (
              <div key={index}>
                <Select
                  planets={planets}
                  destination={selectedPlanet}
                  name={selectedPlanet.name}
                  id={selectedPlanet.id}
                  onChange={this.handlePlanetChange}
                />
              </div>
            );
          })}
        </div>
        <Button />
      </div>
    );
  }
}

export default Findingfalcone;
