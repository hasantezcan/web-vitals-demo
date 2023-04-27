import { Header } from "./components/Header/Header";
import { Pdp } from "./components/ProductDetail/ProductDetail";
import { PartyTownHead } from "./components/partyTown";
import { BannerProvider, useBanner } from "./context/banner-context";
import { ProductProvider } from "./context/product-context";
import { SearchSuggestionProvider } from "./context/search-suggestion-context";
import { Banner } from "./interfaces/banner";
import { Product } from "./interfaces/product";

interface ApplicationProps {
  products?: Product[];
  listingBanners?: Banner[];
  topBanners?: Banner[];
  colorOptions?: any[];
  suggestions?: any[];
}

export default function App(props: ApplicationProps) {
  const partyTownEnable = false;

  return (
    <SearchSuggestionProvider initialSearchSuggestions={props.suggestions}>
      {partyTownEnable && <PartyTownHead />}
      <BannerProvider listingBanners={props.listingBanners} topBanners={props.topBanners}>
        <ProductProvider
          initialProducts={props.products}
          initialColorOptions={props.colorOptions}
        >
          <Header />
          <Pdp />
        </ProductProvider>
      </BannerProvider>
    </SearchSuggestionProvider>
  );
}
