import { Banner } from "../../interfaces/banner";

interface MarketingBannerProps {
    bannerList: Banner[];
    bannerType?: string;
}
const MarketingBannerWithPlaceholder = ({ bannerList, bannerType }: MarketingBannerProps) => {

    if (bannerType !== "header" && !bannerList?.length && !bannerList[0].imageUrl) return null;
    // we should add placeholder to prevent broken images or non existing data

    return (
        <div className="marketing-banner">
            <a href="https://www.subaymuco.com/">
                <img src={bannerList[0]?.imageUrl || "https://via.placeholder.com/1920x108"} alt={bannerList[0]?.name} />
            </a>
        </div>
    )
};

export { MarketingBannerWithPlaceholder };
