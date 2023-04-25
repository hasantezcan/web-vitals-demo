import React from 'react'
import ProductRecommendations from "./ProductRecommendations";

const Pdp = () => {  
  return (
    <div className="pdp-wrapper">
      <div className="pdp">
        <p className="breadcrumb">
          Shoes {">"} Sports Shoes {">"} Sneakers
        </p>

        <div className="main">
          <img
            className="pdp-image"
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
            alt=""
          />
          <div className="pdp-detail">
            <h1 className="title">Nike Runner</h1>
            <p className="price">
              <span className="price-value">₺ 49,99</span>
              <span className="price-without-discount">₺ 89,99</span>
            </p>
            <p className="description">
              Description Gray sneaker, structured Flat heel Small heel height, between 1-4 cm Upper: 100%
              Synthetic;Inner Material: 100% Textile;Outsole: 100% Rubber Care Instructions See care label for detailed
              care instructions. Additional Info Dispatched and sold by Shoes24. From this product can A maximum of 10
              pieces can be ordered. Trendyol reserves the right to cancel orders over 10 pieces cancel.
            </p>

            <div className="add-to-cart-button">ADD TO CART</div>
          </div>
        </div>

        <ProductRecommendations title="Recommended Products" />
        <ProductRecommendations title="Similar Products" />
      </div>
    </div>
  );
};

export { Pdp };
