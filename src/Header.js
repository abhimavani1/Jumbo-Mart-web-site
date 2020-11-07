import React from "react";
import "./Header.css";
// import SearchIcon from "@material-ui/icons/Search";
// import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import logo from "../src/image/logo2.png";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img className="header__logo" src={logo} />
      </Link>

      <div className="header__search">
        {/* <input className="header__searchInput" type="text" /> */}
        {/* <SearchIcon className="header__searchIcon" /> */}
      </div>

      <div className="header__nav">
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineTwo ">
              <h2>🛒 {basket?.length} </h2>
            </span>
          </div>
        </Link>
        <Link to="/Users">
          <div className="header__option">
            <span className="header__optionLineOne"> </span>
            <span className="header__optionLineTwo"> Best Offers</span>
          </div>
        </Link>
        <Link to="/About">
          <div className="header__option">
            <span className="header__optionLineTwo"> About us</span>
          </div>
        </Link>

        <Link to="/orders">
          <div className="header__option">
            <span className="header__optionLineOne"></span>
            <span className="header__optionLineTwo">Returns Orders</span>
          </div>
        </Link>
        <Link to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">
              Hello {!user ? "Guest" : user.email}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : " 🔒 Sign In"}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
