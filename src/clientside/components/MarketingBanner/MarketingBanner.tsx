import { useBanner } from "../../context/banner-context";
import { BannerType } from "../../interfaces/banner";

interface MarketingBannerProps {
  bannerType: BannerType
}
const MarketingBanner = ({ bannerType }: MarketingBannerProps) => {
  const { bannerList } = useBanner();

  if (!bannerList?.length) return null;

  const banner = bannerList.find(({ type }) => type === bannerType);

  return (
    <div className="marketing-banner">
      <img src={banner?.imageUrl} alt={banner?.name} />
    </div>
  )
};

export { MarketingBanner };
