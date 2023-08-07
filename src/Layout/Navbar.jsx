import React, { useState,useEffect } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { getTopNav } from "../data/navbarData";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [navItem, setNavItem] = useState([]);
 
  useEffect(() => {
    setNavItem(getTopNav())
}, [])
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {
    setActive("navBar activeNavBar");
  };

  const removeNavBar = () => {
    setActive("navBar");
  };

  //başlığa arka plan rengi ekleme
  const [activeHeader, setActiveHeader] = useState("header");

  const addBg = () => {
    if (window.scrollY >= 10) {
      setActiveHeader("header activeHeader");
    } else {
      setActiveHeader("header");
    }
  };

  window.addEventListener("scroll", addBg);
  return (
    <header className={activeHeader}>
      <div className="logoDiv">
        <h1 className="logo">
          <Link to={"/"}>Movies</Link>
        </h1>
      </div>
     
      <div className={active}>
        <ul onClick={removeNavBar} className="navLists">
        {navItem.map((item)=>
          <li key={item.id} className='navItem'>
            <Link  to={item.to} className="navLink">{item.name}</Link>
            </li>  
        )}
          <button className="btn">
            <Link to={"/start"}>
              Log In
            </Link>
          </button>
          
        </ul>
        <div onClick={removeNavBar} className="closeNavBar">
          <AiFillCloseCircle className="icon" />
        </div>
      </div>

      <div onClick={showNavBar} className="toggleNavBar">
        <TbGridDots className="icon" />
      </div>
    </header>
  );
};

export default Navbar;