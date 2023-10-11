import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, handleUpdatePrice }) {

  return (
    <ul className="cards">
      {plants.map((plant) => <PlantCard key={plant.id} plant={plant} handleUpdatePrice={handleUpdatePrice} />)}
    </ul>)
}

export default PlantList;
