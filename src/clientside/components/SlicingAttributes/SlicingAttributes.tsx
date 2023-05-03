import { useProduct } from "../../context/product-context";
import ProductCard from "./ProductCard";

const SlicingAttributes = ({ title }: { title: string }) => {
    const { productList } = useProduct()

    if (!productList?.length) return null;

    return (
        <div>
            <div className="attributes-wrapper">
                <p className="attributes-title">{title}</p>
                <ul className="product-list">
                    {productList.map(product => {
                        return <ProductCard product={product} />
                    })}
                </ul>
            </div>
        </div>
    );
};

export default SlicingAttributes;
