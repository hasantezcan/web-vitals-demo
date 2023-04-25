import { Header } from "./components/Header/Header";
import { MarketingBanner } from "./components/MarketingBanner/MarketingBanner";
import { Pdp } from "./components/Pdp/Pdp";

export default function App() {
  return (
    <div>
      <MarketingBanner />
      <Header />
      <Pdp />
    </div>
  );
}
