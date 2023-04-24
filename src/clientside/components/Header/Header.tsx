import React from "react";
// import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="header">
        <img className="ty-logo" src="https://cdn.dsmcdn.com/web/logo/ty-web.svg" alt="" />
        <div className="search-bar">
          <input type="text" placeholder="Type the product, category or brand you are looking" />
          <span>
            <img className="search-icon" src="https://cdn.dsmcdn.com/sfint/production/search_1682335823564.svg" />
          </span>
        </div>
      </div>
    </div>
  );
};

export { Header };
