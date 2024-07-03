import React from "react";
import "./Nav.css";
import { NavLink, Link } from "react-router-dom";
import { v4 } from "uuid";
import { useState } from "react";
import Method_logo from "../NavBar/images/Method_logo.svg";

export const Navbar = ({ Mode }) => {

  const navItems = [
    { id: 1, title: "Services", path: "/services" },
    { id: 2, title: "Courses", path: "Courses" },
    { id: 3, title: "New Arrivals", path: "New Arrivals" },
    { id: 4, title: "Career Launch", path: "Career Launch" },
    { id: 5, title: "Contact us", path: "contact" },
    { id: 6, title: "News & Blog", path: "News_Blog" },
    
  ];

  const [isChecked, setisChecked] = useState(true);
  const handleHamburger = () => {
    setisChecked(!isChecked);
  };
  const handleCheckboxChange = (e) => {
    setisChecked(!isChecked);
  };

  return (
    <>
      <header
        className="nav"
      
      >
        <input type="checkbox" id="nav-check" checked={!isChecked} onChange={handleCheckboxChange}/>
        <div className="nav-header col-lg-3">
          <div className="nav-title">
            <Link to="/" onClick={() => window.scroll(0, 0, "smooth")}>
              {Mode ? (
                <img src={Method_logo} alt="Company Logo" className="navbar-logo"/>
              ) : (
                <img src={Method_logo} alt="Company Logo" className="navbar-logo"/>
              )}
            </Link>
          </div>
        </div>
       
        <div className="nav-links col-lg-8">
          <ul>
            {navItems.map(({ title, path}) => (
              <li key={v4()} onClick={handleHamburger}>
                <NavLink to={path} activeclassname="active" onClick={() => window.scroll(0, 0, "smooth")}>
                  {title}
                </NavLink>
              </li>
            ))}
          
          </ul>
        </div>
    
      </header>
    </>
  );
};

export default Navbar;
