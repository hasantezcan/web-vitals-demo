import { Header } from "./components/Header/Header";
import { MarketingBanner } from "./components/MarketingBanner/MarketingBanner";
import { Pdp } from "./components/Pdp/Pdp";
import { BannerProvider } from "./context/banner-context";
import { ProductProvider } from "./context/product-context";
import { BANNER_TYPES } from "./enums";
import { Banner } from "./interfaces/banner";
import { Product } from "./interfaces/product";

interface ApplicationProps {
  products?: Product[],
  banners?: Banner[]
}
export default function App(props: ApplicationProps) {
  // console.log("🚀 ============================ > props:", props);
  return (
    <BannerProvider initialBanners={props.banners}>
      <ProductProvider initialProducts={props.products}>
        <MarketingBanner bannerType={BANNER_TYPES.TOP_BANNER} />
        <Header />
        <Pdp />
      </ProductProvider>
    </BannerProvider>
  );
}
