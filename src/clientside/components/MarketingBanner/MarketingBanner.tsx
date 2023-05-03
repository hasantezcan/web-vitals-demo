import { Banner } from "../../interfaces/banner";

interface MarketingBannerProps {
  bannerList: Banner[];
}
const MarketingBanner = ({ bannerList }: MarketingBannerProps) => {

  if (!bannerList?.length) return null; // add placeholder if data is not exist

  return (
    <div className="marketing-banner">
      <a href="https://www.subaymuco.com/">
        <img src={bannerList[0]?.imageUrl} alt={bannerList[0]?.name} />
      </a>
    </div>
  )
};

export { MarketingBanner };
