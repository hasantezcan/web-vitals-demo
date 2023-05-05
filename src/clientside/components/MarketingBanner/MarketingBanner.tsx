import { Banner } from "../../interfaces/banner";

interface MarketingBannerProps {
  bannerList: Banner[];
  bannerType?: string;
}
const MarketingBanner = ({ bannerList }: MarketingBannerProps) => {

  if (!bannerList?.length && !bannerList[0]?.imageUrl) return null;


  return (
    <div className="marketing-banner">
      <a href="https://www.subaymuco.com/">
        <img src={bannerList[0]?.imageUrl} alt={bannerList[0]?.name} />
      </a>
    </div>
  )
};

export { MarketingBanner };
