import { Product } from "../../interfaces/product";
interface ImageProps {
  product: Product;
}
const Image = ({ product }: ImageProps) => {
  const worstImage = product.images[0];
  const optimizedImage = product.images[2];

  return (
    <div className="pdp-image">
      <img src={worstImage} alt={product.title} loading="lazy" />
    </div>
  );
};

export { Image };
