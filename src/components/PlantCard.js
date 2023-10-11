import React, { useState } from "react";
import { URL } from "./PlantPage";

function PlantCard({ plant, handleUpdatePrice }) {
  const [inStock, setInStock] = useState(true);
  const [newPrice, setNewPrice] = useState(0)

  // destructuring plant object
  const { image, name, price, id } = plant;

  //function that handles click event
  function handleClick() {
    // removing item from db
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => {
      //changing the button to "out of stock"
      setInStock(!inStock);
    })
  }

  function handleSubmit(e) {
    e.preventDefault()

    fetch(`${URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({price: parseFloat(newPrice)})
    })
    .then((res) => res.json())
    .then(data => {
      handleUpdatePrice(data)
      setNewPrice(0)
    })
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button onClick={handleClick} className="primary">
          In Stock
        </button>
      ) : (
        <button>Out of Stock</button>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="price"
          value={newPrice}
          onChange={(e) => setNewPrice(e.target.value)}
          placeholder="Plant name"
        />
        <button type="submit">Update Price</button>
      </form>
    </li>
  );
}

export default PlantCard;
