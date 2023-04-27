import { PLACEHOLDER } from "../../../constants";
import { Product } from "../../interfaces/product";
import LazyLoad from 'react-lazyload';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="product-card-wrapper">
            <LazyLoad offset={100} placeholder={<img src={PLACEHOLDER} />}>
                <img
                    src={product.images[0]} alt={product.title}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = PLACEHOLDER;
                    }}
                />
            </LazyLoad>
            {/* <img src={product.images[0]} alt={product.title} style={{
                backgroundImage: `url(${PLACEHOLDER})`
            }} /> */}

            <h2>{product.title}</h2>
            <div className="card-bottom">
                <p className="price">
                    <span className="price-value">₺ {product.price}</span>
                    <span className="price-without-discount">₺ 89,99</span>
                </p>
                <button>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;
