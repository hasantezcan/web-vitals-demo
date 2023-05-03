import { Product } from "../../interfaces/product";
interface ImageProps {
    product: Product;
}
const Image = ({ product }: ImageProps) => {

    return (
        <div className="pdp-image">
            <img
                src={product.images[0]}
                alt={product.title}
            />
        </div>
    )

};

export { Image };
