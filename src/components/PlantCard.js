import React, { useState } from "react";
import { URL } from "./PlantPage";

function PlantCard({ plant }) {
  const [inStock, setInStock] = useState(true);
  const { image, name, price, id } = plant;

  //function that handles click event
  function handleClick() {
    //changing the button to "out of stock"
    setInStock(!inStock);

    // removing item from db
    fetch(`${URL}/${id}`, {
      method: "DELETE",
    }).then((r) => r.json());
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
    </li>
  );
}

export default PlantCard;
