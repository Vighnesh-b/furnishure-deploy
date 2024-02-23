import React, { useState } from 'react';
import './Chair1.css';
import PRODUCTS from '../Product_info/product_info';

function Chair1() {
  const chairId = 1; // Change this to the desired chair id
  const selectedChair = PRODUCTS.find(chair => chair.id === chairId);

  if (!selectedChair) {
    return <div>Chair not found</div>;
  }

  const { name, unitPrice, images, description, measurements } = selectedChair;

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  function handleQuantityChange(e) {
    setQuantity(parseInt(e.target.value, 10));
  }

  const totalPrice = (quantity * unitPrice).toFixed(2);

  return (
    <>
      <br />
      <br />
      <div className="product-container"><div className="product-image">
        <div className="big-image"><img src={images[selectedImage]} alt="Furniture" /></div>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ₹{index + 1}`}
              className={`thumbnail ₹{index === selectedImage ? 'active' : ''}`}
              onClick={() => setSelectedImage(index)}
            />
          ))}
        </div>
      </div>
        <div className="product-details">
          <h2>{name}</h2>
          <p className="price">₹{unitPrice.toFixed(2)}</p>
          <div className="quantity-container">
            <label htmlFor="quantity">Quantity:</label>
            <select
              id="quantity"
              name="quantity"
              value={quantity}
              onChange={handleQuantityChange}
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
          </div>
          <p className="total-price">Total Price: ₹{totalPrice}</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
      <div className="description">
        <h2>Product details</h2>
        <p>{description}</p>
        <h2>Measurements</h2>
        <ul>
          {measurements.map((measurement, index) => (
            <li key={index}>{measurement}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Chair1;