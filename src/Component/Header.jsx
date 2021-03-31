import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="ul1" >
        <li>
          <NavLink to="/" className="le">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="le">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="le">
            Contact
          </NavLink>
        </li>
      </ul>

      <ul className="ul2">
        <li>
          <NavLink to="/login" className="le">
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className="le">
            Signup
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
