import React from 'react'
import { Header } from "./components/Header/Header";
import { MarketingBanner } from "./components/MarketingBanner/MarketingBanner";
import { Pdp } from "./components/Pdp/Pdp";
import { ProductProvider } from "./context/product-context";

export default function App(props: any) {
  return (
    <ProductProvider>
      <MarketingBanner />
      <Header />
      <Pdp />
    </ProductProvider>

  );
}
