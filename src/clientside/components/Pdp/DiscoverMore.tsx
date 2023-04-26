import { useProduct } from "../../context/product-context";
import ProductCard from "./ProductCard/product-card";

const DiscoverMore = ({ title }: { title: string }) => {
    const { productList } = useProduct()

    if (!productList?.length) return null;

    return (
        <div>
            <h1 className="title">{title}</h1>
            <div className="product-list-wrapper">
                <ul className="product-list">
                    {productList.map(product => {
                        return <ProductCard product={product} />
                    })}
                </ul>
            </div>
        </div>
    );
};

export default DiscoverMore;
