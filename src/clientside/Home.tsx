import { Header } from "./components/Header/Header";
import HomeBanner from "./components/HomeBanner/HomeBanner";
import { Banner } from "./interfaces/banner";

interface ApplicationProps {
  listingBanners?: Banner[];
  isSsr?: boolean;
}

export default function Home(props: ApplicationProps) {
  return (
    <>
      <Header />
      <HomeBanner data={props.listingBanners} />
    </>
  );
}
