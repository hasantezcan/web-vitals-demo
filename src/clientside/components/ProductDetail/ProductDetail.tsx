import ProductRecommendations from "../ProductRecommendations/ProductRecommendations";
import { useProduct } from "../../context/product-context";
import DiscoverMore from "../ProductRecommendations/DiscoverMore";
import { Breadcrumb } from "../Breadcrumb/breadcrumb";
import { Image } from "./Image";
import { Info } from "./Info";
interface PdpProps {
  isSsr?: boolean;
}

const Pdp = ({ isSsr }: PdpProps) => {
  const { productList } = useProduct();

  const product = productList[0];

  if (!product) return null;

  return (
    <div className="pdp-wrapper">
      <div className="pdp">
        <Breadcrumb />
        <div className="main">
          <Image product={product} />
          <Info product={product} />
        </div>
      </div>
    </div>
  );
};

export { Pdp };
