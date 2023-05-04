import { useEffect } from "react";
import { MarketingBanner } from "../MarketingBanner/MarketingBanner";
import { useBanner } from "../../context/banner-context";
import { ICONS } from "../../icons/icons";
import { Search } from "./Search";
import { Navigations } from "./Navigations";
import { MarketingBannerWithPlaceholder } from "../MarketingBanner/MarketingBannerWithPlaceholder";

const Header = () => {
  const { getTopBannerData, topBannerList } = useBanner();

  useEffect(() => {
    getTopBannerData();
  }, [])


  return (
    <div className="page-header">
      <div className="banner">
        <MarketingBanner bannerList={topBannerList} />
        {/* <MarketingBannerWithPlaceholder bannerList={topBannerList} bannerType="header" /> */}
      </div>
      <div className="header-wrapper">
        <div className="header">
          <img
            className="ty-logo"
            src={ICONS.TRENDYOL_LOGO}
            alt="trendyol logo"
          />
          <Search />
          <Navigations />
        </div>
      </div>
    </div>
  );
};

export { Header };
