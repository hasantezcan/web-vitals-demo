import {
  Context,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { Banner } from "../interfaces/banner";
import { API_URL } from "../../constants";

interface IBannerContext {
  topBannerList: Banner[];
  listingBannerList: Banner[];
  getListingBannerData: () => void
  getTopBannerData: () => void

}

const defaultBannerContext: IBannerContext = {
  topBannerList: [],
  listingBannerList: [],
  getListingBannerData: () => null,
  getTopBannerData: () => null
};

interface BannerContextProps {
  initialBanners?: Banner[];
  listingBanners?: Banner[];
  topBanners?: Banner[];
}

const BannerContext: Context<IBannerContext> = createContext(
  defaultBannerContext
);

const useBanner = () => useContext(BannerContext);

const BannerProvider = ({
  children,
  listingBanners,
  topBanners,
}: PropsWithChildren<BannerContextProps>) => {
  const setInitialBannerList = (initialBanners?: Banner[]) =>
    initialBanners && Array.isArray(initialBanners) && initialBanners.length
      ? initialBanners
      : [];

  const [listingBannerList, setListingBannerList] = useState<Banner[]>(
    setInitialBannerList(listingBanners));

  const [topBannerList, setTopBannerList] = useState<Banner[]>(
    setInitialBannerList(topBanners)
  );
  const checkBannersExist = (bannerData: Banner[]) => bannerData && Array.isArray(bannerData) && bannerData.length;

  const getTopBannerData = async () => {
    const topBannerResponse = await fetch(`${API_URL}/top-banners`);
    const topBanner = await topBannerResponse.json();
    if (checkBannersExist(topBanner)) {
      setTopBannerList(topBanner);
    }
  };

  const getListingBannerData = async () => {
    const listingBannerResponse = await fetch(`${API_URL}/listing-banners`);
    const listingBanner = await listingBannerResponse.json();
    if (checkBannersExist(listingBanner)) {
      setListingBannerList(listingBanner);
    }
  };

  return (
    <BannerContext.Provider
      value={{
        topBannerList,
        listingBannerList,
        getTopBannerData,
        getListingBannerData
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export { BannerProvider, useBanner };
