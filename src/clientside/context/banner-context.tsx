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
  BannerList: Banner[];
}

const defaultBannerContext: IBannerContext = {
  BannerList: [],
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

  const [BannerList, setBannerList] = useState<Banner[]>(
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
    if (!BannerList?.length) getBannerData();
  }, []);

  return (
    <BannerContext.Provider
      value={{
        BannerList,
      }}
    >
      {children}
    </BannerContext.Provider>
  );
};

export { BannerProvider, useBanner };
