import React, { useState } from "react";
import { Share, Heart, GitCompare } from "lucide-react";
import "./ourProducts.css";
import { products } from "../../assets/products"


const OurProducts = () => {
  const [showAll, setShowAll] = useState(false);
  
 
  const visibleProducts = showAll ? products : products.slice(0, 8);

  const ProductCard = ({ product }) => (
    <div className="card">
      <div className="card-image">
        {product.badge && (
          <div className={`${product.badge.type}-badge`}>
            {product.badge.text}
          </div>
        )}
        <img src={product.image} alt="Product" />
        <div className="hover-content">
          <button className="add-cart-btn">Add to cart</button>
          <div className="action-buttons">
            <button className="icon-button">
              <Share className="icon" size={20} color="white" />
              <span>Share</span>
            </button>
            <button className="icon-button">
              <GitCompare className="icon" size={20} color="white" />
              <span>Compare</span>
            </button>
            <button className="icon-button">
              <Heart className="icon" size={20} color="white" />
              <span>Like</span>
            </button>
          </div>
        </div>
      </div>
      <div className="card-info">
        <p className="name">{product.name}</p>
        <p className="description">{product.description}</p>
        <div className="price-container">
          <p className="price">{product.price}</p>
          {product.rprice && <p className="rprice">{product.rprice}</p>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="ourProducts">
      <h1>Our Products</h1>
      <div className="products">
        {visibleProducts.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
      {!showAll && products.length > 8 && (
        <div className="show-more-container">
          <button 
            className="show-more-btn"
            onClick={() => setShowAll(true)}
          >
            Show More
          </button>
        </div>
      )}
    </div>
  );
};

export default OurProducts;