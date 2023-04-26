import { Header } from "./components/Header/Header";
import { MarketingBanner } from "./components/MarketingBanner/MarketingBanner";
import { Pdp } from "./components/Pdp/Pdp";
import { BannerProvider } from "./context/banner-context";
import { ProductProvider } from "./context/product-context";
import { SearchSuggestionProvider } from "./context/search-suggestion-context";
import { BANNER_TYPES } from "./enums";
import { Banner } from "./interfaces/banner";
import { Product } from "./interfaces/product";

interface ApplicationProps {
  products?: Product[];
  banners?: Banner[];
  colorOptions?: any[];
  suggestions?: any[];
}

export default function App(props: ApplicationProps) {
  return (
    <SearchSuggestionProvider initialSearchSuggestions={props.suggestions}>
      <BannerProvider initialBanners={props.banners}>
        <ProductProvider
          initialProducts={props.products}
          initialColorOptions={props.colorOptions}
        >
          <MarketingBanner bannerType={BANNER_TYPES.TOP_BANNER} />
          <Header />
          <Pdp />
        </ProductProvider>
      </BannerProvider>
    </SearchSuggestionProvider>
  );
}
