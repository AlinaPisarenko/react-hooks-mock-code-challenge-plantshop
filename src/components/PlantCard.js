import React, { useState } from "react";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true)

  const { name, price, image } = plant

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {/* {inStock ? (
        <button onClick={() => setInStock(!inStock)} className="primary">In Stock</button>
      ) : (
        <button onClick={() => setInStock(!inStock)} >Out of Stock</button>
      )} */}
      
      {/* another solution to handle conditional rendering by using one button */}
      <button onClick={() => setInStock(!inStock)} className={inStock ? "primary" : ''}>
        {inStock ? "In Stock" : "Out of Stock"}
      </button>

    </li>
  );
}

export default PlantCard;
