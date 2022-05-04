import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  const card = plants.map((plant) => (
    <PlantCard key={plant.id} plant={plant} />
  ));

  return <ul className="cards">{card}</ul>;
}

export default PlantList;
