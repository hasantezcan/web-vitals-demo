import { Header } from "./components/Header/Header";
import { MarketingBanner } from "./components/MarketingBanner/MarketingBanner";
import { Pdp } from "./components/Pdp/Pdp";
import { ProductProvider } from "./context/product-context";
import { Product } from "./interfaces/product";

export default function App(props: { products?: Product[] }) {
  // console.log("🚀 ============================ > props:", props);
  return (
    <ProductProvider initialProducts={props.products}>
      <MarketingBanner />
      <Header />
      <Pdp />
    </ProductProvider>
  );
}
