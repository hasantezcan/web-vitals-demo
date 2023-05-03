import { useProduct } from "../../context/product-context";
import ProductCard from "../ProductCard/product-card";

const DiscoverMore = ({ title }: { title: string }) => {
    const { productList } = useProduct()

    if (!productList?.length) return null;

    return (
        <div className="discover-more-wrapper">
            <div className="discover-more">
                <p className="title">{title}</p>
                <div className="product-list-wrapper">
                    <ul className="product-list">
                        {productList.map(product => {
                            return <ProductCard product={product} />
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DiscoverMore;
