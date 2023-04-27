import ProductRecommendations from "../ProductRecommendations/ProductRecommendations";
import { useProduct } from "../../context/product-context";
import { MarketingBanner } from "../MarketingBanner/MarketingBanner";
import DiscoverMore from "../ProductRecommendations/DiscoverMore";
import { ColorOptions } from "../ColorOptions/ColorOptions";
import { useBanner } from "../../context/banner-context";
import { useEffect } from "react";

const Pdp = () => {
  const { productList } = useProduct();
  const { getListingBannerData, listingBannerList } = useBanner();

  const product = productList[0];

  if (!product) return null;

  useEffect(() => {
    getListingBannerData();
  }, [])

  return (
    <div className="pdp-wrapper">
      <div className="pdp">
        <p className="breadcrumb">
          Shoes {">"} Sports Shoes {">"} Sneakers
        </p>

        <div className="main">
          <img
            className="pdp-image"
            src={product.images[0]}
            alt={product.title}
          />
          <div className="pdp-detail">
            <h1 className="title">{product.title}</h1>
            <p className="price">
              <span className="price-value">₺ {product.price}</span>
              <span className="price-without-discount">₺ 89,99</span>
            </p>
            <p className="description">{product.description}</p>
            <div className="pdp-code-banner">
              <MarketingBanner bannerList={listingBannerList} />
            </div>

            <ColorOptions />
            <div className="add-to-cart-button">ADD TO CART</div>
          </div>
        </div>

        <ProductRecommendations title="Recommended Products" />
        <DiscoverMore title="You may also like" />
      </div>
    </div>
  );
};

export { Pdp };
