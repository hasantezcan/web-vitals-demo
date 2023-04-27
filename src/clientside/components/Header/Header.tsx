import { useEffect, useState } from "react";
import { useSearchSuggestion } from "../../context/search-suggestion-context";
import { MarketingBanner } from "../MarketingBanner/MarketingBanner";
import { useBanner } from "../../context/banner-context";

const Header = () => {
  const { searchSuggestionList, getSearchSuggestionData } = useSearchSuggestion();
  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);
  const { getTopBannerData, topBannerList } = useBanner();

  useEffect(() => {
    getTopBannerData();
  }, [])
  
  const handleSearchFocus = () => {
    getSearchSuggestionData();
    setShowSearchSuggestions(true);
  };

  const handleSearchBlur = () => {
    setShowSearchSuggestions(false);
  };


  return (
    <>
      <MarketingBanner bannerList={topBannerList} />
      <div className="header-wrapper">
        <div className="header">
          <img
            className="ty-logo"
            src="https://cdn.dsmcdn.com/web/logo/ty-web.svg"
            alt=""
          />
          <div className="search-bar">
            <input
              type="text"
              placeholder="Type the product, category or brand you are looking"
              // onFocus={handleSearchFocus}
              onChange={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
            <span>
              <img
                className="search-icon"
                src="https://cdn.dsmcdn.com/sfint/production/search_1682335823564.svg"
              />
            </span>

            {showSearchSuggestions && (
              <div className="search-suggestions">
                <div className="search-suggestion">
                  {
                    searchSuggestionList && Array.isArray(searchSuggestionList) && searchSuggestionList.length ? searchSuggestionList.map(suggestion => {
                      return <div className="search-suggestion-item" >{suggestion.name}</div>
                    }) : null
                  }
                </div>
              </div>
            )}
          </div>
          <div className="navigations">
            <div className="navigation-item login">
              <img
                src="https://cdn.dsmcdn.com/sfint/production/icons/user_1664873317937.svg"
                alt=""
              />
              <span>Account</span>
            </div>
            <div className="navigation-item fav">
              <img
                src="https://cdn.dsmcdn.com/sfint/production/icons/heart_1664873982562.svg"
                alt=""
              />
              <span>Favorites</span>
            </div>
            <div className="navigation-item cart">
              <img
                src="https://cdn.dsmcdn.com/sfint/production/icons/cart-icon_1676639437773.svg"
                alt=""
              />
              <span>Cart</span>
            </div>
            <div className="navigation-item profile">
              <a href="https://www.subaymuco.com/" target="_blank">
                <img
                  src="https://www.subaymuco.com/_next/image?url=%2Fmuco-images%2Fsubay-muco.jpg&w=750&q=75"
                  alt="subay-muco"
                />
                <span>Subay Muco</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { Header };
