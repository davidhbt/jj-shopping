import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <div className="NavBar">
      <div className="NavLinks">
      <div className="Navlink">
          <div className="NavLinkcover">
            <img src="" alt="" className="NavLinkIcon" />
          </div>
          <label  className="NavLinkLabel">Cart</label>
        </div>
        <div className="Navlink">
          <div className="NavLinkcover">
            <img src="" alt="" className="NavLinkIcon" />
          </div>
          <label  className="NavLinkLabel">Shop</label>
        </div>
        <div className="Navlink">
          <div className="NavLinkcover">
            <img src="" alt="" className="NavLinkIcon" />
          </div>
          <label  className="NavLinkLabel">Track Order</label>
        </div>
      </div>
    </div>
  );
}

export default Nav;
