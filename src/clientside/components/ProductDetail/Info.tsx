import { useEffect } from "react";
import { useBanner } from "../../context/banner-context";
import { Product } from "../../interfaces/product";
import { ColorOptions } from "../ColorOptions/ColorOptions";
import { MarketingBanner } from "../MarketingBanner/MarketingBanner";

interface InfoProps {
    product: Product;
}
const Info = ({ product }: InfoProps) => {

    const { getListingBannerData, listingBannerList } = useBanner();

    useEffect(() => {
        getListingBannerData();
    }, []);

    return (
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
    )
};

export { Info };
