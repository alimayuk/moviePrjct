import React from 'react'
import { getTopNav } from '../data/navbarData'
import {BsFacebook,BsTwitter,BsInstagram,BsPinterest} from "react-icons/bs"
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems = getTopNav();
  return (
    <div className='footer'>
        <div className="container">
            <div className="topFooter">
                <h1>Movies</h1>
               <ul className='menu'>
               {navItems.map((item)=>(
                    <li key={item.id}>
                        <Link to={item.to}>{item.name}</Link>
                    </li>
          ))}
               </ul>
              <div className="socialsFooter">
           <Link to={""}><BsPinterest className='socialIcon'/></Link>     
                <Link to={""}><BsInstagram className='socialIcon'/></Link>
                <Link to={""}><BsTwitter className='socialIcon'/></Link>
                <Link to={""}><BsFacebook className='socialIcon'/></Link>
              </div>
            </div>
            <hr className='hrFooter'/>
            <div className='footerBottom'>
                <p>@copyright2022movies</p>
            </div>
        </div>
        </div>
  )
}

export default Footer