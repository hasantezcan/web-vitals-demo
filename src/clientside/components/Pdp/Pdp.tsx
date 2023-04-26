import ProductRecommendations from "./ProductRecommendations";
import { useProduct } from "../../context/product-context";
import { MarketingBanner } from "../MarketingBanner/MarketingBanner";
import { BANNER_TYPES } from "../../enums";

const Pdp = () => {
  const { productList } = useProduct();

  const product = productList[0];

  if (!product) return null;

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
            <h1 className="title">{product.title}</h1>
            <p className="price">
              <span className="price-value">₺ {product.price}</span>
              <span className="price-without-discount">₺ 89,99</span>
            </p>
            <p className="description">{product.description}</p>
            <MarketingBanner bannerType={BANNER_TYPES.LISTING_BANNER} />
            {//TODO: add color options
            }
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
