import { useEffect, useState } from "react";
import { asyncForEach } from "../../../utils/common";
// import "./Header.scss";

const Header = () => {
  const fetchPeople = async () => {
    const url = "https://swapi.dev/api/people/";
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    const arr = new Array(10).fill(0);

    // asyncForEach(arr, async (num: any) => {
    //   await fetchPeople();
    // });
  }, []);

  const [showSearchSuggestions, setShowSearchSuggestions] = useState(false);

  const handleSearchFocus = () => {
    setShowSearchSuggestions(true);
  };

  const handleSearchBlur = () => {
    setShowSearchSuggestions(false);
  };

  return (
    <div className="header-wrapper">
      <div className="header">
        <img className="ty-logo" src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
        <div className="search-bar">
          <input
            type="text"
            placeholder="Type the product, category or brand you are looking"
            onFocus={handleSearchFocus}
            onBlur={handleSearchBlur}
          />
          <span>
            <img className="search-icon" src="https://cdn.dsmcdn.com/sfint/production/search_1682335823564.svg" />
          </span>

          {showSearchSuggestions && (
            <div className="search-suggestions">
              <div className="search-suggestion">
                <div className="search-suggestion-item">Nike</div>
                <div className="search-suggestion-item">Puma</div>
                <div className="search-suggestion-item">Adidas</div>
                <div className="search-suggestion-item">Kundura</div>
              </div>
            </div>
          )}
        </div>
        <div className="navigations">
          <div className="navigation-item login">
            <img src="https://cdn.dsmcdn.com/sfint/production/icons/user_1664873317937.svg" alt="" />
            <span>Login</span>
          </div>
          <div className="navigation-item fav">
            <img src="https://cdn.dsmcdn.com/sfint/production/icons/heart_1664873982562.svg" alt="" />
            <span>Favorites</span>
          </div>
          <div className="navigation-item cart">
            <img src="https://cdn.dsmcdn.com/sfint/production/icons/cart-icon_1676639437773.svg" alt="" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Header };
