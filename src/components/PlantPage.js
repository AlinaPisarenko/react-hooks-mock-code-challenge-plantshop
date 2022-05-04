import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const URL = "http://localhost:6001/plants";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [search, setSearch] = useState("");

  //getting data from db.json
  useEffect(() => {
    fetch(URL)
      .then((r) => r.json())
      .then((d) => setPlants(d));
  }, []);

  //adding new plant to an array of plants on the DOM
  function addNewPlant(newPlant) {
    setPlants([...plants, newPlant]);
  }

  //getting input value
  function handleFIlter(e) {
    setSearch(e.target.value);
  }

  //filtering Items by the name
  const filteredPlants = plants.filter((item) => item.name.includes(search));
  return (
    <main>
      <NewPlantForm onAddNewPlant={addNewPlant} />
      <Search handleFilter={handleFIlter} search={search} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;
export { URL };
