import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useStateValue } from "./StateProvide";
import { auth } from './Firebase';
function Header() {
  const [{basket,user}]=useStateValue()
  console.log(basket)
  const login=()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <nav className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="logo"
        />
      </Link>
      <div className="header_Search">
        <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} className="header_link">
          <div className="header_option" onClick={login}>
            <span className="headerOption_line1">Hello {user&&user.email}</span>
            <span className="headerOption_line2">{user ?"Sign out":"Sign In"}</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="headerOption_line1">Return</span>
            <span className="headerOption_line2">& Orders</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="headerOption_line1">Your</span>
            <span className="headerOption_line2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header_link">
          <div className="header_optionBasket">
            <ShoppingBasketIcon/>
            <span className="headerOption_line2 basketCount">{basket?.length}</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
