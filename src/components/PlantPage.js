import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const URL = 'http://localhost:6001/plants'

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState('')

  // fetching data
  useEffect(() => {
    fetch(URL)
    .then(res => res.json())
    .then(data => setPlants(data))
  }, [])

  // adding new plant to a db and updating DOM
  const handleAddPlant = (newPlant) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPlant)
    })
    .then(res => res.json())
    .then(data => setPlants([...plants, data]))
  }

  // filtering through an original array to filter plants that user is searching for
  const filteredPlants = plants.filter(plant => plant.name.toLowerCase().includes(search.toLowerCase()))

  return (
    <main>
      <NewPlantForm handleAddPlant={handleAddPlant}/>
      <Search search={search} setSearch={setSearch}/>
      <PlantList plants={filteredPlants} />
    </main>
  );
}

export default PlantPage;