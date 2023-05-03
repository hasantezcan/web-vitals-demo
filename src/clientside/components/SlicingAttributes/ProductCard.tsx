import { PLACEHOLDER } from "../../../constants";
import { Product } from "../../interfaces/product";
import LazyLoad from 'react-lazyload';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="product-card-wrapper">
            {/* <LazyLoad once placeholder={<img src={PLACEHOLDER} />}>
                <img
                    src={product.images[0]} alt={product.title}
                    onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = PLACEHOLDER;
                    }}
                />
            </LazyLoad> */}
            <img src={product.images[0]} alt={product.title} style={{
                backgroundImage: `url(${PLACEHOLDER})`
            }} />
        </div>
    );
};

export default ProductCard;
