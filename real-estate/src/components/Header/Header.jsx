/* eslint-disable no-unused-vars */
import React from 'react'
import "./Header.css";
import { FaHome } from "react-icons/fa";

const Header = () => {
  return (
    <section className='h-wrapper'>
        <div className='h-container'>
            <div className='logo'>
             <FaHome className='icon' /> 
             <span className='name'>HOMIZ</span>
            </div>
            <div className='flexCenter h-menu'>
                <a href=''>Residency</a>
                <a href=''>Our Value</a>
                <a href=''>Contact Us</a>
                <a href=''>Get Started</a>
                <button className='button'>
                    <a href=''>Contact</a>
                </button>
                
            </div>
        
        </div>
    </section>
    
  )
}

export default Header