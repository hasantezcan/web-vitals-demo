import { Product } from "../../../interfaces/product";

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    return (
        <div className="product-card-wrapper">
            <img src={product.images[0]} alt={product.title} />
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
