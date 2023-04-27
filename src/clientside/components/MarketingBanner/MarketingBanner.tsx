import { Banner } from "../../interfaces/banner";

interface MarketingBannerProps {
  bannerList: Banner[];
}
const MarketingBanner = ({ bannerList }: MarketingBannerProps) => {

  if (!bannerList?.length) return null;

  return (
    <div className="marketing-banner">
      <img src={bannerList[0]?.imageUrl} alt={bannerList[0]?.name} />
    </div>
  )
};

export { MarketingBanner };
