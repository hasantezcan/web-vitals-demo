import { PLACEHOLDER } from "../../../constants";
import { Product } from "../../interfaces/product";
interface ImageProps {
    product: Product;
}
const Image = ({ product }: ImageProps) => {

    if (!product.images[0]) return null;

    return (
        <div className="pdp-image">
            <img
                src={product.images[0]}
                alt={product.title}
                onError={(e: any) => {
                    e.target.src = PLACEHOLDER;
                }}
            />
        </div>
    )

};

export { Image };
