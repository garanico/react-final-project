import React from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ image, title, price, onClicked }) => {
  return (
    <div className="productCard" onClick={onClicked}>
      <img className="productImage" src={image} alt={title} />
      <div className="productCardInfo">
        <p className="productTitle">{title}</p>
        <div className="productButton">Add to Cart - ${price}</div>
      </div>
    </div>
  );
};

export default ProductCard;