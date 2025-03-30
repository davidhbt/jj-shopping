import React from "react";
import "./Nav.css";
import Cart from "../assets/Cart-icon.png";
import TrackOrder from "../assets/TrackOrder-icon.png";
import Profile from '../assets/Profile-icon.png'
import Shop from '../assets/Shop-icon.png'


import Shop_a from "../assets/Shop-icon-activate.png";
import Cart_a from "../assets/Cart-icon-activate.png";
import TrackOrder_a from "../assets/TrackOrder-icon-activate.png";
import Profile_a from "../assets/Profile-icon-activate.png";

import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Nav() {

  const location = useLocation();
  const currentPath = location.pathname;

  console.log(currentPath)


  const highlightcss_div = {
    backgroundColor: "var(--color1)",
    color: 'white',
    transition: '1s'
    
  }


  const highlightcss_label = {
    color: 'white'
  }

  const highlightcss_img = {
    filter: "brightness(0) invert(1)",
    // transition: '1s'
  }


  return (
    <div className="NavBar">
      <div className="NavLinks">
        <Link className="NavLink">
          <div className="NavLinkCover">
            <img src={Cart} alt="" className="NavLinkIcon" />
          </div>
          <label className="NavLinkLabel">Cart</label>
        </Link>
        <Link to='/' className="NavLink">
          <div 
            className="NavLinkCover"
            style={currentPath === '/' ? highlightcss_div : undefined}
          >
            <img style={currentPath === '/' ? highlightcss_img : undefined} src={Shop} alt="" className="NavLinkIcon" />
          </div>
          <label style={currentPath === '/' ? highlightcss_label : undefined} className="NavLinkLabel">
            Shop
          </label>
        </Link>
        <Link className="NavLink">
          <div className="NavLinkCover">
            <img src={TrackOrder} alt="" className="NavLinkIcon" />
          </div>
          <label className="NavLinkLabel">Track</label>
        </Link>{" "}
        <Link to='/auth' className="NavLink"
        >
          <div className="NavLinkCover"
            style={currentPath === '/auth' ? highlightcss_div : undefined}

          >
            <img
            style={currentPath === '/auth' ? highlightcss_img : undefined}
             src={Profile} alt="" className="NavLinkIcon" />
          </div>
          <label className="NavLinkLabel"
          style={currentPath === '/auth' ? highlightcss_label : undefined}
          >Profile</label>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
