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
  bannerList: Banner[];
}

const defaultBannerContext: IBannerContext = {
  bannerList: [],
};

interface BannerContextProps {
  initialBanners?: Banner[];
}

const BannerContext: Context<IBannerContext> = createContext(
  defaultBannerContext
);

const useBanner = () => useContext(BannerContext);

const BannerProvider = ({
  children,
  initialBanners,
}: PropsWithChildren<BannerContextProps>) => {
  const setInitialBannerList = () =>
    initialBanners && Array.isArray(initialBanners) && initialBanners.length
      ? initialBanners
      : [];

  const [bannerList, setBannerList] = useState<Banner[]>(
    setInitialBannerList()
  );

  const getBannerData = async () => {
    const response = await fetch(`${API_URL}/banners`);
    const BannerData = await response.json();
    if (BannerData && Array.isArray(BannerData) && BannerData.length) {
      setBannerList(BannerData);
    }
  };

  useEffect(() => {
    if (!bannerList?.length) getBannerData();
  }, []);

  return (
    <BannerContext.Provider
      value={{
        bannerList,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export { BannerProvider, useBanner };
