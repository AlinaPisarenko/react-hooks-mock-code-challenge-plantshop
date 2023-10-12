import React, { useState } from "react";

function NewPlantForm({ handleAddPlant }) {
  const [formData, setFormData] = useState({
    name: '',
    image: '',
    price: 0
  })
// console.log(formData)

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  // submitting form
  // passing new object to handleAddPlant function for a fetch request and DOM update
  const handleSubmit = (e) => {
    e.preventDefault()

    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price)
    }

    // formData.price = parseFloat(formData.price)
    handleAddPlant(newPlant)
    
    // resetting form
    setFormData({
    name: '',
    image: '',
    price: 0
  })
  }


  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input value={formData.name} onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input value={formData.image} onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input value={formData.price} onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;