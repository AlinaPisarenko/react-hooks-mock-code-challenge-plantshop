import React, { useState } from "react";
import { URL } from "./PlantPage";

const defaultData = {
    name: "",
    image: "",
    price: "",
  }

function NewPlantForm({ onAddNewPlant }) {
  const [formData, setFormData] = useState(defaultData);

  //function that handle input changes
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  //handling submit, fetching new item to db
  function handleSubmit(e) {
    e.preventDefault();

    formData.price = parseInt(formData.price)

    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => onAddNewPlant(data));

    setFormData(defaultData);
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Plant name"
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          step="0.01"
          placeholder="Price"
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
