import { useBanner } from "../../context/banner-context";
import { useProduct } from "../../context/product-context";
import { MarketingBanner } from "../MarketingBanner/MarketingBanner";
import ProductCard from "../ProductCard/product-card";

const DiscoverMore = ({ title }: { title: string }) => {
    const { productList } = useProduct()
    const { listingBannerList } = useBanner();
    const productCountInLine = 4;
    if (!productList?.length) return null;

    return (
        <div className="discover-more-wrapper">
            <div className="discover-more">
                <p className="title">{title}</p>
                <div className="product-list-wrapper">
                    <ul className="product-list">
                        {productList.map((product, index) => {

                            if (index !== 0)
                                return (
                                    <>
                                        {
                                            productCountInLine === index - 1 &&
                                            <div style={{
                                                gridColumn: `span ${productCountInLine}`,
                                            }} className="listing-banner">
                                                <MarketingBanner bannerList={listingBannerList} />
                                            </div>
                                        }

                                        <ProductCard product={product} />
                                    </>
                                )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
