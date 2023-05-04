import { useState } from "react";
import { ICONS } from "../../icons/icons";
import { PROFILE_IMAGE } from "../../enums";


const Navigations = () => {

    return (
        <div className="navigations">
            <div className="navigation-item login">
                <img
                    src={ICONS.LOGIN}
                    alt=""
                />
                <span>Account</span>
            </div>
            <div className="navigation-item fav">
                <img
                    src={ICONS.FAVORITES}
                    alt=""
                />
                <span>Favorites</span>
            </div>
            <div className="navigation-item cart">
                <img
                    src={ICONS.BASKET}
                    alt=""
                />
                <span>Cart</span>
            </div>
            <div className="navigation-item profile">
                <a href="https://www.subaymuco.com/" target="_blank">
                    <img
                        src={PROFILE_IMAGE}
                        alt="subay-muco"
                    />
                    <span>Subay Muco</span>
                </a>
            </div>
        </div>
    )

};

export { Navigations };
