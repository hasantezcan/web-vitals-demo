import { useEffect, useState } from "react";
import { API_URL } from "../../../constants";

const HomeBanner = ({ data: initialData }: { data: any }) => {
  const [data, setData] = useState(initialData || []);
  const [asyncData, setAsyncData] = useState([]);

  const getListingBannerData = async (setter: any) => {
    // await new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(true);
    //   }, 3000);
    // });

    const listingBannerResponse = await fetch(`${API_URL}/home-banners`);
    const listingBanner = await listingBannerResponse.json();
    setter(listingBanner);
  };

  useEffect(() => {
    if (!initialData) {
      getListingBannerData(setData);
    }

    getListingBannerData(setAsyncData);
  }, []);

  return (
    <div className="banners">
      {data.map((item: any) => {
        return (
          <div key={item.imageUrl}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        );
      })}
      {asyncData.map((item: any) => {
        return (
          <div key={item.imageUrl}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        );
      })}
      {asyncData.map((item: any) => {
        return (
          <div key={item.imageUrl}>
            <img src={item.imageUrl} alt={item.name} />
          </div>
        );
      })}
    </div>
  );
};

export default HomeBanner;
