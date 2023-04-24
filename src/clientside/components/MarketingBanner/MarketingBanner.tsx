// import "./MarketingBanner.scss";

const MarketingBanner = () => {
  const image = "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg";
  // const image = "https://cdn.dsmcdn.com/ty739/int/banner/20022023a9b20_DE_web_info_banner.jpg"

  return (
    <div className="marketing-banner">
      <img src={image} alt="" />
    </div>
  );
};

export { MarketingBanner };
